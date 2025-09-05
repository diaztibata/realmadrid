
function Guzman() {
const appSection = {
   titulo: "Descarga ahora",
   subtitulo: "Real Madrid App",
   
 nombre: "Google Play",
 link: "https://play.google.com/store",
 img1: "src/assets/google-play-2.svg",
 
 nombre: "App Store",
 link: "https://apps.apple.com/",
 img2: "src/assets/app-store-2.svg",


 nombre: "Huawei AppGallery",
 link: "https://appgallery.huawei.com/",
 img3: "src/assets/huawei-store-2.svg",


 nombre: "Emirates",
 link: "https://www.emirates.com/es/spanish/",
 img4: "src/assets/emirates_gray.svg",

 nombre: "Adidas",
 link: "https://www.adidas.es/futbol",
 img5: "src/assets/adidas_gray.svg",

 nombre: "HP",
 link: "https://www.hp.com/es-es/home.html",
 img6: "src/assets/hp_gray.svg"
 
 }
return (
 <>
 <div className="divider"></div>

 <p>{appSection.titulo}</p>
 <h2>{appSection.subtitulo}</h2>

 <div className="divider"></div>

 <img src={appSection.img1}/>
 <img src={appSection.img2}/>
 <img src={appSection.img3}/>

<div className="divider"></div>

 <div className="sponsors-logos">
 <img src={appSection.img4}/>
 <img src={appSection.img5}/>
 </div>

 <div className="hp">
 <img src={appSection.img6}/>
 </div>
 </> 
 );
}
export default Guzman;


