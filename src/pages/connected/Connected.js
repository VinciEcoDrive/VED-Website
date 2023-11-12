import '../../App.css';
import "../../pages/admin/Admin.css";
import sha256 from 'crypto-js/sha256';

function Connected({ base }) {

    document.title = "Admin - Vinci Eco Drive";

    setTimeout(() => {
        if (sessionStorage.getItem('bsfur') !== sha256("dupeR").toString()) {
            window.location.href = "../admin";
        }
    }, 10);

    var user = sessionStorage.getItem("eltx");

    function createAdmin() {
        var pseudo1 = document.getElementById("pseudo1").value;
        var mdp1 = document.getElementById("mdp1").value;

        base('admins').create([
            {
                "fields": {
                    "pseudo": pseudo1,
                    "mdp": sha256(mdp1).toString()
                }
            }
        ], function (err) {
            if (err) {
                console.error(err);
                return;
            }
        });

        document.getElementById("message1").textContent = "Le compte a bien été créé !"

        document.getElementById("pseudo1").value = "";
        document.getElementById("mdp1").value = "";

        document.getElementById("btn1").innerHTML = ""
    }

    function disconnect() {
        sessionStorage.removeItem("eltx");
        sessionStorage.removeItem("bsfur");
        setTimeout(() => {
            window.location.href = "../admin";
        }, 400);
    }

    return (
        <div className="App grid admin">
            <div className='div-admin' id="inscription">
                <p className='title-admin' id="message1">
                    Inscrire un Administrateur
                </p>
                <p>
                    <input placeholder='monpseudo' id="pseudo1"></input>
                    <label>Pseudo</label>
                </p>
                <p>
                    <input placeholder='motdepasse' id="mdp1" type="password"></input>
                    <label>Mot de passe</label>
                </p>
                <p id="btn1">
                    <button className='btn-admin' onClick={() => createAdmin()}>Envoyer</button>
                </p>
            </div>
            <div className='div-admin'>
                <p className='title-admin'>
                    Connecté en tant que {user}
                </p>
                <p>
                    <button className='btn-admin' onClick={() => window.location.href = "../admin/new_articles"}>
                        Créer des articles
                    </button>
                </p>
                <p>
                    <button className='btn-admin red' onClick={disconnect}>
                        Déconnexion
                    </button>
                </p>
            </div>
        </div>
    )
}

export default Connected;