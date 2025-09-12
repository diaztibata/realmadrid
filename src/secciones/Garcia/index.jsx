import './style.css'

function Garcia() {
    const sectionData = {
  titulo: "Los goles del pleno de victorias en Liga del Real Madrid",
  imagen: "https://assets.realmadrid.com/is/image/realmadrid/ND-LIGA-J01-RM-OSASUNA-ALEGRIA-MBAPPE-VINICIUS-02_MJ33890?$Desktop$&fit=wrap&wid=1440" 
};

  return (
    <div className="page">
      <section className="rm-section" role="region" aria-label="convocados">
        {/* Lado izquierdo: imagen completa */}
        <div className="rm-visual">
          <img
            src={sectionData.imagen}
            alt="Convocados Real Madrid"
            className="rm-image"
          />
        </div>

        {/* Lado derecho: texto */}
        <div className="rm-info">
          <h2 className="rm-title">{sectionData.titulo}</h2>
        </div>
      </section>
    </div>
  );
}


export default Garcia
