import React, { Component } from 'react';
import CursoService from '../service/CursoService';

class ReportCursoComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            nombrecurso:'',
            n1:'',
            n2:'',
            n3:'',
            prom:''
                
        }
        this.changeNombreHandler=this.changeNombreHandler.bind(this);
        this.changeN1Handler=this.changeN1Handler.bind(this);
        this.changeN2Handler=this.changeN2Handler.bind(this);
        this.changeN3Handler=this.changeN3Handler.bind(this);
        this.changePromHandler=this.changePromHandler.bind(this);
        this.getCurso=this.getCurso.bind(this);
    }
     getCurso=(e)=>{
      e.preventDefault();
      
     CursoService.getCurso().then(res=>{
         console.log("Obteniendo cursos...");
     })
     }
     changeNombreHandler=(event)=>{
        this.setState({nombrecurso:this.getCurso().nombrecurso});
    }
    changeN1Handler=(event)=>{
        this.setState({n1:this.getCurso().n1});
    }

    changeN2Handler=(event)=>{
        this.setState({n2:this.getCurso().n2});
    }
    changeN3Handler=(event)=>{
        this.setState({n3:this.getCurso().n3});
    }

    changePromHandler=(event)=>{
        this.setState({prom:this.getCurso().prom});
    }

    render() {
        return (
            <div>
              <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Curso</th>
                            <th scope="col">Promedio</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Nombre de curso</td>
                            <td>Promedio de curso</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Nombre de curso</td>
                            <td>Promedio de curso</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}


export default ReportCursoComponent;