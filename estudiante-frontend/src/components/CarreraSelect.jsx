import React, { useState, useEffect } from 'react';

function CarreraSelect({ value, onChange }) {
    const [carreras, setCarreras] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/carreras')
            .then(response => response.json())
            .then(data => setCarreras(data))
            .catch(error => console.error('Error fetching carreras:', error));
    }, []);

    return (
        <select value={value} onChange={(e) => onChange(e.target.value)}>
            <option value="">Selecciona una carrera</option>
            {carreras.map(carrera => (
                <option key={carrera.id} value={carrera.id}>
                    {carrera.nombre}
                </option>
            ))}
        </select>
    );
}

export default CarreraSelect;
