import './style.css'
function Riaño() {

  const noticias = [
    {
      id: 1,
      imagen: "https://assets.realmadrid.com/is/image/realmadrid/ND-CONVOCADOS-SELECCIONES-FUTBOL-RM-02-09-20251?$Desktop$&fit=wrap&wid=350",
      titulo: "Horarios de los madridistas convocados con sus selecciones",
    },
    {
      id: 2,
      imagen: "https://assets.realmadrid.com/is/image/realmadrid/ND-SORTEO-CHAMPIONS-Previews---202526-European-Club-Football-Season-Kick-off-(4)?$Desktop$&fit=wrap&wid=400",
      titulo: "Calendario del Real Madrid en la primera fase de la Champions 2025/26",
    },
    {
      id: 3,
      imagen: "https://assets.realmadrid.com/is/image/realmadrid/ND-ENTRENO-FEMENINO-01_SG13652?$Desktop$&fit=wrap&wid=400",
      titulo: "El equipo prepara el partido contra el Atlético",
    },
    {
      id: 4,
      imagen: "https://assets.realmadrid.com/is/image/realmadrid/ND-ENTREVISTA-TAVARES-02_1VC5607?$Desktop$&fit=wrap&wid=350",
      titulo: "Tavares: Mi objetivo es ser siempre el mejor defensor para ayudar al equipo a estar seguro",
    },
  ];

  return (
    <div className="container">
      <div className="grid">
        {noticias.map(noticia => (
          <div key={noticia.id}>
            <img
              src={noticia.imagen}
              alt={noticia.titulo}
              className="image"
            />
            <div className="content">
              <h3 className="title">
                {noticia.titulo}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Riaño