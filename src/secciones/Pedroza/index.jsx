import './style.css'

function pedroza() {

const anuncios = {
    anuncio1: {
      id: 1,
      imagen: "https://tpc.googlesyndication.com/simgad/3294518566630187960"
    },
    anuncio2: {
      id: 2,
      imagen: "https://s0.2mdn.net/dfp/1761334/5356108316/1749194940185/Banner_Dubai_May_728x90/728x90_IMG03.jpg"
    },
    anuncio3: {
      id: 3,
      imagen: "https://tpc.googlesyndication.com/simgad/834068855906244193"
    }
  };

  return (
    <div className="lista-anuncios">
      {Object.values(anuncios).map((item) => (
        <img
          key={item.id}
          src={item.imagen}
          alt={`anuncio-${item.id}`}
          className="banner"
        />
      ))}
    </div>
  );
}


export default pedroza
