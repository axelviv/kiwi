import React from 'react';

function Planes() {
    return (
        <div className="container mt-5">
      <h1 className="text-center mb-5 fw-bold">Planes para cada necesidad:</h1>

      <div className="row justify-content-center">
        {/* Card 1 */}
        <div className="col-12 col-md-4 mb-4">
          <div className="card card-custom">
            <div className="card-body">
              <h3 className="card-title mb-5 mt-4 fw-bold">FREE</h3>
              <h2 className="card-subtitle mb-3">$ 0 USD</h2>
              <p className="card-text">
                Para personas o equipos que quieren organizar cualquier proyecto que se les ocurra.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-12 col-md-4 mb-4">
          <div className="card card-custom">
            <div className="card-body">
              <h3 className="card-title mb-5 mt-4 fw-bold">STANDARD</h3>
              <h2 className="card-subtitle mb-3">$ 5 USD</h2>
              <p className="card-text">
                Para los equipos pequeños que necesitan gestionar el trabajo y escalar la colaboración.
              </p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-12 col-md-4 mb-4">
          <div className="card card-custom">
            <div className="card-body">
              <h3 className="card-title mb-5 mt-4 fw-bold">PREMIUM</h3>
              <h2 className="card-subtitle mb-3">$ 10 USD</h2>
              <p className="card-text">
                Para equipos que necesiten supervisar y visualizar varios proyectos de varias maneras, como en tableros, cronogramas, calendarios, etc.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }

  export default Planes;