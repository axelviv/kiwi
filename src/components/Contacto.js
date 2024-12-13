import React from 'react';

function Contacto() {
    return (
        <div className="container mt-5">
      <h1 className="text-center mb-5 fw-bold">Contáctanos:</h1>

      {/* Fila de imágenes */}
      <div className="row justify-content-center">
        <div className="col-2 mb-3">
          <a href='https://www.instagram.com'>
            <img 
              src="/svgs/Instagram logo.svg" 
              alt="Instagram" 
              className="img-fluid custom-img2" 
            />
          </a>
        </div>
        <div className="col-2 mb-3">
        <a href='https://www.whatsapp.com'>
          <img 
            src="/svgs/Whatsapp logo.svg" 
            alt="whatsapp" 
            className="img-fluid custom-img2" 
          />
        </a>
        </div>
        <div className="col-2 mb-3">
        <a href='https://www.facebook.com'>
          <img 
            src="/svgs/Facebook logo.svg" 
            alt="Facebook" 
            className="img-fluid custom-img2" 
          />
        </a>
        </div>
        <div className="col-2 mb-3">
        <a href='https://www.x.com'>
          <img 
            src="/svgs/Twitter logo.svg" 
            alt="Twitter" 
            className="img-fluid custom-img2" 
          />
        </a>
        </div>
        <div className="col-2 mb-3">
        <a href='https://www.gmail.com'>
          <img 
            src="/svgs/Email logo.svg" 
            alt="Email" 
            className="img-fluid custom-img2" 
          />
        </a>
        </div>
        <div className="col-2 mb-3">
        <a href='https://www.whatsapp.com'>
          <img 
            src="/svgs/Tel logo.svg" 
            alt="Teléfono" 
            className="img-fluid custom-img2" 
          />
        </a>
        </div>
      </div>
    </div>
    );
  }

  export default Contacto;