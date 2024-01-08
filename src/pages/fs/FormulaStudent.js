import { Link } from 'react-router-dom';
import '../../App.css';
import './FormulaStudent.css';
import { useEffect, useState } from 'react';

function FormulaStudent({ base, json }) {

    document.title = json.titre_formula_student;

    const [equipes, setEquipes] = useState([]);

    var loaded = false;

    useEffect(() => {
        if (loaded === false) {
            loaded = true;
            base("equipes")
                .select({
                    view: "Grid view",
                })
                .eachPage(
                    function page(records, fetchNextPage) {
                        records.forEach(function (record) {
                            if (record.get("projet").includes("fs")) {
                                var element = {
                                    titre: json.langue === "fr" ? record.get("titre") : record.get("titre_en"),
                                    classe: record.get("classe"),
                                    url: record.get("url"),
                                    contenu: json.langue === "fr" ? record.get("contenu") : record.get("contenu_en"),
                                };
                                setEquipes((equipes) => [...equipes, element]);
                            }
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
            console.log(equipes);
        }
    }, []);
    return (
        <div className="">
            <div className='bg fs'></div>
            <div className='div-info'>
                <span>{json.formula_student}</span>
                <br></br>
                <h1>{json.introduction}</h1>
                <p data-aos="fade-up">
                    La <strong>Formula Student</strong> est un concours international d'ingénierie pour les étudiants qui se tient chaque année dans le <strong>monde entier</strong>. Le but de ce concours est de permettre aux étudiants en ingénierie de mettre en pratique les connaissances qu'ils ont acquises au cours de leurs études et de les défier dans le <strong>développement d'un prototype de voiture de course</strong>. Les participants doivent <strong>concevoir</strong>, <strong>construire</strong> et <strong>tester</strong> un véhicule qui sera évalué lors de compétitions organisées sur des circuits de course.
                    <br></br>
                    Le concours est ouvert à tous les étudiants en ingénierie, qu'ils soient en école d'ingénieur, en université ou dans un autre établissement d'enseignement supérieur. Les équipes sont formées par les étudiants eux-mêmes et peuvent être constituées de plusieurs membres. Chaque année, des <strong>milliers d'étudiants</strong> participent à la Formula Student, ce qui en fait l'un des concours d'ingénierie les plus importants au monde.
                    <br></br>
                    L'objectif de la Formula Student est de fournir aux étudiants une plateforme pour démontrer leurs <strong>compétences en ingénierie, en travail d'équipe et en leadership</strong>. Les évaluations sont basées sur plusieurs critères, notamment la <strong>performance</strong> du véhicule sur le circuit, sa <strong>conception technique</strong>, sa <strong>fiabilité</strong>, sa <strong>sécurité</strong>, son <strong>coût</strong> et sa <strong>présentation commerciale</strong>. Cela permet aux étudiants de développer une gamme complète de compétences qui seront utiles pour leur carrière future dans l'ingénierie.
                    <br></br>
                    Les compétitions de la Formula Student se déroulent sur des <strong>circuits de course</strong> et incluent des événements tels que des <strong>tests de performance</strong>, des <strong>présentations de design</strong>, des <strong>évaluations de coûts</strong> et des <strong>événements de marketing</strong>. Les équipes sont évaluées par des juges expérimentés dans leur domaine, qui examinent leurs véhicules et les performances en course. Les gagnants sont récompensés par des prix en argent et en nature, ainsi que par une <strong>reconnaissance internationale</strong> pour leur performance.
                    <br></br>
                    En plus des compétitions, la Formula Student offre également aux étudiants l'occasion de participer à des <strong>ateliers</strong>, à des <strong>séminaires</strong> et à des <strong>conférences</strong>. Ils peuvent également rencontrer des représentants d'entreprises et des employeurs potentiels, ce qui peut les aider à trouver un emploi dans l'<strong>industrie de l'ingénierie</strong>. En outre, la participation à la Formula Student peut également aider les étudiants à développer leur <strong>réseau professionnel</strong> et à établir des relations avec des collègues dans le monde entier.
                    <br></br>
                    En conclusion, la Formula Student est un concours excellent pour les étudiants en ingénierie qui cherchent à développer leurs compétences et à <strong>montrer leur potentiel</strong>. C'est une expérience unique qui permet aux participants de travailler en équipe, de faire preuve de leadership et de créativité, tout en développant des compétences pratiques en ingénierie. Les compétitions sont très compétitives et les gagnants peuvent se voir offrir des opportunités de carrière uniques dans l'industrie de l'ingénierie. La Formula Student est donc une excellente opportunité pour les étudiants qui cherchent à élargir leur horizon et à développer leur potentiel en tant qu'ingénieur.
                </p>
            </div>
            <div className='div-info'>
                <span>{json.equipes}</span>
                <br></br>
                <h1>{json.presentation_quipes_fs}</h1>
                <div className='equipes'>
                    {
                        (equipes && equipes.length > 0) &&
                        equipes.map((equipe) => (
                            <Link to={"/equipe/" + equipe.url}>
                                <div className='equipe'>
                                    <div className={'equipe-img ' + equipe.classe}></div>
                                    <div className='equipe-ctn'>
                                        <div className='equipe-title border-left-red'>
                                            {json.team} {equipe.titre}
                                        </div>
                                        {equipe.contenu}
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default FormulaStudent;