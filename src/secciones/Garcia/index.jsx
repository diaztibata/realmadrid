import './style.css'

function Garcia() {
    const sectionData = {
  titulo: "Horarios y resultados de los madridistas convocados con sus selecciones",
  imagen: "https://assets.realmadrid.com/is/image/realmadrid/ND-CONVOCADOS-SELECCIONES-FUTBOL-RM-02-09-20251?$Desktop$&fit=wrap&wid=400" 
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
