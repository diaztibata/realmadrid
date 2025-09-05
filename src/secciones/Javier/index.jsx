import './estyle.css'
function javier() {
    const object = {
        img: "https://assets.realmadrid.com/is/image/realmadrid/Bernabeu?$Desktop$&fit=wrap&wid=1440" ,
        nombre: "Estadio Santiago Bernabéu",
    }
  return (
     <div className="App">
      <header>
        <h1>{object.nombre}</h1>
      </header>
      <main>
        <div className="contenedor-imagen">
          <img src={object.img} alt=""/>
          
          <div className="boton-texto b1">
            <span className="boton-icono">
              ▶
            </span>
            1 - Fachada principal Castellana
          </div>

          <div className="boton-texto b2">
            <span className="boton-icono">
              ▶
            </span>
            2 - Plaza Sagrados Corazones
          </div>

          <div className="boton-texto b3">
            <span className="boton-icono">
              ▶
            </span>
            3 - Esquina Castellana con Rafael Salgado
          </div>

          <div className="boton-texto b4">
            <span className="boton-icono">
              ▶
            </span>
            4 - Esquina Padre Damián con Rafael Salgado
          </div>
        </div>
      </main>
      <footer>
        &copy; 2025 Estadio Madrid. Todos los derechos reservados.
      </footer>
    </div>
  )
}

export default javier;
