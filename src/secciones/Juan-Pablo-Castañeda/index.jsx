import './style.css'

export default function Publicidad() {

var objetoPublicidad={
    img1:"https://tpc.googlesyndication.com/simgad/8273385401786107190",
    img2:"https://tpc.googlesyndication.com/simgad/13739736744740937172",
    img3:"https://tpc.googlesyndication.com/simgad/15889508104845033267"

}

    return (
	<section id="publicidad">
		<div className="publicidad-grid">
			<ul className="publicidad-list">

				<li className="publicidad-card">
					<a href="#">
						<img 
						/*src="https://tpc.googlesyndication.com/simgad/8273385401786107190"*/
                        src={objetoPublicidad.img1}
						alt="Publicidad 1"
						/>
					</a>
				</li>

				<li className="publicidad-card">
					<a href="#">
						<img 
						/*src="https://tpc.googlesyndication.com/simgad/13739736744740937172"*/
                        src={objetoPublicidad.img2}
						alt="Publicidad 2"
						/>
					</a>
				</li>

				<li className="publicidad-card">
					<a href="#">
						<img 
						/*src="https://tpc.googlesyndication.com/simgad/15889508104845033267"*/
                        src={objetoPublicidad.img3}
						alt="Publicidad 3"
						/>
					</a>
				</li>
			</ul>
		</div>
	</section>
 );
}