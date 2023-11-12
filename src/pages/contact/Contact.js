import '../../App.css';
import './Contact.css';

function Contact({ base }) {

    document.title = "Contact - Vinci Eco Drive";

    function sendMessage() {

        var prenom = document.getElementById("prenom").value;
        var nom = document.getElementById("nom").value;
        var email = document.getElementById("email").value;
        var telephone = document.getElementById("telephone").value;
        var message = document.getElementById("message").value;

        if (prenom === "" || nom === "" || email === "" || message === "") {
            alert("Veuillez remplir tous les champs obligatoires");
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
                <span>Contact</span>
                <br></br>
                <h1>Formulaire de contact</h1>
                <div className='contact'>
                    <div className='pleft'>
                        <h1>Contactez nous</h1>
                        <p>
                            Vous avez une question ? Une demande ?
                            <br></br>
                            N'hésitez pas à remplir ce formulaire ! Nous vous répondrons dans les plus brefs délais.
                        </p>
                        <div className='form'>
                            <div className='form-element-45'>
                                <label className='label'>Prénom*</label>
                                <input type="text" placeholder='Entrez votre prénom' id="prenom" pattern="[A-Za-z\s-]+"></input>
                            </div>
                            <div className='form-element-45'>
                                <label className='label'>Nom*</label>
                                <input type="text" placeholder='Entrez votre nom' id="nom" pattern="[A-Za-z\s-]+"></input>
                            </div>
                            <div className='form-element-100'>
                                <label className='label'>Email*</label>
                                <input type="email" placeholder='email@email.com' id="email" pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"></input>
                            </div>
                            <div className='form-element-100'>
                                <label className='label'>Téléphone</label>
                                <input type="tel" placeholder='+33 6 00 00 00 00' id="telephone" pattern="^\d{10,15}$"></input>
                            </div>
                            <div className='form-element-100'>
                                <label className='label'>Message*</label>
                                <textarea placeholder='Votre message' spellCheck="false" id="message"></textarea>
                            </div>
                            <button onClick={sendMessage}>ENVOYER VOTRE MESSAGE</button>
                        </div>
                    </div>
                    <div className='pright'></div>
                    <div id='message-form'>Message envoyé avec succès !</div>
                </div>
            </div>
        </div>
    )
}

export default Contact;