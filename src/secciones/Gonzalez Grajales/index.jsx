import React from 'react';
import './style.css'
const sections = [
  {
    title: 'Fútbol',
    links: [
      { label: 'Primer Equipo', url: 'https://www.realmadrid.com/es-ES/futbol/primer-equipo-masculino/inicio' },
      { label: 'Primer Equipo Femenino', url: 'https://www.realmadrid.com/es-ES/futbol/primer-equipo-femenino/inicio' },
      { label: 'Cantera', url: 'https://www.realmadrid.com/es-ES/futbol/cantera-masculina/inicio' },
      { label: 'Cantera Femenina', url: 'https://www.realmadrid.com/es-ES/futbol/cantera-femenino/inicio' },
    ],
  },
  {
    title: 'Baloncesto',
    links: [
      { label: 'Primer Equipo Baloncesto', url: 'https://www.realmadrid.com/es-ES/baloncesto/primer-equipo/inicio' },
      { label: 'Cantera Baloncesto', url: 'https://www.realmadrid.com/es-ES/baloncesto/cantera/inicio' },
    ],
  },
  {
    title: 'Socios',
    links: [
      { label: 'Atención al Socio', url: 'https://signin.realmadrid.com/#/sign-in/user?...' },
      { label: 'Tu área personal', url: 'https://signin.realmadrid.com/#/sign-in/user?...' },
      { label: 'Entradas', url: 'https://www.realmadrid.com/es-ES/entradas?...' },
      { label: 'Ventajas exclusivas', url: 'https://signin.realmadrid.com/#/sign-in/user?...' },
      { label: 'Eventos', url: 'https://www.realmadrid.com/es-ES/socios/eventos' },
    ],
  },
  {
    title: 'Club',
    links: [
      { label: 'Calendario', url: 'https://www.realmadrid.com/es-ES/calendario?...' },
      { label: 'Transparencia y Sostenibilidad', url: 'https://www.realmadrid.com/es-ES/el-club/transparencia' },
      { label: 'Patrocinadores', url: 'https://www.realmadrid.com/es-ES/el-club/patrocinadores' },
      { label: 'Valores', url: 'https://www.realmadrid.com/es-ES/el-club/valores' },
      { label: 'Palmarés', url: 'https://www.realmadrid.com/es-ES/el-club/palmares/futbol' },
      { label: 'Historia Real Madrid', url: 'https://www.realmadrid.com/es-ES/el-club/historia' },
      { label: 'Publicaciones', url: 'https://www.realmadrid.com/es-ES/el-club/publicaciones' },
      { label: 'Estadio Bernabéu', url: 'https://www.realmadrid.com/es-ES/santiago-bernabeu' },
      { label: 'Ciudad Real Madrid', url: 'https://www.realmadrid.com/es-ES/el-club/ciudad-real-madrid' },
      { label: 'Movistar Arena', url: 'https://www.realmadrid.com/es-ES/el-club/movistar-arena' },
      { label: 'Contacto', url: 'https://www.realmadrid.com/es-ES/el-club/contacto' },
    ],
  },
  {
    title: 'Estadio Bernabéu',
    links: [
      { label: 'RMTV en directo', url: 'https://www.realmadrid.com/es-ES/real-madrid-tv' },
      { label: 'Noticias', url: 'https://www.realmadrid.com/es-ES/noticias/club' },
      { label: 'Fundación Real Madrid', url: 'https://www.realmadrid.com/es-ES/fundacion' },
      { label: 'Escuela Universitaria Real Madrid', url: 'https://www.realmadrid.com/es-ES/universidad-real-madrid' },
      { label: 'RM Next', url: 'https://www.realmadridnext.com/es/next/home' },
    ],
  },
  {
    title: 'Madridistas',
    links: [
      { label: 'Área VIP', url: 'https://www.realmadrid.com/sites/area-vip?language=es-ES' },
      { label: 'Tienda', url: 'https://shop.realmadrid.com/?language=es-ES' },
      { label: 'Tour', url: 'https://www.realmadrid.com/sites/tour-bernabeu?language=es-ES' },
      { label: 'Entradas', url: 'https://www.realmadrid.com/es-ES/entradas?...' },
      { label: 'RM Play', url: 'https://signin.realmadrid.com/#/sign-in/user?...' },
    ],
  },
];

const RubenRealMadridFooter = () => {
  return (
    <footer className="ruben-site-footer">
      <div className="ruben-footer-content">
        {sections.map((section, idx) => (
          <div key={idx} className="ruben-footer-column">
            <h3 className="ruben-footer-title">{section.title}</h3>
            <ul className="ruben-footer-list">
              {section.links.map((link, i) => (
                <li key={i} className="ruben-footer-item">
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={link.highlight ? 'ruben-highlight' : 'ruben-link'}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default RubenRealMadridFooter;