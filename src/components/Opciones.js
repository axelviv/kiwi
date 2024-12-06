import React from 'react';

function Opciones() {
    return (
        <div className="container mt-5">
            <div className="bloques-container">
                {/* Bloque grande */}
                <div className="bloque-grande">
                    <p>Bloque Grande</p>
                </div>

                {/* Contenedor para los bloques pequeños apilados */}
                <div className="bloques-pequenos">
                    {/* Bloques pequeños */}
                    <div className="bloque-pequeno">
                        <p>Bloque Pequeño 1</p>
                    </div>
                    <div className="bloque-pequeno">
                        <p>Bloque Pequeño 2</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Opciones;
