import React from 'react';

function Correo() {
    return (
        <div className="container mt-5">
      <h1 className="text-center mb-4 text-white fw-bold">¡Unite gratis hoy!</h1>
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 d-flex">
          {/* Campo para el correo */}
          <input
            type="email"
            className="form-control"
            placeholder="nombre@gmail.com"
            aria-label="Correo electrónico"
          />
          {/* Botón */}
          <button className="btn bg-info text-dark ms-3 rounded">Unirse</button>
        </div>
      </div>
    </div>
    );
  }

  export default Correo;