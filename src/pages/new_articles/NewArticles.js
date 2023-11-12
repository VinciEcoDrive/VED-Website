import { useState } from 'react';
import '../../App.css';
import './NewArticles.css';
import sha256 from 'crypto-js/sha256';
import * as filestack from 'filestack-js';

function NewArticles({ base }) {

    document.title = "Admin - Vinci Eco Drive";

    const [imageUrl, setImageUrl] = useState();

    setTimeout(() => {
        if (sessionStorage.getItem('bsfur') !== sha256("dupeR").toString()) {
            window.location.href = "../admin";
        }
    }, 10);

    function createArticle() {
        var titre = document.getElementById("titre").value;
        var date = document.getElementById("date").value;
        var tag = document.getElementById("tag").value;
        var contenu = document.getElementById("contenu").value;
        //var image = document.getElementById("image").files;
        var url = document.getElementById("url").value;

        if (titre !== "" && date !== "" && tag !== "" && contenu !== "" && url !== "") {

            base('Articles').create([
                {
                    "fields": {
                        "Titre": titre,
                        "Date": date,
                        "Tags": [tag],
                        "Contenu": contenu,
                        "Image": imageUrl,
                        "Url": url
                    }
                }
            ], function (err) {
                if (err) {
                    console.error(err);
                    return;
                }
            });

            document.getElementById("message1").textContent = "Article créé ici : https://ved.lesminions.com/" + url;

            document.getElementById("titre").value = "";
            document.getElementById("date").value = "";
            document.getElementById("tag").value = "";
            document.getElementById("contenu").value = "";
            document.getElementById("image").value = "";
            document.getElementById("url").value = "";

            window.scrollTo(0, 0);

            document.getElementById("btn").innerHTML = "<p><button class='btn-admin' onclick='window.location.reload(1)'>Nouvel Article</button></p>"

        }

    }

    function uploadImage() {
        const client = filestack.init("AAFaah5xaQdS2Ih3jdJyIz");
        const options = {
            onUploadDone: (data) => {
                var file = data.filesUploaded[0]
                console.log(file);
                setImageUrl(file);
            }
        };
        client.picker(options).open();
    }


    return (
        <div className="App">
            <div className='div-aaa bigpad'>
                <p id="btn">
                    <button className='btn-admin grey' onClick={() => window.location.href = "../connected"}>
                        Revenir en arrière
                    </button>
                </p>
                <p className='title-admin' id="message1">
                    Nouvel Article
                </p>
                <p className='align-left'>
                    Tous les champs marqués de l'étoile (*) sont obligatoires
                </p>
                <p>
                    <input id="titre"></input>
                    <label> * Titre</label>
                </p>
                <p>
                    <input id="date" type="date"></input>
                    <label> * Date</label>
                </p>
                <p>
                    <select id="tag" multiple>
                        <option defaultValue disabled className='light'>Sélectionner une catégorie</option>
                        <option>formula student</option>
                        <option>prototype d'efficience</option>
                        <option>competition</option>
                        <option>evenement</option>
                    </select>
                    <label> * Tag</label>
                </p>
                <p>
                    <textarea spellCheck="false" id="contenu"></textarea>
                    <label> * Contenu</label>
                </p>
                <p>
                    <button id="image" onClick={() => uploadImage()}>Browse</button>
                    <label> * Image</label>
                </p>
                <p>
                    <input id="url"></input>
                    <label> * Futur url de l'article</label>
                </p>
                <p id="btn">
                    <button className='btn-admin' onClick={() => createArticle()}>Envoyer</button>
                </p>
            </div>
        </div>
    )
}

export default NewArticles;