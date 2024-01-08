import "./Actualites.css";
import "../home/Home.css";
import "../../App.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/loading/Loading";

function Actualites({ base }) {

    document.title = "Actualités - Vinci Eco Drive";

    const navigate = useNavigate();

    const [allArticles, setAllArticles] = useState([]);

    var loaded = false;

    function getArticles() {

        if (loaded === false) {

            loaded = true; // To avoid loading the articles twice

            let div = document.getElementById("articles");
            let tags = div.getElementsByTagName("div");

            if (tags.length === 0) {

                var suite = "";

                if (localStorage.getItem("ved-language") !== null) {
                    if (localStorage.getItem("ved-language") === "english") {
                        suite = "_en";
                    }
                }

                base('Articles' + suite).select({
                    maxRecords: 12,
                    view: "Gallery"
                }).eachPage(function page(records, fetchNextPage) {
                    // This function (`page`) will get called for each page of records.

                    records.forEach(async function (record) {
                        setAllArticles(allArticles => [...allArticles, record]);
                        // var url = await record.get('Image')[0].url;
                        // document.getElementById('articles').innerHTML += "<div class='article' data-aos='zoom-in' onclick='window.location.href=`" + record.get('Url') + "`'>" +
                        //     "<h1 style='background-image: url(" + url + "'>" + record.get('Titre') + "</h1>" +
                        //     "<div class='article-ctn'>" +
                        //     "<a class='a-tags'>" + record.get('Tags') + "</a>" +
                        //     "<p>" + record.get('Contenu').slice(0, 61) + "...</p>" +
                        //     "</div>" +
                        //     "</div>";
                    });

                    fetchNextPage();

                }, function done(err) {
                    if (err) { console.error(err); return; }
                });

            }

        }
    };

    function handleClick(url) {
        navigate(url);
    }

    useEffect(() => {
        getArticles();
        // eslint-disable-next-line
    }, [])

    return (
        <div className="Actualite">
            <div className='bg relative'>
                <h1 className='bg-title'>Articles</h1>
            </div>
            <div className='div-info bg-white' id="articles">
                {
                    (allArticles && allArticles.length > 0) ?
                    allArticles.map((article, index) => (
                        <div className='article' data-aos='zoom-in' key={index} onClick={() => handleClick(article.get('Url'))}>
                            <h1 style={{ backgroundImage: `url(${article.get('Image')[0].url})` }}>{article.get('Titre')}</h1>
                            <div className='article-ctn'>
                                {/* eslint-disable-next-line */}
                                <a className='a-tags'>{article.get('Tags')}</a>
                                <p>{article.get('Contenu').slice(0, 61)}...</p>
                            </div>
                        </div>
                    ))
                    :
                    <Loading />
                }
            </div>
        </div >
    )
}

export default Actualites;