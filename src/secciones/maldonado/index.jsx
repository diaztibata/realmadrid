import { useState, useEffect, useRef } from 'react';
import './style.css';

// Real Madrid trophy data
const trophies = [
  {
    id: 1,
    name: "Mejor Club S. XX",
    count: 1,
    years: [2000],
    image: "https://assets.realmadrid.com/is/content/realmadrid/SIGLOXX-1",
    description: "FIFA Club of the 20th Century",
    maxWidth: "calc(var(--rm-palmares-padding) * 1.5)"
  },
  {
    id: 2,
    name: "Copas de Europa",
    count: 15,
    years: [1956, 1957, 1958, 1959, 1960, 1966, 1998, 2000, 2002, 2014, 2016, 2017, 2018, 2022, 2023],
    image: "https://assets.realmadrid.com/is/content/realmadrid/4oogyu6o156iphvdvphwpck10-icon",
    description: "UEFA Champions League / European Cup",
    maxWidth: "calc((var(--rm-palmares-padding) * 0.58) + 41.67%)"
  },
  {
    id: 3,
    name: "Mundiales de Clubes",
    count: 9,
    years: [1960, 1998, 2002, 2014, 2016, 2017, 2018, 2022, 2023],
    image: "https://assets.realmadrid.com/is/content/realmadrid/cmvff99i4w10udooqckzt8c2x-icon",
    description: "FIFA Club World Cup / Intercontinental Cup",
    maxWidth: "calc((var(--rm-palmares-padding) * 0.75) + 25%)"
  },
  {
    id: 4, 
    name: "Ligas",
    count: 36,
    years: [1932, 1933, 1954, 1955, 1957, 1958, 1961, 1962, 1963, 1964, 1965, 1967, 1968, 1969, 1972, 1975, 1976, 1978, 1979, 1980, 1986, 1987, 1988, 1989, 1990, 1995, 1997, 2001, 2003, 2007, 2008, 2012, 2017, 2020, 2022, 2023],
    image: "https://assets.realmadrid.com/is/content/realmadrid/34pl8szyvrbwcmfkuocjm3r6t-icon",
    description: "La Liga - Spanish League Championship",
    maxWidth: "calc((var(--rm-palmares-padding) * 0) + 100%)"
  },
  {
    id: 5,
    name: "Copas del Rey",
    count: 20,
    years: [1905, 1906, 1907, 1908, 1917, 1934, 1936, 1946, 1947, 1962, 1970, 1974, 1975, 1980, 1982, 1989, 1993, 2011, 2014, 2023],
    image: "https://assets.realmadrid.com/is/content/realmadrid/apdwh753fupxheygs8seahh7x-icon",
    description: "Copa del Rey - Spanish Cup Competition",
    maxWidth: "calc((var(--rm-palmares-padding) * 0.44) + 55.56%)"
  },
  {
    id: 6,
    name: "Supercopas de Europa",
    count: 6,
    years: [2002, 2014, 2016, 2017, 2022, 2023],
    image: "https://assets.realmadrid.com/is/content/realmadrid/a0f4gtru0oyxmpvty4thc5qkc_icon",
    description: "UEFA Super Cup - European Super Cup",
    maxWidth: "calc((var(--rm-palmares-padding) * 0.83) + 16.67%)"
  },
  {
    id: 7,
    name: "Supercopas de España",
    count: 13,
    years: [1988, 1989, 1990, 1993, 1997, 2001, 2003, 2008, 2012, 2017, 2020, 2022, 2024],
    image: "https://assets.realmadrid.com/is/content/realmadrid/sd8z02fe455z2fjvlxvxh0zo-icon",
    description: "Spanish Super Cup",
    maxWidth: "calc((var(--rm-palmares-padding) * 0.64) + 36.11%)"
  },
  {
    id: 8,
    name: "Copas de la UEFA",
    count: 2,
    years: [1985, 1986],
    image: "https://assets.realmadrid.com/is/content/realmadrid/COPA%20DE%20LA%20UEFA",
    description: "UEFA Cup / Europa League",
    maxWidth: "calc((var(--rm-palmares-padding) * 0.94) + 5.56%)"
  }
];

