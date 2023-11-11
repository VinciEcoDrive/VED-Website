import Social from '../../components/social/Social';
import capgemini from '../../images/partenaires/capgemini.png';
import mathworks from '../../images/partenaires/mathworks.png';
import ansys from '../../images/partenaires/ansys.png';
import coq_sportif from '../../images/partenaires/coq_sportif.png';
import dassault from '../../images/partenaires/dassault.png';
import dvic from '../../images/partenaires/dvic.png';
import enerlis from '../../images/partenaires/enerlis.png';
import hexcel from '../../images/partenaires/hexcel.png';
import sculpteo from '../../images/partenaires/sculpteo.png';
import sicomin from '../../images/partenaires/sicomin.png';
import simulia from '../../images/partenaires/simulia.png';
import skf from '../../images/partenaires/skf.png';
import rs from '../../images/partenaires/rs.png';
import xometry from '../../images/partenaires/xometry.png';
import danielson from '../../images/partenaires/danielson.png';
import easy_composite from '../../images/partenaires/easy_composite.png';
import pe from '../../images/PE_white.png';
import fs from '../../images/FS_white.png';
import { useState, useEffect } from "react";
import './Home.css';
import '../../App.css';

function Home() {

    document.title = "Accueil - Vinci Eco Drive";
    const [text, setText] = useState([["Ouvrons la piste de l'innovation", "Nos actualités", "Derniers articles"], ["Qui sommes nous ?", "Vinci Eco Drive est l'association de construction et de sport automobile du pôle Léonard de Vinci. Crée en 2013, l'association compte aujourd'hui plus de 80 membres actifs provenant de 3 écoles, celle du pôle Léonard de Vinci : l'ESILV, l'EMLV et l'IIM. Vinci Eco Drive compte à ce jour 2 projets : Le prototype d'efficience et la formula student."]]);

    useEffect(() => {
        init();
    }, [])

    function init() {
        if (localStorage.getItem("ved-language") !== null) {
            if (localStorage.getItem("ved-language") === "english") {
                setText([["The race for innovation", "Our news", "Our latest news"], ["Who are we ?", "Vinci Eco Drive is the construction and motorsport association of the Léonard de Vinci cluster. Created in 2013, the association now has more than 80 active members from 3 schools, that of the Léonard de Vinci cluster: ESILV, EMLV and IIM. Vinci Eco Drive currently has 2 projects: The Efficiency Prototype and the Formula Student."]]);
            }
        }
    }

    var Airtable = require('airtable');
    var base = new Airtable({ apiKey: process.env.REACT_APP_API }).base('app2C0wRuRDCffv1l');

    function getArticles() {

        document.getElementById('articles').innerHTML = "";

        if (window.nombre !== true) {

            var suite = "";

            if (localStorage.getItem("ved-language") !== null) {
                if (localStorage.getItem("ved-language") === "english") {
                    suite = "_en";
                }
            }

            base('Articles' + suite).select({
                // Selecting the first 3 records in Grid view:
                maxRecords: 3,
                view: "Grid view"
            }).eachPage(function page(records, fetchNextPage) {
                records.forEach(async function (record) {
                    var url = await record.get('Image')[0].url;
                    document.getElementById('articles').innerHTML += "<div class='article' onclick='window.location.href=`" + record.get('Url') + "`'>" +
                        "<h1 style='background-image: url(" + url + "'>" + record.get('Titre') + "</h1>" +
                        "<div class='article-ctn'>" +
                        "<a class='a-tags'>" + record.get('Tags') + "</a>" +
                        "<p>" + record.get('Contenu').slice(0, 61) + "...</p>" +
                        "</div>" +
                        "</div>";
                });

                fetchNextPage();

            }, function done(err) {
                if (err) { console.error(err); return; }
            });

            window.nombre = true;
        }
    }

    return (
        <div className="Home" onLoad={getArticles}>
            <div className='bg'>
                <div className='ctn'>
                    <h1>"{text[0][0]}"</h1>
                    <a href='../actualites'><button className='btn-special'>{text[0][1]}</button></a>
                </div>
            </div>
            <a href="/" class="taglink" name="introduction"> </a>
            <span></span>
            <div className='div-info'>
                <span>INTRODUCTION</span>
                <br></br>
                <h1>{text[1][0]}</h1>
                <p data-aos="fade-up">
                    {text[1][1]}
                </p>
            </div>
            <a href="/" class="taglink" name="projets"> </a>
            <span></span>
            <div className='div-info'>
                <span>PROJETS</span>
                <br></br>
                <h1>Nos projets</h1>
                <div className='cards'>
                    <div className='card-l'>
                        <img src={pe} alt="logo-pe"></img>
                        <h2>Prototype d'efficience</h2>
                        <p>
                            Présentation
                            <br></br>
                            Ce projet est le projet phare de notre association, présent depuis sa création en 2013, nous en somme aujourd'hui a notre 7ème châssis. Son concept est de produire le véhicule électrique le plus efficient possible.
                        </p>
                        <p>
                            Nos objectifs
                            <br></br>
                            Nous participons à 3 compétitions majeures : le Shell Eco Marathon, l'Albi Eco Race et le Challenge EcoGreen Gas. Notre objectif avec NOVA, notre dernier prototype est de battre notre précédent record de 3731km/L.
                        </p>
                        <a href='../presentation-prototype_defficience'><button>En savoir plus</button></a>
                    </div>
                    <div className='card-r'>
                        <img src={fs} alt="logo-fs"></img>
                        <h2>Formula Student</h2>
                        <p>
                            Présentation
                            <br></br>
                            La Formula Student est le second projet de notre association, présent depuis 2018, nous sommes actuellement a notre premier châssis. La formula student est une monoplace électrique qui a pour but d'être rapide et agile.
                        </p>
                        <p>
                            Nos objectifs
                            <br></br>
                            Nous avons pour objectif de terminer notre prototype et les tests d'ici l'été 2024 pour participer au championnat FSAE dans plusieurs pays tels que l'Allemagne, le Royaume Uni, l'Espagne et bientôt la France.
                        </p>
                        <a href='../presentation-formula-student'><button>En savoir plus</button></a>
                    </div>
                </div>
            </div>
            <a href="/" class="taglink" name="articles"> </a>
            <span></span>
            <div className='div-info'>
                <span>Articles</span>
                <br></br>
                <h1>{text[0][2]}</h1>
                <div className='cards' id="articles"></div>
            </div>
            <a href="/" class="taglink" name="competitions"> </a>
            <span></span>
            <div className='div-info'>
                <span>Competitions</span>
                <br></br>
                <h1>Nos compétitions</h1>
                <div className='compets'>
                    <div className='compet shell' data-aos="zoom-in">
                        <div className='compet-txt'>
                            <div>
                                <p className='tit'>
                                    Shell Eco Marathon
                                </p>
                                <p className='dat'>
                                    Mai 2023
                                    <br></br>
                                    <i>Nogaro, France</i>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='compet albi' data-aos="zoom-in">
                        <div className='compet-txt'>
                            <div>
                                <p className='tit'>
                                    Albi Eco Race
                                </p>
                                <p className='dat'>
                                    Mai 2023
                                    <br></br>
                                    <i>Albi, France</i>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='compet eco-green' data-aos="zoom-in">
                        <div className='compet-txt'>
                            <div>
                                <p className='tit'>
                                    Challenge Eco Green
                                </p>
                                <p className='dat'>
                                    Mai 2023
                                    <br></br>
                                    <i>Fay-de-Bretagne, France</i>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='compet fsg' data-aos="zoom-in">
                        <div className='compet-txt'>
                            <div>
                                <p className='tit'>
                                    FS Germany
                                </p>
                                <p className='dat'>
                                    Objectif 2024
                                    <br></br>
                                    <i>Hockenheim, Allemagne</i>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a href="/" class="taglink" name="equipe"> </a>
            <span></span>
            <div className='div-info groupe'>
                <span>Notre equipe</span>
            </div>
            <a href="/" class="taglink" name="partenaires"> </a>
            <span></span>
            <div className='div-info'>
                <span>Partenaires</span>
                <br></br>
                <h1>Nos partenaires</h1>
                <div class="slider">
                    <div class="slide-track">
                        <div class="slide">
                            <img src={ansys} height="100" width="270" alt="ansys" />
                        </div>
                        <div class="slide">
                            <img src={capgemini} height="100" width="270" alt="capgemini" />
                        </div>
                        <div class="slide">
                            <img src={mathworks} height="100" width="270" alt="mathworks" />
                        </div>
                        <div class="slide">
                            <img src={dassault} height="100" width="280" alt="dassault" />
                        </div>
                        <div class="slide">
                            <img src={danielson} height="100" width="270" alt="danielson" />
                        </div>
                        <div class="slide">
                            <img src={xometry} height="100" width="280" alt="xometry" />
                        </div>
                        <div class="slide">
                            <img src={easy_composite} height="100" width="270" alt="easy_composite" />
                        </div>
                        <div class="slide">
                            <img src={sculpteo} height="100" width="280" alt="sculpteo" />
                        </div>
                        <div class="slide">
                            <img src={hexcel} height="100" width="280" alt="hexcel" />
                        </div>
                        <div class="slide">
                            <img src={coq_sportif} height="100" width="260" alt="coq_sportif" />
                        </div>
                        <div class="slide">
                            <img src={sicomin} height="100" width="300" alt="sicomin" />
                        </div>
                        <div class="slide">
                            <img src={enerlis} height="100" width="270" alt="enerlis" />
                        </div>
                        <div class="slide">
                            <img src={simulia} height="100" width="270" alt="simulia" />
                        </div>
                        <div class="slide">
                            <img src={dvic} height="100" width="260" alt="dvic" />
                        </div>
                        <div class="slide">
                            <img src={skf} height="100" width="250" alt="skf" />
                        </div>
                        <div class="slide">
                            <img src={rs} height="100" width="280" alt="rs" />
                        </div>
                    </div>
                </div>
            </div>
            <Social />
        </div>
    )
}

export default Home;