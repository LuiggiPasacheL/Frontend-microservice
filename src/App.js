import './App.css';

import { BrowserRouter, Route, Routes} from 'react-router-dom';

import Home from './pages/Home';
// import IngresoNotas from './pages/IngresoNotas';
// import ReporteNotas from './pages/ReporteNotas';
import CreateCursoComponent from './components/CreateCursoComponent';
import ReporteNotasComponent from './components/ReporteNotasComponent';
import CreateAlumnoComponent from './components/CreateAlumnoComponent';
// import ReportCursoComponent from './components/ReportCursoComponent';

function App(){
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/ingreso-notas' element={<CreateCursoComponent/>} />
      <Route path='/reporte-notas' element={<ReporteNotasComponent/>} />
      <Route path='/ingreso-alumno' element={<CreateAlumnoComponent/>} />
      <Route path='*' element={
        <div>
          Esta ruta no existe
        </div>
      } />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
