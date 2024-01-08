import { Link } from 'react-router-dom';
import '../../App.css';
import './PrototypeDefficience.css';
import { useEffect, useState } from 'react';
import Loading from '../../components/loading/Loading';

function PrototypeDefficience({ base, json }) {

    document.title = json.titre_prototype_d_efficience;

    const [equipes, setEquipes] = useState([]);
    const [competes, setCompetes] = useState([]);

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
            base("competitions")
                .select({
                    sort: [{ field: "titre", direction: "asc" }],
                    view: "Grid view",
                })
                .eachPage(
                    function page(records, fetchNextPage) {
                        records.forEach(function (record) {
                            if (record.get("projet").includes("pe")) {
                                var element = {
                                    titre: record.get("titre"),
                                    classe: record.get("classe"),
                                    contenu: json.langue === "fr" ? record.get("contenu") : record.get("contenu_en"),
                                };
                                setCompetes((competes) => [...competes, element]);
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
        }
    }, []);

    return (
        <div className="">
            <div className='bg pe'></div>
            <div className='div-info'>
                <span className='bigspan'>{json.prototype_d_efficience}</span>
                <br></br>
                <h1>{json.introduction}</h1>
                <p data-aos="fade-up">
                    {json.prototype_d_efficience_paragraph1}
                    <br></br>
                    {json.prototype_d_efficience_paragraph2}
                    <br></br>
                    {json.prototype_d_efficience_paragraph3}
                    <br></br>
                    {json.prototype_d_efficience_paragraph4}
                    <br></br>
                    {json.prototype_d_efficience_paragraph5}
                </p>
            </div>
            <div className='div-info'>
                <span>{json.equipes}</span>
                <br></br>
                <h1>{json.presentation_equipes_pe}</h1>
                <div className='equipes'>
                    {
                        (equipes && equipes.length > 0) ?
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
                        :
                        <Loading />
                    }
                </div>
            </div>
            <div className='div-info'>
                <span>{json.les_competitions}</span>
                <br></br>
                <h1>{json.presentation_competitions}</h1>
                <div className='equipes'>
                    {
                        competes ?
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
                        :
                        <Loading />
                    }
                </div>
            </div>
        </div>
    )
}

export default PrototypeDefficience;