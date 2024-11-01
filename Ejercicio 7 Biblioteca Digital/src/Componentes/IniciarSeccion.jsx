import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../firebase';

const IniciarSeccion = ({ alIniciarSeccion }) => {
    const [correo, setCorreo] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [registrando, setRegistrando] = useState(false);

    const manejarEnvio = async (evento) => {
        evento.preventDefault();
        try {
            if (registrando) {
                
                const credencialesUsuario = await createUserWithEmailAndPassword(auth, correo, contraseña);
                alIniciarSeccion(credencialesUsuario.user);
                alert('Registro exitoso');
            } else {
                
                const credencialesUsuario = await signInWithEmailAndPassword(auth, correo, contraseña);
                alIniciarSeccion(credencialesUsuario.user);
                alert('Inicio de sección exitoso');
            }
        } catch (error) {
            console.error("Error de autenticación:", error);
            alert('Error de autenticación, por favor los datos');
        }
    };

    return (
        <div>
            <h2>{registrando ? "Registrar" : "Iniciar Seccion"}</h2>
            <form onSubmit={manejarEnvio}>
                <input type="email" placeholder="Correo electrónico"
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                    required
                />
                <input type="password" placeholder="Contraseña" value={contraseña}
                    onChange={(e) => setContraseña(e.target.value)}
                    required
                />
                <button type="submit">{registrando ? "Registrar" : "Iniciar Seccion"}</button>
            </form>
            <button onClick={() => setRegistrando(!registrando)}>
                {registrando ? "¿Ya tienes cuenta? Inicia seccion" : "¿No tienes cuenta? Regístrate"}
            </button>
        </div>
    );
};

export default IniciarSeccion;
