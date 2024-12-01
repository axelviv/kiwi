import React from 'react';

function Contacto() {
    return (
        <div className="container mt-5">
      <h1 className="text-center mb-5 fw-bold">Contáctanos:</h1>

      {/* Fila de imágenes */}
      <div className="row justify-content-center">
        <div className="col-2 mb-3">
          <img 
            src="/c1.jpg" 
            alt="Instagram" 
            className="img-fluid custom-img2" 
          />
        </div>
        <div className="col-2 mb-3">
          <img 
            src="/c2.jpg" 
            alt="whatsapp" 
            className="img-fluid custom-img2" 
          />
        </div>
        <div className="col-2 mb-3">
          <img 
            src="/c3.jpg" 
            alt="Facebook" 
            className="img-fluid custom-img2" 
          />
        </div>
        <div className="col-2 mb-3">
          <img 
            src="/c4.jpg" 
            alt="Twitter" 
            className="img-fluid custom-img2" 
          />
        </div>
        <div className="col-2 mb-3">
          <img 
            src="/c5.jpg" 
            alt="Email" 
            className="img-fluid custom-img2" 
          />
        </div>
        <div className="col-2 mb-3">
          <img 
            src="/c6.jpg" 
            alt="Teléfono" 
            className="img-fluid custom-img2" 
          />
        </div>
      </div>
    </div>
    );
  }

  export default Contacto;