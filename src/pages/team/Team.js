import ok from '../../images/ok.png';
import '../../App.css';
import './Team.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Team({ base }) {

    const [myName, setMyName] = useState("");
    const [me, setMe] = useState({
        Name: "",
        Image: "",
        Description: "",
        Date: "",
        Linkedin: ""
    })
    const { name } = useParams();

    useEffect(() => {
        setMyName(name);
    }, [name]);

    async function getName() {
        
        var lk = myName;

        const records = await base('Team')
            .select({
                filterByFormula: `SEARCH("${lk}",{Url} & "")`,
            })
            .all();

        document.title = records[0].fields.Name + " - Vinci Eco Drive";

        setMe({
            Name: records[0].fields.Name,
            Image: records[0].fields.Image,
            Description: records[0].fields.Description,
            Date: records[0].fields.Date,
            Linkedin: records[0].fields.LinkedIn
        })
    };

    async function copyToClipBoard() {
        await navigator.clipboard.writeText(window.location);
        document.getElementById('ok').style.display = "block";
    }

    function disapear() {
        document.getElementById('ok').style.backgroundColor = "transparent";
        document.getElementById('ok').style.transform = "scale(0)";
        setTimeout(() => {
            document.getElementById('ok').style.display = "none";
        }, 400);
    }

    return (
        <div onLoad={getName}>
            <div className='div-info div-first'>
                <div id='ok' onClick={disapear}>
                    <div className='okk'>
                        <img src={ok} alt="copied"></img>
                        <br></br>
                        Le lien est copié, tu peux partager !
                    </div>
                </div>
                <span>Contact</span>
                <br></br>
                <h1>Page de membre</h1>
                <div className='carte'>
                    <div className='imgg'>
                        <img src={me.Image} alt={me.Name}></img>
                    </div>
                    <h1>{me.Name}</h1>
                    <p className='mydate'>Membre VED depuis {me.Date}</p>
                    <p className='mydescription'>{me.Description}</p>
                    <div className='social'>
                        <button className='social-btn linkedin' onClick={() => window.open(me.Linkedin)}>LinkedIn</button>
                        <br></br>
                        <button className='social-btn share' onClick={() => copyToClipBoard()}>Share</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team;