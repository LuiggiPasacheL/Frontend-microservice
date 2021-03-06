import axios from 'axios';

const NOTAS_API_BASE_URL = "https://notasfunc.azurewebsites.net/api"
const ALUMNO_API_BASE_URL = "https://alumsfunc.azurewebsites.net/api"
const USUARIOS_API_BASE_URL = "https://usuarifunc.azurewebsites.net/api";

class CursoService {
  createAlumno(id) {
    return axios.post(ALUMNO_API_BASE_URL + '/guardar', id);
  }

  getAlumnos(){
    return axios.get(USUARIOS_API_BASE_URL + '/guardar/');
  }

  getNotas(id){
    return axios.get(NOTAS_API_BASE_URL + '/GetNotas/' + id);
  }

  createCurso(curso) {
    return axios.post(NOTAS_API_BASE_URL + '/guardar', curso);
  }

  getUsuarios() {
    return axios.get(USUARIOS_API_BASE_URL + '/GetUsers/alu')
  }

  createUsuario(usuario){
    return axios.post(USUARIOS_API_BASE_URL + '/guardar', usuario)
  }
}
export default new CursoService()