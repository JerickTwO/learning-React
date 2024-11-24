import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function EstudiantesList() {
    const [estudiantes, setEstudiantes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/estudiantes')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log('Estudiantes recibidos:', data); // Depuración
                setEstudiantes(data);
            })
            .catch(error => {
                console.error('Error fetching estudiantes:', error);
            });
    }, []);

    return (
        <div>
            <h2>Lista de Estudiantes</h2>
            <Link to="/estudiantes/nuevo">
                <button style={{ marginBottom: '20px' }}>Agregar Estudiante</button>
            </Link>
            {estudiantes.length === 0 && <p>No hay estudiantes disponibles.</p>}
            <table>
                <thead>
                    <tr>
                        <th>DNI</th>
                        <th>Nombre</th>
                        <th>Apellidos</th>
                        <th>Carrera</th>
                        <th>Género</th>
                        <th>Correo</th>
                        <th>Celular</th>
                        <th>Acciones</th> {/* Nueva columna para acciones */}
                    </tr>
                </thead>
                <tbody>
                    {estudiantes.map(est => (
                        <tr key={est.id}>
                            <td>{est.dni}</td>
                            <td>{est.nombre}</td>
                            <td>{est.apellidos}</td>
                            <td>{est.carrera?.nombre}</td>
                            <td>{est.genero?.nombre}</td>
                            <td>{est.correo}</td>
                            <td>{est.celular}</td>
                            <td>
                                <Link to={`/estudiantes/editar/${est.id}`}>
                                    <button>Editar</button> {/* Botón de Editar */}
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default EstudiantesList;
