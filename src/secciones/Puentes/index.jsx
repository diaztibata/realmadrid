import React from "react";
import "./style.css"; // <-- IMPORTANTE: conecta la hoja de estilos

function Puentes() {
  return (
    <footer className="footer">
      {/* Parte superior */}
      <div className="footer-top">
        <div className="footer-logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg"
            alt="Real Madrid Logo"
          />
        </div>

        {/* Redes sociales con SVGs */}
        <div className="footer-socials">
          <a href="https://www.facebook.com/realmadrid" target="_blank" rel="noreferrer">
            {/* Facebook */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24h11.495V14.708H9.691V11.08h3.129V8.414c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24h-1.918c-1.505 0-1.797.716-1.797 1.764v2.307h3.587l-.467 3.628h-3.12V24h6.116C23.403 24 24 23.403 24 22.676V1.325C24 .597 23.403 0 22.675 0z"/></svg>
          </a>

          <a href="https://www.instagram.com/realmadrid" target="_blank" rel="noreferrer">
            {/* Instagram */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.34 3.608 1.316.975.975 1.254 2.242 1.316 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.341 2.633-1.316 3.608-.975.975-2.242 1.254-3.608 1.316-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.341-3.608-1.316-.975-.975-1.254-2.242-1.316-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.341-2.633 1.316-3.608.975-.975 2.242-1.254 3.608-1.316C8.416 2.175 8.796 2.163 12 2.163M12 0C8.741 0 8.332.015 7.052.072 5.775.129 4.638.395 3.678 1.354 2.719 2.313 2.453 3.45 2.396 4.728.015 8.741 0 9.151 0 12.001c0 2.849.015 3.259.072 4.539.057 1.278.323 2.415 1.282 3.374.959.959 2.096 1.225 3.374 1.282 1.28.057 1.689.072 4.539.072s3.259-.015 4.539-.072c1.278-.057 2.415-.323 3.374-1.282.959-.959 1.225-2.096 1.282-3.374.057-1.28.072-1.69.072-4.539s-.015-3.259-.072-4.539c-.057-1.278-.323-2.415-1.282-3.374-.959-.959-2.096-1.225-3.374-1.282C15.259.015 14.849 0 12 0z"/><path d="M12 5.838A6.162 6.162 0 1 0 12 18.162 6.162 6.162 0 1 0 12 5.838zm0 10.162A4 4 0 1 1 12 8a4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 1 1 2.88 0z"/></svg>
          </a>

          <a href="https://x.com/realmadrid" target="_blank" rel="noreferrer">
            {/* X (Twitter) */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.64l-5.237-6.858-6.005 6.858H2.089l7.693-8.785L1.667 2.25h6.88l4.73 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>

          <a href="https://www.youtube.com/realmadrid" target="_blank" rel="noreferrer">
            {/* YouTube */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a2.974 2.974 0 0 0-2.097-2.104C19.53 3.5 12 3.5 12 3.5s-7.53 0-9.401.582a2.974 2.974 0 0 0-2.097 2.104A31.036 31.036 0 0 0 0 12a31.036 31.036 0 0 0 .502 5.814 2.974 2.974 0 0 0 2.097 2.104C4.47 20.5 12 20.5 12 20.5s7.53 0 9.401-.582a2.974 2.974 0 0 0 2.097-2.104A31.036 31.036 0 0 0 24 12a31.036 31.036 0 0 0-.502-5.814zM9.75 15.568V8.432L15.818 12 9.75 15.568z"/></svg>
          </a>
        </div>
      </div>

      {/* Línea divisoria */}
      <hr className="footer-divider" />

      {/* Parte inferior */}
      <div className="footer-bottom">
        <p>Real Madrid © 2025 Todos los derechos reservados</p>
        <div className="footer-links">
          <a href="#">VER TODOS LOS PATROCINADORES</a>
          <a href="#">Aviso Legal</a>
          <a href="#">Política de Privacidad</a>
          <a href="#">Política de Cookies</a>
          <a href="#">Canal de información</a>
          <a href="https://www.realmadrid.com">realmadrid.com</a>
        </div>
      </div>
    </footer>
  );
}

export default Puentes;