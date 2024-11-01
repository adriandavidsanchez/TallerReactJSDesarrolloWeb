import { collection, onSnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import MiLibro from './libro';

const ListaLibros = () => {
  const [libros, setLibros] = useState([]);

  useEffect(() => {
    
    const consulta = collection(db, 'libros');

    const cancelarSuscripcion = onSnapshot(consulta, (snapshot) => {
      const librosArray = snapshot.docs.map((doc) => ({
        ID: doc.id,
        ...doc.data(),
      }));

      console.log('Libros encontrados:', librosArray);
      setLibros(librosArray);
    });

    return () => cancelarSuscripcion();
  }, []);

  return (
    <div>
      {libros.map((libro) => (
        <MiLibro key={libro.ID} libro={libro} />
      ))}
    </div>
  );
};

export default ListaLibros;
