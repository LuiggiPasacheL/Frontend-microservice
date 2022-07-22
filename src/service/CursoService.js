import axios from 'axios';

const NOTAS_API_BASE_URL = "https://notasfunc.azurewebsites.net/api"
const ALUMNO_API_BASE_URL = "https://alumsfunc.azurewebsites.net/api"
const USUARIOS_API_BASE_URL = "https://usuarifunc.azurewebsites.net/api";

class CursoService {
  createAlumno(alumno) {
    return axios.post(ALUMNO_API_BASE_URL + '/guardar', alumno);
  }

  getAlumnos(){
    return axios.get(USUARIOS_API_BASE_URL + '/guardar/');
  }

  createCurso(curso) {
    return axios.post(NOTAS_API_BASE_URL + '/agregar', curso);
  }

  getUsuarios() {
    return axios.get(USUARIOS_API_BASE_URL + '/GetUsers/alu')
  }
}
export default new CursoService()