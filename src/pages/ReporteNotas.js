import React from 'react';

function ReporteNotas() {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th className="head">Curso</th>
                    <th className="head">Promedio final</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="course">Arquitectura de software</td>
                    <td className="score">
                        <span className="note" id="note-arq"></span>
                    </td>
                </tr>
                <tr>
                    <td className="course">Inteligencia artificial</td>
                    <td className="score">
                        <span className="note" id="note-int"></span>
                    </td>
                </tr>
                <tr>
                    <td className="course">Métodos formales para pruebas</td>
                    <td className="score">
                        <span className="note" id="note-met"></span>
                    </td>
                </tr>
                <tr>
                    <td className="course">Base de datos II</td>
                    <td className="score">
                        <span className="note" id="note-bd"></span>
                    </td>
                </tr>
                <tr>
                    <td className="course">Redes y transmisión de datos</td>
                    <td className="score">
                        <span className="note" id="note-red"></span>
                    </td>
                </tr>
                <tr>
                    <td className="course">Experiencia y usabilidad de usuario</td>
                    <td className="score">
                        <span className="note" id="note-exp"></span>
                    </td>
                </tr>
                <tr>
                    <td className="course">Gestión y proyectos de software</td>
                    <td className="score">
                        <span className="note" id="note-ges"></span>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default ReporteNotas;