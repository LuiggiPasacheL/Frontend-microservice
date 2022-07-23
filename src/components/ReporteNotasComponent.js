import React, { Component } from 'react';
import CookiesService from '../service/CookiesService';
import CursoService from '../service/CursoService'

class ReporteNotasComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cursos: []
        }
    }

    componentDidMount() {
        let id = CookiesService.getId();
        let nombre = CookiesService.getNombre();
        CursoService.getNotas(id).then((res) => {
            this.setState({ cursos: (res.data.value), nombre })
            console.log(res.data)
        }).catch((err)=>{
            console.log('Ha ocurrido un error aqui');
            console.log(err);
        })
    }

    render() {
        return (
            <div>
                <div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th className="head" style={{color: "black"}}>Alumno</th>
                                <th className="head" style={{color: "black"}}>Curso</th>
                                <th className="head" style={{color: "black"}}>Promedio final</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.cursos.map(
                                    curso =>
                                        <tr>
                                            <td> {this.state.nombre} </td>
                                            <td> {curso.PartitionKey} </td>
                                            <td> {curso.califi} </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table >
                </div>
                <div>
                    <a href="./menu" className="btn btn-danger" style={{ marginLeft: "10px", marginTop: "10px" }}>Regresar</a>
                </div>
            </div>
        )
    }
}

export default ReporteNotasComponent;