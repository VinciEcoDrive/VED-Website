import "./Footer.css";
import cropped_logo from "../../images/cropped_logo.png";

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
                    <a href="../">Accueil</a>
                    <a href="../contact">Formulaire de contact</a>
                    <a href="../actualites">Actualités</a>
                    <a href="../presentation-formula-student">Formula Student</a>
                    <a href="../presentation-prototype_defficience">Prototype d'Efficience</a>
                    <a href="../partenaires">Partenaires</a>
                </p>
            </div>
            <div className="part2">
                <span>© Vinci Eco Drive - 2023</span>
                <a href="../mentions-legales">Mentions légales</a>
                <a href="../contact">Nous contacter</a>
            </div>
        </div>
    );
}

export default Footer;