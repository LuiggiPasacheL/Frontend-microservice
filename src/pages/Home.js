import React from 'react'
import cookiesHelper from '../service/CookiesService'; // METODO getId para llamar al id del alumno

function Home() {
	return (
		<div className="container">
			<div className="box">
				<h1 className="title">Portal de Notas</h1>
				<a href="./ingreso-notas" className="index-button index-hov index-act">Ingresar notas</a>
				<a href="./reporte-notas" className="index-button index-hov index-act">Reporte de notas</a>
				<a href="./ingreso-alumno" className="index-button index-hov index-act">Ingresar alumno</a>
				<a href="./" className="index-button index-hov index-act red-button">Salir</a>
			</div>
		</div>)
}

export default Home;