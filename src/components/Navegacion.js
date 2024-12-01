import React from 'react';

function Navegacion() {
    return (
      <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        
        <a className="navbar-brand" href="#">
          <img src="/kiwi.jpg" alt="Logo" width="100" className="logo" />
        </a>
        
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 fs-4">
            <li className="nav-item me-5">
              <a className="nav-link" href="#">Funciones</a>
            </li>
            <li className="nav-item me-5">
              <a className="nav-link" href="#">Planes</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Nosotros</a>
            </li>
          </ul>

          {/* Botones a la derecha */}
          <div className="d-flex">
            <a href="#" className="btn text-white btn-dark mt-4 rounded me-4 btn-lg">Registrarse</a>
            <a href="#" className="btn bg-info text-white mt-4 rounded btn-lg">Iniciar Sesión</a>
          </div>
        </div>
      </div>
    </nav>
      </div>
    );
  }

  export default Navegacion;