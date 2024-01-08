import { Link } from 'react-router-dom';
import '../../App.css';
import './FormulaStudent.css';
import { useEffect, useState } from 'react';
import Loading from '../../components/loading/Loading';

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
                    {json.formula_student_paragraph1}
                    <br></br>
                    {json.formula_student_paragraph2}
                    <br></br>
                    {json.formula_student_paragraph3}
                    <br></br>
                    {json.formula_student_paragraph4}
                    <br></br>
                    {json.formula_student_paragraph5}
                    <br></br>
                    {json.formula_student_paragraph6}
                </p>
            </div>
            <div className='div-info'>
                <span>{json.equipes}</span>
                <br></br>
                <h1>{json.presentation_quipes_fs}</h1>
                <div className='equipes'>
                    {
                        (equipes && equipes.length > 0) ?
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
                        :
                        <Loading />
                    }
                </div>
            </div>
        </div>
    )
}

export default FormulaStudent;