import './style.css'

function Carvajal() {
  const images = {
    logoRM: "https://upload.wikimedia.org/wikipedia/commons/5/57/Real_emblem_6.png",
    copas15: "https://assets.realmadrid.com/is/content/realmadrid/parche-15-ucl?$Mobile$&fit=wrap",
    emirates: "https://assets.realmadrid.com/is/content/realmadrid/emirates_gray?$Mobile$&fit=wrap&wid=57",
    adidas: "https://assets.realmadrid.com/is/content/realmadrid/adidas_gray?$Mobile$&fit=wrap&wid=57"
  };

  return (
    <div className="rm-header">
      {/* IZQUIERDA */}
      <div className="rm-left">
        <button className="rm-burger">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <img src={images.logoRM} alt="Real Madrid" className="rm-logo" />
        <img src={images.copas15} alt="15 Copas" className="rm-15" />
        <div className="rm-divider"></div>
      </div>

      {/* CENTRO */}
      <nav className="rm-nav">
        <a href="#">Socios</a>
        <a href="#">Madridistas</a>
        <a href="#">Entradas</a>
        <a href="#">Área VIP</a>
        <a href="#">Tour</a>
        <a href="#">Tienda</a>
        <a href="#">RM Play</a>
      </nav>

      {/* DERECHA */}
      <div className="rm-right">
        <img src={images.emirates} alt="Emirates" className="sponsor emirates" />
        <img src={images.adidas} alt="Adidas" className="sponsor adidas" />
        <div className="rm-dots"></div>
        <button className="btn-acceder">
          Acceder
        </button>
      </div>
    </div>
  )
}

export default Carvajal