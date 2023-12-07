import React, { useState, useEffect } from "react";
import axios from "axios";

import './css/authors.css'

export default function Authors() {
  const [authors, setAuthors] = useState([]);
  let authors3 = [];

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(
          "https://rickandmortyapi.com/api/character"
        );
        setAuthors(response.data.results);
      } catch (error) {
        console.error("Ha ocurrido un error", error);
      }
    }
    getData();
  }, []);

  if (authors.length > 0) {
    for (let i = 0; i < 3; i++) {
      authors3.push(authors[i]);
    }
  }

  return (
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
                                {authors3.map((author)=>(
                                <div key={author.id} className="infoAuthor">
                                    <div className="author">
                                        <div className="authorPhoto">
                                            <img src={author.image} alt=". . ." />
                                        </div>
                                        <div className="authorDetails">
                                            <p>{author.name}</p>
                                            <p>{author.species}</p>
                                        </div>
                                    </div>
                                    <div className="readers">
                                        <p>Lectores</p>
                                        <p>143 k</p>
                                    </div>
                                </div>
                                ))}
                            </div>
                        </div>
                    </div>
  );
}

