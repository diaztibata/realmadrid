import './style.css'

function Guerrero() {
  const colecciones = [
    {
      id: 1,
      titulo: "Primera Equipación 25/26",
      img: "https://assets.realmadrid.com/is/image/realmadrid/HOMEKIT-MODULO-NOTICIAS-HOME?$Desktop$&fit=wrap&wid=480",
      boton: "Comprar ahora",
    },
    {
      id: 2,
      titulo: "Segunda Equipación 25/26",
      img: "https://assets.realmadrid.com/is/image/realmadrid/2%C2%AA%20EQ%20Modulo?$Desktop$&fit=wrap&wid=480",
      boton: "Comprar ahora",
    },
    {
      id: 3,
      titulo: "Tercera Equipación 25/26",
      img: "https://assets.realmadrid.com/is/image/realmadrid/Tienda%20Third?$Desktop$&fit=wrap&wid=480",
      boton: "Comprar ahora",
    },
  ];

  return (
    <div className="app">
      <h1 className="titulo">Tienda Oficial</h1>
      <h2 className="subtitulo">Colecciones Destacadas</h2>

      <div className="grid">
        {colecciones.map((item) => (
          <div key={item.id} className="card">
            <img src={item.img} alt={item.titulo} className="imagen" />
            <div className="contenido">
              <h3>{item.titulo}</h3>
              <button className="boton">{item.boton}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Guerrero;
