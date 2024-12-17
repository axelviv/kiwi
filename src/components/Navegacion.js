import React from 'react';

function Navegacion() {
    return (
      <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        
        <a className="navbar-brand" href="/link">
          <img src="/kiwi.jpg" alt="Logo" width="100" className="logo" />
        </a>
        
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 fs-4">
            <li className="nav-item me-5">
              <a className="nav-link" href="/link">Funciones</a>
            </li>
            <li className="nav-item me-5">
              <a className="nav-link" href="/link">Planes</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/link">Nosotros</a>
            </li>
          </ul>

          {/* Botones a la derecha */}
          <div className="d-flex">
            <a href="https://kiwi-6p0a.onrender.com/auth/register" className="btn text-white btn-dark mt-4 rounded me-4 btn-lg" target='_blank' rel='noreferrer'>Registrarse</a>
            <a href="https://kiwi-6p0a.onrender.com/auth/login" className="btn bg-info text-white mt-4 rounded btn-lg" target='_blank' rel='noreferrer'>Iniciar Sesión</a>
          </div>
        </div>
      </div>
    </nav>
      </div>
    );
  }

  export default Navegacion;