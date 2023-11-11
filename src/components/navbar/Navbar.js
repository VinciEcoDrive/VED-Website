import { useState, useEffect } from "react";
import biglogo from "../../images/big-logo.png";
import flag_fr from "../../images/flag_fr.png";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {

    const navigate = useNavigate();

    const [nav, setNav] = useState(false);
    const [navtitles, setNavtitles] = useState(["Accueil", "Actualités", "Formula Student", "Prototype d'Efficience", "Partenaires"])

    useEffect(() => {
        init();
    }, [])

    function init() {
        if (localStorage.getItem("ved-language") !== null) {
            if (localStorage.getItem("ved-language") === "english") {
                setNavtitles(["Home", "News", "Formula Student", "Efficiency Prototype", "Partners"]);
                document.getElementById('lang').style.backgroundImage = "url(" + flag_fr + ")";
            }
        }
    }

    function biggerNav() {
        if (nav) {
            setNav(false);
            document.getElementById("scrolled").style.display = "none";
            document.getElementById("cross").style.display = "none";
            document.getElementById("hamburger").style.display = "block";
            document.getElementById("Navbar").style.height = "10vh";
        }
        else {
            setNav(true);
            document.getElementById("Navbar").style.height = "100vh";
            document.getElementById("hamburger").style.display = "none";
            document.getElementById("cross").style.display = "block";
            setTimeout(() => {
                document.getElementById("scrolled").style.display = "block";
            }, 400);
        }
    }

    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        if (currentScrollPos > 100) {
            if (prevScrollpos > currentScrollPos) {
                document.getElementById("Navbar").style.top = "0";
                document.getElementById("Navbar").style.opacity = "1";
            } else {
                document.getElementById("Navbar").style.top = "-11vh";
                document.getElementById("Navbar").style.opacity = "0";
            }
            prevScrollpos = currentScrollPos;
        }
    }

    function handleLogoClick() {
        navigate("/");
    }

    function changeLanguage() {
        if (localStorage.getItem("ved-language") === "french") {
            localStorage.setItem("ved-language", "english");
        }
        else {
            localStorage.setItem("ved-language", "french");
        }
        window.location.reload(1);
    }

    return (
        <div id="Navbar">
            <img src={biglogo} id="logo" alt="logo-ved" onClick={handleLogoClick}></img>
            <div className="titles">
                <Link to="/actualites">{navtitles[1]}</Link>
                <Link to="/presentation-formula-student">{navtitles[2]}</Link>
                <Link to="/presentation-prototype_defficience">{navtitles[3]}</Link>
                <Link to="/partenaires">{navtitles[4]}</Link>
                <Link className="color-red" to="/contact">Contact</Link>
                {/* <a href="../actualites">{navtitles[1]}</a>
                <a href="../presentation-formula-student">{navtitles[2]}</a>
                <a href="../presentation-prototype_defficience">{navtitles[3]}</a>
                <a href="../partenaires">{navtitles[4]}</a>
                <a className="color-red" href="../contact">Contact</a> */}
                <button onClick={changeLanguage} id="lang" className="lang_en"> </button>
                <span id="hamburger" onClick={() => biggerNav()}></span>
                <span id="cross" onClick={() => biggerNav()}></span>
            </div>
            <div id="scrolled">
                <Link to="/" onClick={biggerNav}>{navtitles[0]}</Link>
                {/* <a href="../">{navtitles[0]}</a> */}
                <br></br>
                <Link to="/actualites" onClick={biggerNav}>{navtitles[1]}</Link>
                {/* <a href="../actualites">{navtitles[1]}</a> */}
                <br></br>
                <Link to="/presentation-formula-student" onClick={biggerNav}>{navtitles[2]}</Link>
                {/* <a href="../presentation-formula-student">{navtitles[2]}</a> */}
                <br></br>
                <Link to="/presentation-prototype_defficience" onClick={biggerNav}>{navtitles[3]}</Link>
                {/* <a href="../presentation-prototype_defficience">{navtitles[3]}</a> */}
                <br></br>
                <Link to="/partenaires" onClick={biggerNav}>{navtitles[4]}</Link>
                {/* <a href="../partenaires">{navtitles[4]}</a> */}
                <br></br>
                <Link className="color-red" to="/contact" onClick={biggerNav}>Contact</Link>
                {/* <a className="color-red" href="../contact">Contact</a> */}
            </div>
        </div>
    );
}

export default Navbar;