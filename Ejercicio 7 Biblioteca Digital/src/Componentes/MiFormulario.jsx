import { addDoc, collection, doc, updateDoc } from 'firebase/firestore';
import React, { useState } from 'react';
import { db } from '../firebase';

function MiFormulario(props) {
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [categoria, setCategoria] = useState('');

  function guardarLibro(evento) {
    evento.preventDefault();
    console.log('Guardar el libro');
    console.log('Título ingresado: ' + titulo);

    if (titulo === '' || autor === '') {
      alert('Necesitas llenar todos los campos');
      return;
    }

    try {
      if (props.libro) {
        console.log('Edición activada');
        const libroRef = doc(db, 'libros', props.libro.ID);
        updateDoc(libroRef, {
          titulo: titulo,
          autor: autor,
          categoria: categoria || '',
          fecha: new Date().toISOString(),
        });
      } else {
        console.log('Se está creando un libro nuevo');


        addDoc(collection(db, 'libros'), {
          titulo: titulo,
          autor: autor,
          categoria: categoria || '',
          fecha: new Date().toISOString(),
          userId: props.usuarioId
        });
      }

      alert('Libro guardado');
    } catch (error) {
      console.log('Error: Algo salió mal', error);
      alert('No se pudo guardar el libro');
    }
  }

  return (
    <div>
      <h2>Formulario de Libros</h2>
      <form onSubmit={guardarLibro}>
        <div>
          <label>Título del libro</label>
          <input
            type="text"
            value={titulo}
            onChange={(e) => {
              console.log('Cambiando título');
              setTitulo(e.target.value);
            }}
            placeholder="Escribe el título"
          />
        </div>
        <div>
          <label>Nombre del autor</label>
          <input
            type="text"
            value={autor}
            onChange={(e) => {
              console.log('Cambiando autor');
              setAutor(e.target.value);
            }}
            placeholder="Nombre del autor"
          />
        </div>
        <div>
          <label>Categoría</label>
          <input
            type="text"
            value={categoria}
            onChange={(e) => {
              console.log('Cambiando categoría');
              setCategoria(e.target.value);
            }}
            placeholder="Género o categoría"
          />
        </div>
        <button type="submit">Guardar Libro</button>
      </form>
    </div>
  );
}

export default MiFormulario;
