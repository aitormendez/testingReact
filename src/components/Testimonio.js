/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

export default function Testimonio() {
  return (
    <div className='contenedor-testimonio'>
      <img
      className='imagen-testimonio'
      src={require('../imagenes/lopo.jpg')} 
      alt='foto de lopo'/>

      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'>Lopo López</p>
        <p className='cargo-testimonio'>Perro</p>
        <p className='texto-testimonio'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet sapien nec massa blandit varius id sit amet dui. Quisque eu iaculis sapien.</p>
      </div>
    </div>
  );
} 