import "./Footer.css";
import cropped_logo from "../../images/cropped_logo.png";
import { Link } from "react-router-dom";

function Footer({ json }) {

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
                    <span>{json.liens_utiles}</span>
                    <Link to="/">{json.accueil}</Link>
                    <Link to="/contact">{json.formulaire_de_contact}</Link>
                    <Link to="/actualites">{json.actualites}</Link>
                    <Link to="/presentation-formula-student">{json.formula_student}</Link>
                    <Link to="/presentation-prototype_defficience">{json.prototype_d_efficience}</Link>
                    <Link to="/partenaires">{json.partenaires}</Link>
                </p>
            </div>
            <div className="part2">
                <span>© Vinci Eco Drive - 2023</span>
                <Link to="/mentions-legales">{json.mentions_legales}</Link>
                <Link to="/contact">{json.nous_contacter}</Link>
            </div>
        </div>
    );
}

export default Footer;