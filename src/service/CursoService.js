import axios from 'axios';

const CURSO_API_BASE_URL = "https://nodemicr.herokuapp.com";
const NOTAS_API_BASE_URL = "https://servnotas.herokuapp.com/apinotas"
const ALUMNO_API_BASE_URL = "https://studests.herokuapp.com/apistudents"

class CursoService {
  createAlumno(alumno) {
    return axios.post(ALUMNO_API_BASE_URL + '/agregar', alumno);
  }

  getAlumnos(){
    return axios.get(CURSO_API_BASE_URL + '/alums/');
  }

  createCurso(curso) {
    return axios.post(NOTAS_API_BASE_URL + '/agregar', curso);
  }
}
export default new CursoService()