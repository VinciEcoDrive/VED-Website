import Social from "../../components/social/Social";
import capgemini from "../../images/partenaires/capgemini.png";
import mathworks from "../../images/partenaires/mathworks.png";
import ansys from "../../images/partenaires/ansys.png";
import coq_sportif from "../../images/partenaires/coq_sportif.png";
import dassault from "../../images/partenaires/dassault.png";
import dvic from "../../images/partenaires/dvic.png";
import enerlis from "../../images/partenaires/enerlis.png";
import hexcel from "../../images/partenaires/hexcel.png";
import sculpteo from "../../images/partenaires/sculpteo.png";
import sicomin from "../../images/partenaires/sicomin.png";
import simulia from "../../images/partenaires/simulia.png";
import skf from "../../images/partenaires/skf.png";
import rs from "../../images/partenaires/rs.png";
import xometry from "../../images/partenaires/xometry.png";
import danielson from "../../images/partenaires/danielson.png";
import easy_composite from "../../images/partenaires/easy_composite.png";
import pe from "../../images/PE_white.png";
import fs from "../../images/FS_white.png";
import { useEffect, useState } from "react";
import "./Home.css";
import "../../App.css";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../../components/loading/Loading";

function Home({ base, json }) {
  document.title = json.titre_accueil;

  const navigate = useNavigate();

  const [allArticles, setAllArticles] = useState([]);

  var loaded = false;

  function getArticles() {
    document.getElementById("articles").innerHTML = "";

    if (loaded === false) {
      loaded = true; // To avoid loading the articles twice
      var suite = "";

      if (localStorage.getItem("ved-language") !== null) {
        if (localStorage.getItem("ved-language") === "english") {
          suite = "_en";
        }
      }

      base("Articles" + suite)
        .select({
          // Selecting the first 3 records in Grid view:
          maxRecords: 3,
          view: "Grid view",
        })
        .eachPage(
          function page(records, fetchNextPage) {
            records.forEach(async function (record) {
              setAllArticles((allArticles) => [...allArticles, record]);
            });

            fetchNextPage();
          },
          function done(err) {
            if (err) {
              console.error(err);
              return;
            }
          }
        );
    }
  }

  function handleClick(url) {
    navigate(url);
  }

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <div className="Home">
      <div className="bg">
        <div className="ctn">
          <h1>{json.slogan}</h1>
          <Link to="/actualites">
            <button className="btn-special">{json.nos_actualites}</button>
          </Link>
        </div>
      </div>
      <a href="/" class="taglink" name="introduction">
        {" "}
      </a>
      <span></span>
      <div className="div-info">
        <span>INTRODUCTION</span>
        <br></br>
        <h1>{json.qui_sommes_nous}</h1>
        <p data-aos="fade-up">{json.presentation_ved}</p>
      </div>
      <a href="/" class="taglink" name="projets">
        {" "}
      </a>
      <span></span>
      <div className="div-info">
        <span>{json.projets}</span>
        <br></br>
        <h1>{json.nos_projets}</h1>
        <div className="cards">
          <div className="card-l">
            <img src={pe} alt="logo-pe"></img>
            <h2>{json.prototype_d_efficience}</h2>
            <p>
              {json.presentation}
              <br></br>
              {json.presentation_prototype_d_efficience}
            </p>
            <p>
              {json.nos_objectifs}
              <br></br>
              {json.objectifs_prototype_d_efficience}
            </p>
            <Link to="/presentation-prototype_defficience">
              <button>{json.en_savoir_plus}</button>
            </Link>
          </div>
          <div className="card-r">
            <img src={fs} alt="logo-fs"></img>
            <h2>{json.formula_student}</h2>
            <p>
              {json.presentation}
              <br></br>
              {json.presentation_formula_student}
            </p>
            <p>
              {json.nos_objectifs}
              <br></br>
              {json.objectifs_formula_student}
            </p>
            <Link to="/presentation-formula-student">
              <button>{json.en_savoir_plus}</button>
            </Link>
          </div>
        </div>
      </div>
      <a href="/" class="taglink" name="articles">
        {" "}
      </a>
      <span></span>
      <div className="div-info">
        <span>{json.articles}</span>
        <br></br>
        <h1>{json.nos_derniers_articles}</h1>
        <div className="cards" id="articles">
          {
            (allArticles && allArticles.length > 0) &&
            allArticles.map((article, index) => (
              <div
                className="article"
                data-aos="zoom-in"
                key={index}
                onClick={() => handleClick("/actualites/" + article.get("Url"))}
              >
                <h1
                  style={{
                    backgroundImage: `url(${article.get("Image")[0].url})`,
                  }}
                >
                  {article.get("Titre")}
                </h1>
                <div className="article-ctn">
                  {/* eslint-disable-next-line */}
                  <a className="a-tags">{article.get("Tags")}</a>
                  <p>{article.get("Contenu").slice(0, 61)}...</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <a href="/" class="taglink" name="competitions">
        {" "}
      </a>
      <span></span>
      <div className="div-info">
        <span>{json.competitions}</span>
        <br></br>
        <h1>{json.nos_competitions}</h1>
        <div className="compets">
          <div className="compet shell" data-aos="zoom-in">
            <div className="compet-txt">
              <div>
                <p className="tit">Shell Eco Marathon</p>
                <p className="dat">
                  {json.mai} 2023
                  <br></br>
                  <i>Nogaro, France</i>
                </p>
              </div>
            </div>
          </div>
          <div className="compet albi" data-aos="zoom-in">
            <div className="compet-txt">
              <div>
                <p className="tit">Albi Eco Race</p>
                <p className="dat">
                  {json.mai} 2023
                  <br></br>
                  <i>Albi, France</i>
                </p>
              </div>
            </div>
          </div>
          <div className="compet eco-green" data-aos="zoom-in">
            <div className="compet-txt">
              <div>
                <p className="tit">Challenge Eco Green</p>
                <p className="dat">
                  {json.mai} 2023
                  <br></br>
                  <i>Fay-de-Bretagne, France</i>
                </p>
              </div>
            </div>
          </div>
          <div className="compet fsg" data-aos="zoom-in">
            <div className="compet-txt">
              <div>
                <p className="tit">FS Germany</p>
                <p className="dat">
                  {json.objectif} 2024
                  <br></br>
                  <i>Hockenheim, Allemagne</i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a href="/" class="taglink" name="equipe">
        {" "}
      </a>
      <span></span>
      <div className="div-info groupe">
        <span>{json.notre_equipe}</span>
      </div>
      <a href="/" class="taglink" name="partenaires">
        {" "}
      </a>
      <span></span>
      <div className="div-info">
        <span>{json.partenaires}</span>
        <br></br>
        <h1>{json.nos_partenaires}</h1>
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
              <img
                src={easy_composite}
                height="100"
                width="270"
                alt="easy_composite"
              />
            </div>
            <div class="slide">
              <img src={sculpteo} height="100" width="280" alt="sculpteo" />
            </div>
            <div class="slide">
              <img src={hexcel} height="100" width="280" alt="hexcel" />
            </div>
            <div class="slide">
              <img
                src={coq_sportif}
                height="100"
                width="260"
                alt="coq_sportif"
              />
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
      <Social json={json} />
    </div>
  );
}

export default Home;
