import "../styles/Banner.css" //Import du fichier de style de l'élément
import logo from "../assets/logo.png" //Import de l'image

function Banner() {
    return <div className="lmj-banner">
                <img src= {logo} alt="La maison jungle" className="lmj_logo"></img>
                <h1>La maison jungle</h1>
            </div>
}

export default Banner