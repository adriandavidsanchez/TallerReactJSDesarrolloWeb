import React, { useState } from 'react';
import './App.css';
import IniciarSeccion from './Componentes/IniciarSeccion';
import ListaLibros from './Componentes/listaLibros';
import MiFormulario from './Componentes/MiFormulario';
import { auth } from './firebase';

const App = () => {
  const [usuario, setUsuario] = useState(null);
  const [editando, setEditando] = useState(false);

  const manejarCerrarSesion = () => {
    auth.signOut();
    setUsuario(null);
  };

  return (
    <div>
      {!usuario ? (
        <IniciarSeccion alIniciarSeccion={(usuario) => setUsuario(usuario)} />
      ) : (
        <div>
          <button onClick={manejarCerrarSesion}>Cerrar sesión</button>
          <h1>Biblioteca Digital</h1>
          <ListaLibros usuarioId={usuario.uid} />
          <button onClick={() => setEditando(true)}>Añadir Libro</button>
          {editando && <MiFormulario usuarioId={usuario.uid} alGuardar={() => setEditando(false)} />}
        </div>
      )}
    </div>
  );
};

export default App;
