import './App.css';

import { BrowserRouter, Route, Routes} from 'react-router-dom';

import LoginAlumnoComponent from './components/LoginAlumnoComponent';
import Home from './pages/Home';
import CreateCursoComponent from './components/CreateCursoComponent';
import ReporteNotasComponent from './components/ReporteNotasComponent';
import CreateAlumnoComponent from './components/CreateAlumnoComponent';

function App(){
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LoginAlumnoComponent/>} />
      <Route path='/menu' element={<Home/>} />
      <Route path='/ingreso-notas' element={<CreateCursoComponent/>} />
      <Route path='/reporte-notas' element={<ReporteNotasComponent/>} />
      <Route path='/ingreso-alumno' element={<CreateAlumnoComponent/>} />
      <Route path='*' element={ <div> Esta ruta no existe </div> } />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
