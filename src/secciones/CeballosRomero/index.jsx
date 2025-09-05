import React from "react";
import './style.css'
const especiales = [
  {
    id: 1,
    titulo: "Especial: Campeones del mundo por novena vez",
    img: "https://assets.realmadrid.com/is/image/realmadrid/ND-FINAL-INTERCONTINENTAL-RM-PACHUCA-GRUPO-LEVANTA-COPA-03_3PC6634?$Desktop$&fit=wrap&wid=1440"
  },
  {
    id: 2,
    titulo: "Especial: La sexta Supercopa de Europa",
    img: "https://assets.realmadrid.com/is/image/realmadrid/ND_SUPERCOPA_FOTO_CAMPEONES_02_2PC7886?$Desktop$&fit=wrap&wid=1440"
  },
  {
    id: 3,
    titulo: "Especial: ¡La Decimoquinta!",
    img: "https://assets.realmadrid.com/is/image/realmadrid/ND-PORTADA-Y-POSTER-DECIMOQUINTA-GRUPO-COPA-OK_1PC1645?$Desktop$&fit=wrap&wid=1440"
  },
  {
    id: 4,
    titulo: "¡La Undécima!",
    img: "https://assets.realmadrid.com/is/image/realmadrid/1330828837310-6?$Desktop$&fit=wrap&wid=1440"
  }
];

function SI() {
  return (
    <div className="app">
      <header className="header">
        <h2>Especiales Real Madrid</h2>
        <a href="#" className="link">
          Ver todas las noticias →
        </a>
      </header>
      <div className="grid">
        {especiales.map((item) => (
          <div key={item.id} className="card">
            <img src={item.img} alt={item.titulo} />
            <p>{item.titulo}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SI;

