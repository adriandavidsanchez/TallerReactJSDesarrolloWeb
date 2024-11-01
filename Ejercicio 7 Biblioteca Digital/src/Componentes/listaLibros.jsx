import { collection, onSnapshot, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import MiLibro from './libro';


const ListaLibros = ({ usuarioId }) => {


  const [libros, setLibros] = useState([]);

  useEffect(() => {


    const consulta = query(collection(db, 'libros'),

    where('usuarioId', '==', usuarioId));

    const cancelarSuscripcion = onSnapshot(consulta, (snapshot) => {

      const librosArray = snapshot.docs.map((doc) => ({ID: doc.id,...doc.data(),}));

      setLibros(librosArray);
      
      console.log('Libros actualizados:', librosArray);
    });
    
    return () => cancelarSuscripcion();

  }, [usuarioId]);

  return (
    <div>
      {libros.map((libro) => (
        <MiLibro key={libro.ID} libro={libro} />
      ))}
    </div>
  );
};

export default ListaLibros;