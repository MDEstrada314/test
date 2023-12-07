import React from "react";
import imgen1 from "../../../../assets/womanBook.svg";

import './css/newBook.css'

export default function NewBook({ img1 }) {
  return (
    <div className="new-book">
    <div className="contentBook">
        <h4>Hola, Andrés! Tienes ideas sobre un nuevo libro?</h4>
        <div>
            <p>Vuelve tus libros tendencia mundial!</p>
            <p>Quieres empezar a escribir una vez más?</p>
        </div>
        <button>Crear Borrador <span>+</span></button>
        </div>
        <div className="imgBook">
            <img src={imgen1} alt=". . ." />
    </div>
</div>
  );
}