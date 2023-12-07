import React from "react";
import { Link } from "react-router-dom";
import usuario2 from "../../../../assets/user-2.jpg";
import usuario3 from "../../../../assets/user-3.jpg";
import img1 from "../../../../assets/plant.jpg";
import imgen2 from "../../../../assets/space.jpg";
import './css/last.css'

export default function Last({ img2, imgCard1, imgCard2 }) {
  return (
    <div className="the-last">
    <div className="nav">
        <h2>Lo último</h2>
        <button>Ver Todo</button>
    </div>
    <div className="filters">
        <Link to="/">Reciente</Link>
        <Link to="/">Popular</Link>
    </div>
    <div className="containerCards">
        <div className="card">
            <div className="background">
                <img src={img1} alt=". . ." />
            </div>
            <div className="infoCard">
                <div className="title">
                    <h3>La Ciudadela</h3>
                </div>
                <div className="description">
                    <p>Descubre las maravillas escondidas en los bosques de Estados Unidos.</p>
                </div>
                <div className="infoAuthor">
                    <div className="author">
                        <div className="authorPhoto">
                            <img src={usuario2} alt=". . ." />
                        </div>
                        <div className="authorDetails">
                            <p>David Jones</p>
                            <p>May 6, 2020</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="card">
            <div className="background">
                <img src={imgen2} alt=". . ." />
            </div>
            <div className="infoCard">
                <div className="title">
                    <h3>Space X</h3>
                </div>
                <div className="description">
                    <p>Elon Musk, un emprendedor con otra vision multimillonaria.</p>
                </div>
                <div className="infoAuthor">
                    <div className="author">
                        <div className="authorPhoto">
                            <img src={usuario3} alt=". . ." />
                        </div>
                        <div className="authorDetails">
                            <p>Lauren Murphy</p>
                            <p>May 3, 2020</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  );
}
