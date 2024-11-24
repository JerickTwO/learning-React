import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EstudiantesList from './components/EstudiantesList';
import EstudianteForm from './components/EstudianteForm';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <h1>Gestión de Estudiantes</h1>
                </header>
                <Routes>
                    <Route exact path="/" element={<EstudiantesList />} />
                    <Route path="/estudiantes/nuevo" element={<EstudianteForm />} />
                    <Route path="/estudiantes/editar/:id" element={<EstudianteForm />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