const TrophyBoard = () => {
  const [selectedTrophy, setSelectedTrophy] = useState(null);
  const [activeTab, setActiveTab] = useState('futbol');
  const [yearFilter, setYearFilter] = useState(2025);
  const [rangePercentage, setRangePercentage] = useState(100);
  const sliderRef = useRef(null);
  
  useEffect(() => {
    if (sliderRef.current) {
      const min = parseInt(sliderRef.current.min);
      const max = parseInt(sliderRef.current.max);
      const val = parseInt(sliderRef.current.value);
      const percentage = ((val - min) / (max - min)) * 100;
      setRangePercentage(percentage);
      
      document.documentElement.style.setProperty(
        '--rm-palmares-range-position', 
        `${percentage}%`
      );
      document.documentElement.style.setProperty(
        '--rm-palmares-range-bg', 
        `linear-gradient(90deg, var(--rm-color-primary-dark) ${percentage}%, var(--rm-color-grayscale-light) ${percentage}%)`
      );
    }
  }, [yearFilter]);

  const handleTrophyClick = (trophy) => {
    setSelectedTrophy(trophy);
  };

  const handleCloseDetails = () => {
    setSelectedTrophy(null);
  };

  const handleYearChange = (e) => {
    setYearFilter(parseInt(e.target.value));
  };

  const filteredTrophies = trophies.filter(trophy => {
    return trophy.years.some(year => year <= yearFilter);
  });

  const getTrophyCountByYear = (trophy) => {
    return trophy.years.filter(year => year <= yearFilter).length;
  };

  return (
    <div className="trophy-board">
      <header className="trophy-board-header">
        <h2 className="trophy-board-title">Un palmarés de leyenda</h2>
      </header>
      
      <div className="trophy-board-main">
        <div className="trophy-board-image-container">
          <img 
            className="trophy-board-image"
            src="https://assets.realmadrid.com/is/image/realmadrid/ND-02-SALA-DE-JUNTAS_MJ29940?$Desktop$&fit=wrap&wid=700" 
            alt="Real Madrid Trophy Room"
          />
        </div>

        <div className="trophy-board-container">
          <div className="trophy-board-nav">
            <div className="trophy-board-tabs">
              <button 
                className={`trophy-board-tab ${activeTab === 'futbol' ? 'active' : ''}`}
                onClick={() => setActiveTab('futbol')}
              >
                Fútbol
              </button>
              <button 
                className={`trophy-board-tab ${activeTab === 'baloncesto' ? 'active' : ''}`}
                onClick={() => setActiveTab('baloncesto')}
              >
                Baloncesto
              </button>
            </div>
          </div>

          <div className="trophy-board-content">
            <div className="trophy-grid-container">
              {filteredTrophies.map((trophy) => (
                <div key={trophy.id} className="trophy-grid-item">
                  <div className="trophy-card" onClick={() => handleTrophyClick(trophy)}>
                    <div className="trophy-card-icon">
                      <img 
                        className="trophy-icon-img" 
                        src={trophy.image} 
                        alt={trophy.name} 
                      />
                      {trophy.count > 1 && (
                        <span className="trophy-card-number">
                          {getTrophyCountByYear(trophy)}
                        </span>
                      )}
                    </div>
                    <div className="trophy-card-info">
                      <p className="trophy-card-name">{trophy.name}</p>
                      <div 
                        className="trophy-card-bg" 
                        style={{ width: trophy.maxWidth }}
                      >
                        <div 
                          className="trophy-card-progress" 
                          style={{ 
                            width: `${Math.min(100, (getTrophyCountByYear(trophy) / trophy.count) * 100)}%` 
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="trophy-board-footer">
            <div className="trophy-board-range">
              <input 
                ref={sliderRef}
                type="range" 
                name="year-filter" 
                id="year-filter" 
                className="trophy-range-input" 
                min="1905" 
                max="2025" 
                step="1" 
                value={yearFilter}
                onChange={handleYearChange}
              />
              <span className="trophy-range-value">{yearFilter}</span>
            </div>
          </div>
        </div>
      </div>

      {selectedTrophy && (
        <div className="trophy-details-overlay" onClick={handleCloseDetails}>
          <div className="trophy-details" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={handleCloseDetails}>×</button>
            <h2>{selectedTrophy.name}</h2>
            <img 
              className="trophy-image-detail" 
              src={selectedTrophy.image} 
              alt={selectedTrophy.name} 
            />
            <p className="trophy-description">{selectedTrophy.description}</p>
            <p className="trophy-count-large">
              <span>{getTrophyCountByYear(selectedTrophy)}</span>
              {getTrophyCountByYear(selectedTrophy) < selectedTrophy.count && 
                <span className="trophy-count-total">/{selectedTrophy.count} totales</span>
              }
            </p>
            <div className="trophy-years">
              <h4>Años ganados:</h4>
              <div className="years-grid">
                {selectedTrophy.years
                  .filter(year => year <= yearFilter)
                  .map((year) => (
                    <div key={year} className="year-badge">{year}</div>
                ))}
              </div>
              {selectedTrophy.years.some(year => year > yearFilter) && (
                <p className="trophy-future-note">
                  * Ajuste el filtro de año para ver todos los títulos
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrophyBoard;
