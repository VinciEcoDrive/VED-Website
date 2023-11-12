import "./LienActu.css";
import "../../App.css";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from "react-markdown";

function LienActu({ base }) {

    window.scrollTo(0, 0);

    const [article, setArticle] = useState({
        Titre: "",
        Image: "",
        Contenu: "",
        Date: "",
        Tags: ""
    })
    const { link } = useParams();

    useEffect(() => {
        getArticle();
        // eslint-disable-next-line
    }, [])

    async function getArticle() {
        var suite = "";

        if (localStorage.getItem("ved-language") !== null) {
            if (localStorage.getItem("ved-language") === "english") {
                suite = "_en";
            }
        }

        const records = await base('Articles' + suite)
            .select({
                filterByFormula: `SEARCH("${link}",{Url} & "")`,
            })
            .all();

        document.title = records[0].fields.Titre + " - Vinci Eco Drive";

        setArticle({
            Titre: records[0].fields.Titre,
            Image: records[0].fields.Image[0].url,
            Contenu: records[0].fields.Contenu,
            Date: records[0].fields.Date,
            Tags: records[0].fields.Tags
        })
    };

    return (
        <div className="Actualite" onLoad={getArticle}>
            <div className='div-img'>
                <img className='actu-img' alt={article.Titre} src={article.Image}></img>
            </div>
            <div className='div-info shadow'>
                <span>{article.Tags}</span>
                <br></br>
                <h1>{article.Titre}</h1>
                <p data-aos='fade-up'>
                    <ReactMarkdown children={article.Contenu} />
                </p>
            </div>
        </div >
    )
}

export default LienActu;