import React from 'react';

function Comentarios() {
    return (
        <div className="container mt-5">
            <div className="row">
                
                <div className="col-6 mb-5">
                    <h1 className="me-auto text-white fw-bold mt-5">Nuestros usuarios dicen:</h1>  
                </div> 

                <div className="col-6 mb-5">                 
                    <img 
                        src="/comentario1.png" 
                        alt="Imagen 1" 
                        className="img-fluid custom-img" 
                    />                    
                </div>
            </div>
            
            <div className="row">
                <div className="col-6 mb-5">
                    <img 
                        src="/comentario2.png" 
                        alt="Imagen 2" 
                        className="img-fluid custom-img" 
                    />
                </div>
            </div>

            <div className="row">
                <div className="col-6 ms-auto">
                    <img 
                        src="/comentario3.png" 
                        alt="Imagen 3" 
                        className="img-fluid custom-img" 
                    />
                </div>
            </div>
        </div>
    );
  }

  export default Comentarios;