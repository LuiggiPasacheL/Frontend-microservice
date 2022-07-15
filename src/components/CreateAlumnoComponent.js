import React, { Component } from 'react';
import CursoService from '../service/CursoService';
import { Navigate } from 'react-router-dom'

class CreateAlumnoComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            alumnoID: '',
            nombreAlumno: '',
            apellidoAlumno: '',
        }
        this.changeAlumnoIDHandler = this.changeAlumnoIDHandler.bind(this);
        this.changeNombreAlumnoHandler = this.changeNombreAlumnoHandler.bind(this);
        this.changeApellidoAlumnoHandler = this.changeApellidoAlumnoHandler.bind(this);
        this.saveAlumno = this.saveAlumno.bind(this);
    }
    saveAlumno = (e) => {
        e.preventDefault();
        let alumno = {
            id: this.state.alumnoID,
            codalu: this.state.apellidoAlumno,
            nombre: this.state.nombreAlumno
        };
        console.log('Alumno guardado')
        console.log('tipo =>' + JSON.stringify(alumno));
        CursoService.createAlumno(alumno).then(res => {
            console.log(res.data)
        })
        window.location.href = "/";
    }
    changeNombreAlumnoHandler = (event) => {
        this.setState({ nombreAlumno: event.target.value });
    }
    changeApellidoAlumnoHandler = (event) => {
        this.setState({ apellidoAlumno: event.target.value });
    }

    changeAlumnoIDHandler = (event) => {
        this.setState({ alumnoID: event.target.value });
    }

    cancel() {
        this.props.history.push('/reporte-alumno');
    }

    agregarotro() {
        this.props.history.push('/ingreso-alumno');
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3"></div>
                        <h3 className="text-center">Agregar alumno</h3>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label>ID</label>
                                    <input placeholder="101" name="n1" className="form-control"
                                        value={this.state.nombrecurso} onChange={this.changeAlumnoIDHandler} />
                                </div>

                                <div className="form-group">
                                    <label>Nombre/s</label>
                                    <input placeholder="Jorge Luis" name="n1" className="form-control"
                                        value={this.state.n1} onChange={this.changeNombreAlumnoHandler} />
                                </div>

                                <div className="form-group">
                                    <label>Apellidos</label>
                                    <input placeholder="Quispe Alarcón" name="n2" className="form-control"
                                        value={this.state.n2} onChange={this.changeApellidoAlumnoHandler} />
                                </div>

                                <button className="btn btn-success" onClick={this.saveAlumno} style={{ marginLeft: "330px", marginTop: "10px" }}>Guardar alumno</button>
                                <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px", marginTop: "10px" }}>Cancelar</button>
                                <button className="btn btn-info" onClick={this.agregarotro.bind(this)} style={{ marginLeft: "10px", marginTop: "10px" }}>Agregar otro alumno</button>
                            </form>

                        </div>
                    </div>
                </div>

            </div>

        );
    }
}

export default CreateAlumnoComponent;