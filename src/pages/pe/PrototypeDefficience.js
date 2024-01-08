import { Link } from 'react-router-dom';
import '../../App.css';
import './PrototypeDefficience.css';
import { useEffect, useState } from 'react';

function PrototypeDefficience({ base, json }) {

    document.title = json.titre_prototype_d_efficience;

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
                            if (record.get("projet").includes("pe")) {
                                // Check if the record is already in the array
                                if (equipes.find((element) => element.titre === record.get("titre"))) {
                                    console.log("Element already in array");
                                }
                                else {
                                    var element = {
                                        titre: json.langue === "fr" ? record.get("titre") : record.get("titre_en"),
                                        classe: record.get("classe"),
                                        url: record.get("url"),
                                        contenu: json.langue === "fr" ? record.get("contenu") : record.get("contenu_en"),
                                    };
                                    setEquipes((equipes) => [...equipes, element]);
                                }
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

    const competes = [
        { titre: "Shell Eco Marathon", classe: "shell", contenu: "Le Shell Eco-Marathon est une compétition inter-universitaire rassemblant plus de 4000 étudiants et des spectateurs venant de toute l'Europe. Elle aura lieue cet été et nous sommes heureux de pouvoir y participer avec notre nouveau prototype : NOVA !" },
        { titre: "Albi Eco Race", classe: "albi", contenu: "L'Albi Eco Race est une compétition automobile nationale inter-universitaire regroupant des élèves de tous les horizons, allant des lycéens aux étudiants en école d'ingénieurs. Nous avons pour objectif améliorer notre record de tours parcourus, qui est de 3731km/L !" },
        { titre: "Challenge Eco Green", classe: "eco-green", contenu: "Ce challenge s'inspire du Shell Eco-Marathon et regroupe des équipes étudiantes françaises mais aussi européennes. L'objectif est de parcourir 20km avec le minimum d'énergie, pour en déduire ensuite la distance avec l'équivalent d'un litre d'essence, notre record est de 3731km/L." },
    ];



    return (
        <div className="">
            <div className='bg pe'></div>
            <div className='div-info'>
                <span className='bigspan'>{json.prototype_d_efficience}</span>
                <br></br>
                <h1>{json.introduction}</h1>
                <p data-aos="fade-up">
                    Le <strong>prototype d'efficience</strong> est un projet de longue date de l'association VED, qui vise à créer un véhicule capable de <strong>parcourir la plus grande distance</strong> possible <strong>avec le moins d'énergie</strong> possible. Depuis 2013, les membres de l'association travaillent sur tous les aspects de la <strong>conception du véhicule</strong>, utilisant la <strong>modélisation en CAO</strong> pour développer des <strong>plans de conception</strong> précis et réaliser la <strong>structure en carbone</strong> pour donner au véhicule la <strong>force</strong> et la <strong>légèreté</strong> nécessaires.
                    <br></br>
                    Le prototype <strong>E-PULV 2.0</strong> a été un exemple de <strong>réussite</strong> pour le projet efficience, parcourant <strong>3731 km avec</strong> l'équivalent d'<strong>un litre d'essence</strong> lors du <strong>Shell Eco Marathon</strong>. Cet exploit témoigne de l'engagement de VED en faveur de l'<strong>efficience énergétique</strong> et de la recherche de solutions de <strong>transport durables</strong>.
                    <br></br>
                    Le projet efficience est un exemple de <strong>dévouement</strong> et de <strong>détermination</strong> de la part de l'association et de ses membres. En travaillant sur tous les aspects de la <strong>conception du véhicule</strong>, de la modélisation en CAO à la réalisation de la structure en carbone, nous avons créé un véhicule qui a prouvé sa capacité à parcourir de grandes distances avec très peu d'énergie. Ce projet montre que même de petites associations peuvent avoir un <strong>impact significatif</strong> dans le domaine de l'efficience énergétique et des transports durables.
                    <br></br>
                    Le développement de <strong>projets complexes</strong> comme celui du prototype d'efficience peut comporter de nombreuses difficultés et défis à surmonter. Les <strong>pièces en carbone</strong> et les éléments de direction ont été particulièrement problématiques lors des projets précédents. Cependant, en dépit de ces difficultés, l'association a réussi à poursuivre ses efforts et à créer des <strong>prototypes efficaces</strong> et efficients qui ont suscité une grande fierté chez ses membres.
                    <br></br>
                    La réalisation de ces projets nécessite souvent un travail acharné pour <strong>surmonter les obstacles</strong> et <strong>atteindre les objectifs</strong>. L'association a fait preuve de <strong>détermination</strong> et de <strong>dévouement</strong> pour réussir à créer des prototypes <strong>efficaces</strong> et <strong>efficients</strong>, malgré les difficultés rencontrées. Cela témoigne de la <strong>passion</strong> et de la <strong>détermination</strong> de ses membres pour atteindre leurs objectifs et contribuer à l'efficience énergétique et aux transports durables.
                </p>
            </div>
            <div className='div-info'>
                <span>{json.equipes}</span>
                <br></br>
                <h1>{json.presentation_equipes_pe}</h1>
                <div className='equipes'>
                    {
                        (equipes && equipes.length > 0) &&
                        equipes.map((equipe) => (
                            <Link to={"/equipe/" + equipe.url} className='link'>
                                <div className='equipe'>
                                    <div className={'equipe-img ' + equipe.classe}></div>
                                    <div className='equipe-ctn'>
                                        <div className='equipe-title border-left-red'>
                                            {json.equipe} {equipe.titre}
                                        </div>
                                        {equipe.contenu}
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
            <div className='div-info'>
                <span>{json.les_competitions}</span>
                <br></br>
                <h1>{json.presentation_competitions}</h1>
                <div className='equipes'>
                    {
                        competes &&
                        competes.map((compet) => (
                            <div className='equipe'>
                                <div className={'equipe-img ' + compet.classe}></div>
                                <div className='equipe-ctn'>
                                    <div className='equipe-title'>
                                        {compet.titre}
                                    </div>
                                    {compet.contenu}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default PrototypeDefficience;