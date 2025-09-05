import '../MartinRamirez/style.css';

function Martin() {

  return (
    <div className="madrid-container">
      <h1 className="title">Comunidad Madridista</h1>
      
      <div className="content-wrapper">
        {/* Sección Izquierda */}
        <div className="left-section">
          <div className="card">
            <div className="player-image">
              <img 
                src="https://assets.realmadrid.com/is/image/realmadrid/1080x1080_ES?$Desktop$&fit=wrap&wid=552" 
                alt="Jugador Real Madrid"
              />
            </div>
          </div>
        </div>
        
        {/* Sección Derecha */}
        <div className="right-section">
          <div className="join-card">
            <h2 className="join-title">Únete a la Comunidad Madridista</h2>
            <button className="join-button">
              Únete al equipo
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Martin
