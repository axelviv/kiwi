import React from 'react';

function Opciones() {
    return (
        <div className="container mt-5">
            <div className="row">
                
                <div className="col-md-6">
                    <img 
                        src="/tableros.jpg" 
                        alt="Imagen grande" 
                        className="img-fluid" 
                    />
                </div>

                {/* Columna para las imágenes pequeñas */}
                <div className="col-md-6 d-flex flex-column">
                    <div className="d-flex flex-column justify-content-between" style={{height: '100%'}}>
                        <div className="mb-3">
                            <img 
                                src="conectividad.jpg" 
                                alt="Imagen pequeña 1" 
                                className="img-fluid h-100" 
                            />
                        </div>
                        <div>
                            <img 
                                src="calendario.jpg" 
                                alt="Imagen pequeña 2" 
                                className="img-fluid h-100" 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }

  export default Opciones;