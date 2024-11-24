import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CarreraSelect from "./CarreraSelect";
import GeneroSelect from "./GeneroSelect";

function EstudianteForm() {
  const [estudiante, setEstudiante] = useState({
    dni: "",
    nombre: "",
    apellidos: "",
    carrera: { id: "" },
    genero: { id: "" },
    correo: "",
    celular: "",
  }); 

  const navigate = useNavigate(); // useNavigate para redirigir después de agregar/editar
  const { id } = useParams(); // Obtener el ID si estamos editando un estudiante existente

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:8080/api/estudiantes/${id}`)
        .then((response) => response.json())
        .then((data) => setEstudiante(data))
        .catch((error) => console.error("Error fetching estudiante:", error));
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEstudiante({
      ...estudiante,
      [name]: value,
    });
  };

  const handleSelectChange = (field, value) => {
    setEstudiante({
      ...estudiante,
      [field]: { id: value },
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Datos a enviar:", estudiante); // Verifica que los datos están completos y correctos

    const method = id ? "PUT" : "POST";
    const url = id
      ? `http://localhost:8080/api/estudiantes/${id}`
      : "http://localhost:8080/api/estudiantes";

    fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(estudiante),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(() => {
        console.log("Estudiante guardado exitosamente");
        navigate("/");
      })
      .catch((error) => console.error("Error saving estudiante:", error));
  };
  return (
    <div>
      <h2>{id ? "Editar Estudiante" : "Crear Estudiante"}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>DNI:</label>
          <input
            type="text"
            name="dni"
            value={estudiante.dni}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            name="nombre"
            value={estudiante.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Apellidos:</label>
          <input
            type="text"
            name="apellidos"
            value={estudiante.apellidos}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Carrera:</label>
          <CarreraSelect
            value={estudiante.carrera.id}
            onChange={(value) => handleSelectChange("carrera", value)}
          />
        </div>
        <div>
          <label>Género:</label>
          <GeneroSelect
            value={estudiante.genero.id}
            onChange={(value) => handleSelectChange("genero", value)}
          />
        </div>
        <div>
          <label>Correo:</label>
          <input
            type="email"
            name="correo"
            value={estudiante.correo}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Celular:</label>
          <input
            type="text"
            name="celular"
            value={estudiante.celular}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">{id ? "Actualizar" : "Crear"}</button>
      </form>
    </div>
  );
}

export default EstudianteForm;
