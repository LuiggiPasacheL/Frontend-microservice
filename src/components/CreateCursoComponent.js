import React, { Component } from 'react';
import CursoService from '../service/CursoService';
import { Navigate } from 'react-router-dom'
import CookiesHelper from '../service/CookiesService';

class CreateCursoComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            alumnoID: '',
            nombrecurso: '',
            codalu: '',
            n1: '',
            n2: '',
            n3: '',
            prom: ''

        }
        this.changeAlumnoIDHandler = this.changeAlumnoIDHandler.bind(this);
        this.changeAlumnoCodHandler = this.changeAlumnoCodHandler.bind(this);
        this.changeNombreHandler = this.changeNombreHandler.bind(this);
        this.changeN1Handler = this.changeN1Handler.bind(this);
        this.changeN2Handler = this.changeN2Handler.bind(this);
        this.changeN3Handler = this.changeN3Handler.bind(this);
        this.changePromHandler = this.changePromHandler.bind(this);
        this.saveCurso = this.saveCurso.bind(this);
    }
    saveCurso = (e) => {
        e.preventDefault();
        let id = parseInt(CookiesHelper.getId());
        let curso = { 
            codalu: id, 
            curso: this.state.nombrecurso,
            califi: this.state.prom 
        };
        console.log('Curso guardado')
        console.log('Enviando =>' + JSON.stringify(curso));
        CursoService.createCurso(curso).then(res => {
            console.log(res.data)
        })
        // window.location.href = "/";
    }

    changeAlumnoIDHandler = (event) => {
        this.setState({ alumnoID: event.target.value });
    }

    changeAlumnoCodHandler = (event) => {
        this.setState({ codalu: event.target.value });
    }

    changeNombreHandler = (event) => {
        this.setState({ nombrecurso: event.target.value });
    }

    changeN1Handler = (event) => {
        this.setState({ n1: event.target.value });
    }

    changeN2Handler = (event) => {
        this.setState({ n2: event.target.value });
    }
    changeN3Handler = (event) => {
        this.setState({ n3: event.target.value });
    }

    changePromHandler = (event) => {
        this.setState({ prom: event.target.value });
    }

    cancel() {
        this.props.history.push('/reporte-notas');
    }

    agregarotro() {
        this.props.history.push('/ingreso-notas');
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3"></div>


                        <h3 className="text-center">Agregar notas de un curso</h3>
                        <div className="card-body">
                            <form>

                                <div className="form-group">

                                    <label>Nombre del curso</label>
                                    <input placeholder="Nombre del curso" name="n1" className="form-control"
                                        value={this.state.nombrecurso} onChange={this.changeNombreHandler} />

                                </div>


                                <div className="form-group">

                                    <label>N1</label>
                                    <input placeholder="0-20" name="n1" className="form-control"
                                        value={this.state.n1} onChange={this.changeN1Handler} />

                                </div>



                                <div className="form-group">

                                    <label>N2</label>
                                    <input placeholder="0-20" name="n2" className="form-control"
                                        value={this.state.n2} onChange={this.changeN2Handler} />


                                </div>

                                <div className="form-group">

                                    <label>N3</label>
                                    <input placeholder="0-20" name="n3" className="form-control"
                                        value={this.state.n3} onChange={this.changeN3Handler} />


                                </div>

                                <div className="form-group">

                                    <label>Promedio</label>
                                    <input placeholder="PROMEDIO" name="prom" className="form-control"
                                        value={this.state.prom = Math.round(((parseFloat(this.state.n1) + parseFloat(this.state.n2) + parseFloat(this.state.n3)) / (3)))} onChange={this.changePromHandler} />
                                </div>

                                <button className="btn btn-success" onClick={this.saveCurso} style={{ marginLeft: "330px", marginTop: "10px" }}>Guardar</button>
                                <a href="./menu" className="btn btn-danger" style={{ marginLeft: "10px", marginTop: "10px" }}>Cancelar</a>
                                <button className="btn btn-info" onClick={this.agregarotro.bind(this)} style={{ marginLeft: "10px", marginTop: "10px" }}>Agregar otro curso</button>
                            </form>

                        </div>
                    </div>
                </div>

            </div>

        );
    }
}

export default CreateCursoComponent;