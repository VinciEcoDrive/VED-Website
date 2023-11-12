import "./Footer.css";
import cropped_logo from "../../images/cropped_logo.png";
import { Link } from "react-router-dom";

function Footer() {

    // fetch("https://api.instagram.com/v1/users/self/media/recent/?client_id=982737099296605", {
    //     headers: {
    //         Authorization: "fcb597fa1c53517c19fa3031e90b8b07"
    //     }
    // })
    //     .then(response => response.json())
    //     .then(data => {
    //         const latestPost = data.data[0];
    //         console.log(latestPost);
    //     });

    return (
        <div id="Footer">
            <div className="part1">
                <img src={cropped_logo} alt="cropped_logo"></img>
                <p>
                    <span>Liens utiles</span>
                    <Link to="/">Accueil</Link>
                    <Link to="/contact">Formulaire de contact</Link>
                    <Link to="/actualites">Actualités</Link>
                    <Link to="/presentation-formula-student">Formula Student</Link>
                    <Link to="/presentation-prototype_defficience">Prototype d'Efficience</Link>
                    <Link to="/partenaires">Partenaires</Link>
                </p>
            </div>
            <div className="part2">
                <span>© Vinci Eco Drive - 2023</span>
                <Link to="/mentions-legales">Mentions légales</Link>
                <Link to="/contact">Nous contacter</Link>
            </div>
        </div>
    );
}

export default Footer;