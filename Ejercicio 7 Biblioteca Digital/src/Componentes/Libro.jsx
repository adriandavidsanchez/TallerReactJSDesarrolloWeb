import { deleteDoc, doc } from 'firebase/firestore';
import React from 'react';
import { db } from '../firebase';

const MiLibro = ({ libro }) => {
  const eliminarLibro = async () => {
    try {
      const referenciaLibro = doc(db, 'libros', libro.ID);
      await deleteDoc(referenciaLibro);
      alert('Libro eliminado correctamente');
    } catch (error) {
      console.log('Error al eliminar libro:', error);
      alert('No se pudo eliminar el libro');
    }
  };

  return (
    <div>
      <h3>{libro.titulo}</h3>
      <p>Autor: {libro.autor}</p>
      <p>Categoría: {libro.categoria}</p>
      <button onClick={eliminarLibro}>Eliminar</button>
    </div>
  );
};

export default MiLibro;
