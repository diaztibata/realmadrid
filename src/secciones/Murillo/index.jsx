import './style.css';

function Murillo() {
  const noticias = [
    {
      id: 1,
      title: "Oferta Orange exclusiva para Socios y Madridistas Premium",
      image: "https://assets.realmadrid.com/is/image/realmadrid/YDRAY-07_RM_1920x1080_parche-(2)?$Desktop$&fit=wrap&wid=400",
      isSpecial: true,
    },
    {
      id: 2,
      title: "Disfruta del Madridismo a lo grande en Dubái con un 50% de descuento exclusivo",
      image: "https://assets.realmadrid.com/is/image/realmadrid/Dubai%20madridistas?$Desktop$&fit=wrap&wid=400",
      isSpecial: false,
    },
    {
      id: 3,
      title: "Una pedida de mano muy especial... en el Santiago Bernabéu",
      image: "https://assets.realmadrid.com/is/image/realmadrid/1920-1?$Desktop$&fit=wrap&wid=400",
      isSpecial: false,
    },
  ];

  const handleNoticiaClick = (noticia) => {
    console.log('Noticia clickeada:', noticia.title);
  };

  const handleVerTodas = (e) => {
    e.preventDefault();
    console.log('Ver todas las noticias clickeado');
  };

  return (
    <section className="news-section">
      <div className="section-header">
        <h2 className="section-title">Noticias Madridistas</h2>
        <a href="#" className="view-all-link" onClick={handleVerTodas}>
          Ver todas las noticias
        </a>
      </div>

      <div className="news-grid">
        {noticias.map((noticia) => (
          <div
            key={noticia.id}
            className={`news-card ${noticia.isSpecial ? 'card-1' : ''}`} // Corregido aquí
            onClick={() => handleNoticiaClick(noticia)}
          >
            {noticia.isSpecial ? (
              <>
                <div className="card-overlay-text">TODO</div>
                <div className="news-content">
                  <h3 className="news-title">{noticia.title}</h3>
                </div>
              </>
            ) : (
              <>
                <img 
                  src={noticia.image} 
                  alt={noticia.title} 
                  className="news-image" 
                />
                <div className="news-content">
                  <h3 className="news-title">{noticia.title}</h3>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Murillo;
