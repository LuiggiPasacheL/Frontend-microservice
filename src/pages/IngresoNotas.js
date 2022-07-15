import React from "react";

function IngresoNotas(){
	return (
        <><table className="table">
			<thead>
				<tr>
					<th className="head">Curso</th>
					<th className="head">Calificaciones</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td className="course">Arquitectura de software</td>
					<td className="score">
						<div className="div-label">
							<label for="n1-arq" className="label">N1</label>
							<div className="div-input">
								<input type="number" id="n1-arq" className="input" required></input>
							</div>
						</div>
						<div className="div-label">
							<label for="n2-arq" className="label">N2</label>
							<div className="div-input">
								<input type="number" id="n2-arq" className="input" required></input>
							</div>
						</div>
						<div className="div-label">
							<label for="n3-arq" className="label">N3</label>
							<div className="div-input">
								<input type="number" id="n3-arq" className="input" required></input>
							</div>
						</div>
						<div className="div-label">
							<label for="prom-arq" className="label">Promedio Final</label>
							<div className="div-input-prom">
								<input type="number" id="prom-arq" value="" className="input" readonly />
							</div>
						</div>
						<div className="div-button">
							<input type="button" value="Generar promedio final" id="arq-button" className="button button-act button-hov" />
						</div>
					</td>
				</tr>
				<tr>
					<td className="course">Inteligencia artificial</td>
					<td className="score">
						<div className="div-label">
							<label for="n1-int" className="label">N1</label>
							<div className="div-input">
								<input type="number" id="n1-int" className="input" required />
							</div>

						</div>
						<div className="div-label">
							<label for="n2-int" className="label">N2</label>
							<div className="div-input">
								<input type="number" id="n2-int" className="input" required></input>
							</div>

						</div>
						<div className="div-label">
							<label for="n3-int" className="label">N3</label>
							<div className="div-input">
								<input type="number" id="n3-int" className="input" required></input>
							</div>

						</div>
						<div className="div-label">
							<label for="prom-int" className="label">Promedio Final</label>
							<div className="div-input-prom">
								<input type="number" id="prom-int" value="" className="input" readonly></input>
							</div>

						</div>
						<div className="div-button">
							<input type="button" value="Generar promedio final" id="int-button" className="button button-act button-hov" />
						</div>

					</td>
				</tr>
				<tr>
					<td className="course">Métodos formales para pruebas</td>
					<td className="score">
						<div className="div-label">
							<label for="n1-met" className="label">N1</label>
							<div className="div-input">
								<input type="number" id="n1-met" className="input" required></input>
							</div>

						</div>
						<div className="div-label">
							<label for="n2-met" className="label">N2</label>
							<div className="div-input">
								<input type="number" id="n2-met" className="input" required></input>
							</div>

						</div>
						<div className="div-label">
							<label for="n3-met" className="label">N3</label>
							<div className="div-input">
								<input type="number" id="n3-met" className="input" required />
							</div>

						</div>
						<div className="div-label">
							<label for="prom-met" className="label">Promedio Final</label>
							<div className="div-input-prom">
								<input type="number" id="prom-met" value="" className="input" readonly />
							</div>

						</div>
						<div className="div-button">
							<input type="button" value="Generar promedio final" id="met-button" className="button button-act button-hov" />
						</div>

					</td>
				</tr>
				<tr>
					<td className="course">Base de datos II</td>
					<td className="score">
						<div className="div-label">
							<label for="n1-bd" className="label">N1</label>
							<div className="div-input">
								<input type="number" id="n1-bd" className="input" required />
							</div>

						</div>
						<div className="div-label">
							<label for="n2-bd" className="label">N2</label>
							<div className="div-input">
								<input type="number" id="n2-bd" className="input" required />
							</div>

						</div>
						<div className="div-label">
							<label for="n3-bd" className="label">N3</label>
							<div className="div-input">
								<input type="number" id="n3-bd" className="input" required />
							</div>

						</div>
						<div className="div-label">
							<label for="prom-bd" className="label">Promedio Final</label>
							<div className="div-input-prom">
								<input type="number" id="prom-bd" value="" className="input" readonly />
							</div>

						</div>
						<div className="div-button">
							<input type="button" value="Generar promedio final" id="bd-button" className="button button-act button-hov" />
						</div>

					</td>
				</tr>
				<tr>
					<td className="course">Redes y transmisión de datos</td>
					<td className="score">
						<div className="div-label">
							<label for="n1-red" className="label">N1</label>
							<div className="div-input">
								<input type="number" id="n1-red" className="input" required />
							</div>

						</div>
						<div className="div-label">
							<label for="n2-red" className="label">N2</label>
							<div className="div-input">
								<input type="number" id="n2-red" className="input" required />
							</div>

						</div>
						<div className="div-label">
							<label for="n3-red" className="label">N3</label>
							<div className="div-input">
								<input type="number" id="n3-red" className="input" required />
							</div>

						</div>
						<div className="div-label">
							<label for="prom-red" className="label">Promedio Final</label>
							<div className="div-input-prom">
								<input type="number" id="prom-red" value="" className="input" readonly />
							</div>

						</div>
						<div className="div-button">
							<input type="button" value="Generar promedio final" id="red-button" className="button button-act button-hov" />
						</div>
					</td>
				</tr>
				<tr>
					<td className="course">Experiencia y usabilidad de usuario</td>
					<td className="score">
						<div className="div-label">
							<label for="n1-exp" className="label">N1</label>
							<div className="div-input">
								<input type="number" id="n1-exp" className="input" required />
							</div>

						</div>
						<div className="div-label">
							<label for="n2-exp" className="label">N2</label>
							<div className="div-input">
								<input type="number" id="n2-exp" className="input" required />
							</div>
						</div>
						<div className="div-label">
							<label for="n3-exp" className="label">N3</label>
							<div className="div-input">
								<input type="number" id="n3-exp" className="input" required />
							</div>

						</div>
						<div className="div-label">
							<label for="prom-exp" className="label">Promedio Final</label>
							<div className="div-input-prom">
								<input type="number" id="prom-exp" value="" className="input" readonly />
							</div>

						</div>
						<div className="div-button">
							<input type="button" value="Generar promedio final" id="exp-button" className="button button-act button-hov" />
						</div>

					</td>
				</tr>
				<tr>
					<td className="course">Gestión y proyectos de software</td>
					<td className="score">
						<div className="div-label">
							<label for="n1-ges" className="label">N1</label>
							<div className="div-input">
								<input type="number" id="n1-ges" className="input" required />
							</div>
						</div>
						<div className="div-label">
							<label for="n2-ges" className="label">N2</label>
							<div className="div-input">
								<input type="number" id="n2-ges" className="input" required />
							</div>
						</div>
						<div className="div-label">
							<label for="n3-ges" className="label">N3</label>
							<div className="div-input">
								<input type="number" id="n3-ges" className="input" required />
							</div>
						</div>
						<div className="div-label">
							<label for="prom-ges" className="label">Promedio Final</label>
							<div className="div-input-prom">
								<input type="number" id="prom-ges" value="" className="input" readonly />
							</div>
						</div>
						<div className="div-button">
							<input type="button" value="Generar promedio final" id="ges-button" className="button button-act button-hov" />
						</div>

					</td>
				</tr>
			</tbody>
		</table><div className="btn-submit">
				<input type="submit" value="Finalizar" id="button-submit" className="button-submit" />
			</div><div className="div-btn">
				<a href="./home" className="btn-return btn-return-hov">Regresar</a>
			</div></>
	);
}
export default IngresoNotas;