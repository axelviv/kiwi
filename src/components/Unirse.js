import React from 'react';

function Unirse() {
    return (
        <div className="container my-5">
        <div className="row align-items-center">
          
          <div className="col-md-6 text-start">
            <h1 className="display-4 fw-bold">Kiwi, una nueva forma de organizar y enfrentar el caos</h1>
            <h2 className="lead fs-3">Todo tu equipo unido, colaborando en un mismo lugar</h2>
            <a href='#' className="btn text-white btn-dark mt-4 rounded btn-lg">Unirse</a>
            
          </div>
  
          
          <div className="col-md-6 text-center">
            <img
              src="/svgs/Header _doodle.svg"
              alt="Kiwi"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    );
  }

  export default Unirse;