import React from 'react'

function Home() {
	return (
		<div className="container">
			<div className="box">
				<h1 className="title">Portal de Notas</h1>
				<a href="./ingreso-notas" className="index-button index-hov index-act">Ingresar notas</a>
				<a href="./reporte-notas" className="index-button index-hov index-act">Reporte de notas</a>
				<a href="./ingreso-alumno" className="index-button index-hov index-act">Ingresar alumno</a>

			</div>
		</div>)
}

export default Home;