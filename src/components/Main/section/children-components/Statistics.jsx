import React from "react";

export default function Statistics() {
  return (
    <div className="information">
      <div className="first">
        <div className="statistics">
          <div className="infoStadistics">
            <div>
              <p>Libreria</p>
              <p>124</p>
            </div>
          </div>
          <div className="infoStadistics">
            <div>
              <p>Me Gusta</p>
              <p>155 k</p>
            </div>
          </div>
          <div className="infoStadistics">
            <div>
              <p>Lectores</p>
              <p>8 k</p>
            </div>
          </div>
          <div className="infoStadistics">
            <div>
              <p>Opiniones</p>
              <p>163 k</p>
            </div>
          </div>
        </div>
        <div className="authors">
          <div className="nav">
            <h2>Autores</h2>
            <button>Ver Todo</button>
          </div>
          <div className="containerAuthors">
            {/* Renderización de autores aquí */}
          </div>
        </div>
      </div>
    </div>
  );
}
