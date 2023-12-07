import React from "react";

export default function Recents() {
  return (
    <div className="last">
    <div className="nav">
        <h2>Reciente</h2>
        <button>Ver Todo</button>
    </div>
    <div className="containerRecents">
        <div className="recent">
            <div className="description">
                <p><span className="strong">Victoria Evans</span> ha comentado en "La Ciudadela"</p>
            </div>
            <div className="date">
                <p>May 7</p>
            </div>
        </div>
        <div className="recent">
            <div className="description">
                <p><span className="strong">Ethan Williams</span> ha comenzado a seguirte</p>
            </div>
            <div className="date">
                <p>May 5</p>
            </div>
        </div>
        <div className="recent">
            <div className="description">
                <p><span className="strong">Nathan Fox</span> le ha gustado "Inolvidable"</p>
            </div>
            <div className="date">
                <p>May 1</p>
            </div>
        </div>
        <div className="recent">
            <div className="description">
                <p><span className="strong">Megan Walsh</span> ha comenzado a seguirte</p>
            </div>
            <div className="date">
                <p>Apr 29</p>
            </div>
        </div>
    </div>
</div>
  );
}
