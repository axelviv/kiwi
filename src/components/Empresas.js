import React from 'react';

function Empresas() {
    return (
        <div className="container mt-5">
      <h1 className="text-center mb-5 fw-bold">En nosotros confían:</h1>

      {/* Fila de imágenes */}
      <div className="row justify-content-center">
        <div className="col-2 mb-3">
          <img 
            src="/svgs/Disney logo.svg" 
            alt="Empresa 1" 
            className="img-fluid custom-img2" 
          />
        </div>
        <div className="col-2 mb-3">
          <img 
            src="/svgs/Penguin Logo.svg" 
            alt="Empresa 2" 
            className="img-fluid custom-img2" 
          />
        </div>
        <div className="col-2 mb-3">
          <img 
            src="/svgs/Motorola logo.svg" 
            alt="Empresa 3" 
            className="img-fluid custom-img2" 
          />
        </div>
        <div className="col-2 mb-3">
          <img 
            src="/svgs/Santander logo.svg" 
            alt="Empresa 4" 
            className="img-fluid custom-img2" 
          />
        </div>
        <div className="col-2 mb-3">
          <img 
            src="/svgs/HP logo.svg" 
            alt="Empresa 5" 
            className="img-fluid custom-img2" 
          />
        </div>
        <div className="col-2 mb-3">
          <img 
            src="/svgs/Adidas logo.svg" 
            alt="Empresa 6" 
            className="img-fluid custom-img2" 
          />
        </div>
      </div>
    </div>
    );
  }

  export default Empresas;