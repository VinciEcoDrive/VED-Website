import "./Social.css";

function Social({ json }) {

    return (
        <div id="Social">
            <div className="social-content">
                <h1>{json.suis_nous_sur_les_réseaux_sociaux}</h1>
                <div className="social-btns" data-aos="zoom-in">
                    <a href="https://www.instagram.com/vinciecodrive/" target="_blank" rel="noreferrer"><i class="fa fa-instagram"></i></a>
                    <a href="https://www.facebook.com/vinciecodrive/" target="_blank" rel="noreferrer"><i class="fa fa-facebook"></i></a>
                    <a href="https://twitter.com/vinciecodrive" target="_blank" rel="noreferrer"><i class="fa fa-twitter"></i></a>
                    <a href="https://www.linkedin.com/company/vinci-eco-drive/" target="_blank" rel="noreferrer"><i class="fa fa-linkedin"></i></a>
                    <a href="https://www.youtube.com/channel/UCP3mySrdiInG_bHe5uk_Xog" target="_blank" rel="noreferrer"><i class="fa fa-youtube-play"></i></a>
                </div>
            </div>
        </div>
    );
}

export default Social;