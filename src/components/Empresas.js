import React from 'react';

function Empresas() {
    return (
        <div className="container mt-5">
      <h1 className="text-center mb-5 fw-bold">En nosotros confían:</h1>

      {/* Fila de imágenes */}
      <div className="row justify-content-center">
        <div className="col-2 mb-3">
          <img 
            src="/e1.jpg" 
            alt="Empresa 1" 
            className="img-fluid custom-img2" 
          />
        </div>
        <div className="col-2 mb-3">
          <img 
            src="/e2.jpg" 
            alt="Empresa 2" 
            className="img-fluid custom-img2" 
          />
        </div>
        <div className="col-2 mb-3">
          <img 
            src="/e3.jpg" 
            alt="Empresa 3" 
            className="img-fluid custom-img2" 
          />
        </div>
        <div className="col-2 mb-3">
          <img 
            src="/e4.jpg" 
            alt="Empresa 4" 
            className="img-fluid custom-img2" 
          />
        </div>
        <div className="col-2 mb-3">
          <img 
            src="/e5.jpg" 
            alt="Empresa 5" 
            className="img-fluid custom-img2" 
          />
        </div>
        <div className="col-2 mb-3">
          <img 
            src="/e6.jpg" 
            alt="Empresa 6" 
            className="img-fluid custom-img2" 
          />
        </div>
      </div>
    </div>
    );
  }

  export default Empresas;