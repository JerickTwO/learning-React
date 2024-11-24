import React, { useState, useEffect } from 'react';

function GeneroSelect({ value, onChange }) {
    const [generos, setGeneros] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/generos')
            .then(response => response.json())
            .then(data => setGeneros(data))
            .catch(error => console.error('Error fetching generos:', error));
    }, []);

    return (
        <select value={value} onChange={(e) => onChange(e.target.value)}>
            <option value="">Selecciona un género</option>
            {generos.map(genero => (
                <option key={genero.id} value={genero.id}>
                    {genero.nombre}
                </option>
            ))}
        </select>
    );
}

export default GeneroSelect;
