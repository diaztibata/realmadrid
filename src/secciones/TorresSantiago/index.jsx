function TorresSantiago() {
    const eventos = [
    {
        id: 1,
        equipoLocal: "Real Madrid",
        logoLocal:
        "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg",
        equipoVisitante: "Mallorca",
        logoVisitante:
        "https://w7.pngwing.com/pngs/278/385/png-transparent-rcd-mallorca-la-liga-majorca-football-player-nba-team-logo-football-player-spain-thumbnail.png",
        jornada: "Jornada 3",
        fecha: "Sábado, 30 ago, 21:30 h",
        lugar: "Bernabéu",
        confirmado: true,
    },
    {
        id: 2,
        equipoLocal: "Real Sociedad",
        logoLocal:
        "https://upload.wikimedia.org/wikipedia/en/f/f1/Real_Sociedad_logo.svg",
        equipoVisitante: "Real Madrid",
        logoVisitante:
        "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg",
        jornada: "Jornada 4",
        fecha: "13 sept (fecha y hora por confirmar)",
        lugar: "Reale Arena",
        confirmado: false,
    },
    {
        id: 3,
        equipoLocal: "Real Madrid",
        logoLocal:
        "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg",
        equipoVisitante: "Espanyol",
        // Si esta URL fallara, verás el placeholder automático:
        logoVisitante:
        "https://logos-world.net/wp-content/uploads/2020/11/Espanyol-Logo.png",
        jornada: "Jornada 5",
        fecha: "20 sept (fecha y hora por confirmar)",
        lugar: "Bernabéu",
        confirmado: false,
    },
    ];

    /** Genera un SVG como data URL con las iniciales del equipo para usar de placeholder */
    function makePlaceholder(name = "") {
      const initials = name
        .split(/\s+/)
        .map((w) => w[0])
        .filter(Boolean)
        .slice(0, 2)
        .join("")
        .toUpperCase();
    
      const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80">
          <defs>
            <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stop-color="#e6e6e6"/>
              <stop offset="1" stop-color="#cfcfcf"/>
            </linearGradient>
          </defs>
          <rect x="4" y="4" width="72" height="72" rx="16" fill="url(#g)"/>
          <text x="50%" y="52%" font-family="Arial, sans-serif" font-size="26" fill="#666"
                dominant-baseline="middle" text-anchor="middle">${initials || "?"}</text>
        </svg>`;
      return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
    }
    
    function TeamBadge({ name, logo }) {
      const fallback = makePlaceholder(name);
      const onErr = (e) => {
        e.currentTarget.onerror = null;
        e.currentTarget.src = fallback;
      };
      return (
        <div className="equipo" title={name}>
          <img
            className="logo"
            src={logo || fallback}
            alt={name}
            loading="lazy"
            onError={onErr}
          />
          <span>{name}</span>
        </div>
      );
    }

    return (
        <div className="container">
            <h1 className="titulo">Próximos eventos</h1>
            <div className="tarjetas">
                {eventos.map((e) => (
                    <div key={e.id} className="tarjeta">
                        <div className="encabezado">
                            <TeamBadge name={e.equipoLocal} logo={e.logoLocal} />
                            <span className="vs">⚡</span>
                            <TeamBadge name={e.equipoVisitante} logo={e.logoVisitante} />
                        </div>
                        <div className="cuerpo">
                            <p className="categoria">Fútbol · Primer Equipo</p>
                            <h2 className="competicion">La Liga</h2>
                            <p className="jornada">{e.jornada}</p>
                            <div className="detalle">
                                <span className="icono">📅</span>
                                <span className={e.confirmado ? "" : "pendiente"}>{e.fecha}</span>
                            </div>
                            <div className="detalle">
                                <span className="icono">📍</span>
                                <span>{e.lugar}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TorresSantiago;