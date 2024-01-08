import '../../App.css';
import './Contact.css';

function Contact({ base, json }) {

    document.title = json.titre_contact;

    function sendMessage() {

        var prenom = document.getElementById("prenom").value;
        var nom = document.getElementById("nom").value;
        var email = document.getElementById("email").value;
        var telephone = document.getElementById("telephone").value;
        var message = document.getElementById("message").value;

        if (prenom === "" || nom === "" || email === "" || message === "") {
            alert(json.veuillez_remplir_tous_les_champs_obligatoires);
        }
        else {
            base('messages').create([
                {
                    "fields": {
                        "prenom": prenom,
                        "nom": nom,
                        "email": email,
                        "telephone": telephone,
                        "message": message
                    }
                }
            ], function (err) {
                if (err) {
                    console.error(err);
                    return;
                }
                else {
                    document.getElementById("prenom").value = "";
                    document.getElementById("nom").value = "";
                    document.getElementById("email").value = "";
                    document.getElementById("telephone").value = "";
                    document.getElementById("message").value = "";

                    document.getElementById("message-form").style.display = "block";

                    setTimeout(() => {

                        document.getElementById("message-form").style.display = "none";

                    }, 5000);

                    window.scrollTo(0, 0);

                }
            });
        }
    }

    return (
        <div>
            <div className='div-info no-div'></div>
            <div className='div-info div-first'>
                <span>{json.contact}</span>
                <br></br>
                <h1>{json.formulaire_de_contact}</h1>
                <div className='contact'>
                    <div className='pleft'>
                        <h1>{json.contactez_nous}</h1>
                        <p>
                            {json.vous_avez_une_question_une_demande}
                            <br></br>
                            {json.n_hesitez_pas_a_remplir_ce_formulaire} {json.nous_vous_repondrons_dans_les_plus_brefs_delais}
                        </p>
                        <div className='form'>
                            <div className='form-element-45'>
                                <label className='label'>{json.prenom}*</label>
                                <input type="text" placeholder='Entrez votre prénom' id="prenom" pattern="[A-Za-z\s-]+"></input>
                            </div>
                            <div className='form-element-45'>
                                <label className='label'>{json.nom}*</label>
                                <input type="text" placeholder='Entrez votre nom' id="nom" pattern="[A-Za-z\s-]+"></input>
                            </div>
                            <div className='form-element-100'>
                                <label className='label'>{json.email}*</label>
                                <input type="email" placeholder='email@email.com' id="email" pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"></input>
                            </div>
                            <div className='form-element-100'>
                                <label className='label'>{json.telephone}</label>
                                <input type="tel" placeholder='+33 6 00 00 00 00' id="telephone" pattern="^\d{10,15}$"></input>
                            </div>
                            <div className='form-element-100'>
                                <label className='label'>{json.message}*</label>
                                <textarea placeholder='Votre message' spellCheck="false" id="message"></textarea>
                            </div>
                            <button onClick={sendMessage}>{json.envoyer_votre_message}</button>
                        </div>
                    </div>
                    <div className='pright'></div>
                    <div id='message-form'>{json.message_envoye_avec_succes}</div>
                </div>
            </div>
        </div>
    )
}

export default Contact;