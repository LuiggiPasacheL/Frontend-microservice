import React, { Component } from 'react';
import CursoService from '../service/CursoService';
import { Navigate } from 'react-router-dom';
import cookiesHelper from '../service/CookiesService';

class LoginAlumnoComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nombreAlumno: '',
            alumnos: []
        }
        this.changeNombreAlumnoHandler = this.changeNombreAlumnoHandler.bind(this);
        this.ingresar= this.ingresar.bind(this);
    }

    componentDidMount() {
        CursoService.getUsuarios().then((res) => {
            this.setState({ alumnos: (res.data) })
            console.log(res.data)
        }).catch((err)=>{
            console.log('Ha ocurrido un error aqui');
            console.log(err);
        })
    }

    ingresar = (nombre) => {
        /*let alumno = {
            id: this.state.alumnoID,
            codalu: this.state.apellidoAlumno,
            nombre: this.state.nombreAlumno
        };*/
        const result_id = this.state.alumnos.indexOf(
            alumno => alumno.nombre == nombre
        )
        if(result_id != -1){
            const result_name = this.state.alumnos[result_id].name
            //Exportar el indice obtenido al reporte 
            cookiesHelper.setId(result_id);
            cookiesHelper.setNombre(result_name);
            window.location.href="./menu";
        }else{
            console.log('credenciales incorrectas')
        }
    }

    changeNombreAlumnoHandler = (event) => {
        this.setState({ nombreAlumno: event.target.value });
    }

    cancel() {
        this.props.history.push('./');
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3"></div>
                        <h3 className="text-center">Login</h3>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label>Nombre</label>
                                    <input placeholder="Nombre del alumno" name="n1" className="form-control"
                                        value={this.state.nombrecurso} onChange={this.changeNombreAlumnoHandler} />
                                </div>
                                <button className="btn btn-success" onClick={this.ingresar(this.state.nombrecurso)} style={{ marginLeft: "120px", marginTop: "10px" }}>Ingresar</button>
                                <a href="./" className="btn btn-danger" style={{ marginLeft: "10px", marginTop: "10px" }}>Cancelar</a>
                            </form>

                        </div>
                    </div>
                </div>

            </div>

        );
    }
}

export default LoginAlumnoComponent;