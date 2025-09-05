import "./style.css";
// Datos del partido
const matchData = {
  league: {
    name: "La Liga",
    competition: "Fútbol · Primer Equipo"
  },
  matchInfo: {
    jornada: 3,
    stadium: "Bernabéu",
    time: "14:30",
    status: "upcoming"
  },
  teams: {
    home: {
      name: "Real Madrid", 
      shortName: "R",
      logo: "https://assets.realmadrid.com/is/image/realmadrid/3kq9cckrnlogidldtdie2fkbl?$Mobile$&fit=wrap&wid=144&hei=144",
      colors: {
        primary: "#ffffff",
        secondary: "#000040"
      }
    },
    away: {
      name: "Mallorca",
      shortName: "M",
      logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/9/97/RCD_Mallorca_%28logo%29.svg/1547px-RCD_Mallorca_%28logo%29.svg.png",
      colors: {
        primary: "#ff0000",
        secondary: "#000000"
      }
    }
  },
  actions: {
    buyTickets: {
      text: "Comprar entradas",
      icon: "🎫",
      primary: true
    },
    followMatch: {
      text: "Seguir el partido",
      icon: "",
      primary: false
    }
  }
};

// Componente para el escudo del equipo
function TeamCrest({ team, position }) {
  return (
    <div className={`team-crest ${position}`}>
      {position === 'left' && (
        <div className="team-name-right">
          <div className="team-short-name">{team.shortName}</div>
          <span className="team-short-dots">e...</span>
        </div>
      )}
      <div className="crest-circle">
        <div className={`crest-icon ${team.name.includes('Real') ? 'real-madrid' : 'mallorca'}`}> 
          <img 
            src={team.logo} 
            alt={`${team.name} logo`}
            className="team-logo"
          />
        </div>
      </div>
      {position === 'right' && (
        <div className="team-name-left">
          <span className="team-short-dots">a...</span>
          <div className="team-short-name">{team.shortName}</div>
        </div>
      )}
    </div>
  );
}

// Componente para los botones de acción
function ActionButton({ action, variant = 'secondary' }) {
  return (
    <button className={`action-button ${variant}`}> 
      <div className="button-content">
        {variant === 'primary' && <span className="button-icon">🎫</span>}
        <span className="button-text">{action.text}</span>
      </div>
    </button>
  );
}

// Componente para la sección de información de la liga
function LeagueInfo({ matchData }) {
  return (
    <div className="league-info">
      <div className="league-main">
        <h1 className="league-title">{matchData.league.name}</h1>
        <div className="league-details">
          <div>Jornada {matchData.matchInfo.jornada}</div>
          <div>{matchData.matchInfo.stadium}</div>
          <div className="league-tv-icon">
            <span role="img" aria-label="tv">&#128187;</span>
          </div>
        </div>
      </div>
      <div className="league-competition">
        {matchData.league.competition}
      </div>
    </div>
  );
}

// Componente para la sección del partido
function MatchSection({ matchData }) {
  return (
    <div className="match-section">
      {/* Equipo Local */}
      <TeamCrest team={matchData.teams.home} position="left" />
      {/* Marcador/Hora */}
      <div className="score-section">
        <span className="score-dash">-</span>
        <div className="time-box">
          <span className="match-time">{matchData.matchInfo.time}</span>
        </div>
        <span className="score-dash">-</span>
      </div>
      {/* Equipo Visitante */}
      <TeamCrest team={matchData.teams.away} position="right" />
    </div>
  );
}

// Componente para los botones de acción
function ActionButtons({ matchData }) {
  return (
    <div className="action-buttons">
      <ActionButton 
        action={matchData.actions.buyTickets} 
        variant="primary"
      />
      <ActionButton 
        action={matchData.actions.followMatch} 
        variant="secondary"
      />
    </div>
  );
}

// Componente para el indicador inferior
function BottomIndicator() {
  return (
    <div className="bottom-indicator">
      <div className="indicator-content">
        <div className="indicator-dot"></div>
        <span className="chat-icon">💬</span>
      </div>
    </div>
  );
}

// Componente principal Sotelo
function Sotelo() {
  return (
    <div className="app-container">
      <div className="match-card-container">
        <div className="match-card">
          <div className="match-header">
            {/* Sección Izquierda - Info de la Liga */}
            <LeagueInfo matchData={matchData} />

            {/* Sección Central - Equipos y Marcador */}
            <MatchSection matchData={matchData} />

            {/* Sección Derecha - Botones de Acción */}
            <ActionButtons matchData={matchData} />
          </div>

          {/* Indicador inferior */}
          <BottomIndicator />
        </div>
      </div>
    </div>
  );
}

export default Sotelo;