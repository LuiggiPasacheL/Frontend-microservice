import React, { Component } from 'react';
import CursoService from '../service/CursoService';
import { Navigate } from 'react-router-dom'
import CookiesService from '../service/CookiesService';

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
        let id = CookiesService.getId(); 
        let alumno = {
            curso: parseInt(this.state.apellidoAlumno),
            codalu: parseInt(id) + 1,
            nombre: this.state.nombreAlumno
        };
        console.log('Alumno guardado')
        console.log('tipo =>' + JSON.stringify(alumno));
        CursoService.createAlumno(alumno).then(res => {
            console.log(res.data)
        })
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
        this.props.history.push('./');
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
                                    <label>Nombre/s</label>
                                    <input placeholder="Jorge Luis" name="n1" className="form-control"
                                        value={this.state.n1} onChange={this.changeNombreAlumnoHandler} />
                                </div>

                                <div className="form-group">
                                    <label>Curso</label>
                                    <input placeholder="Arquitectura" name="n2" className="form-control"
                                        value={this.state.n2} onChange={this.changeApellidoAlumnoHandler} />
                                </div>

                                <button className="btn btn-success" onClick={this.saveAlumno} style={{ marginLeft: "330px", marginTop: "10px" }}>Guardar alumno</button>
                                <a href="./menu" className="btn btn-danger" style={{ marginLeft: "10px", marginTop: "10px" }}>Cancelar</a>
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