import React, { Component } from 'react'
import CursoService from '../service/CursoService';

function Login() {
  return (
    <div className="container">
      <div className="box">
        <form>
          <h1 className="title">Bienvenido</h1>
          <div className="div-cod">
            <label for="cod">Código: </label>
            <input type="text" placeholder="19200XXX" id="cod" className="cod"></input>
          </div>
        </form>
        <button href="#" className="open open-p" id="btn">Ingresar</button>
      </div>
    </div>
  );
}

export default Login;