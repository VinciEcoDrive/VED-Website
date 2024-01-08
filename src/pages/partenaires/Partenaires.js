import capgemini from '../../images/partenaires/capgemini.png';
import mathworks from '../../images/partenaires/mathworks.png';
import ansys from '../../images/partenaires/ansys.png';
import coq_sportif from '../../images/partenaires/coq_sportif.png';
import dassault from '../../images/partenaires/dassault.png';
import dvic from '../../images/partenaires/dvic.png';
import enerlis from '../../images/partenaires/enerlis.png';
import hexcel from '../../images/partenaires/hexcel.png';
import sculpteo from '../../images/partenaires/sculpteo.png';
import sicomin from '../../images/partenaires/sicomin.png';
import skf from '../../images/partenaires/skf.png';
import rs from '../../images/partenaires/rs.png';
import xometry from '../../images/partenaires/xometry.png';
import ferrari from '../../images/partenaires/charles_pozzi_ferrari.png';
import nexans from '../../images/partenaires/nexans.png';
import rrs from '../../images/partenaires/rrs.png';
import redbull from '../../images/partenaires/redbull.png';
import altair from '../../images/partenaires/altair.png';
import bender from '../../images/partenaires/bender.png';
import analog_devices from '../../images/partenaires/analog_devices.png';
import stieber from '../../images/partenaires/stieber.png';
import troisd_connexion from '../../images/partenaires/3d_connexion.png';
import optimumg from '../../images/partenaires/optimumg.png';
import danielson from '../../images/partenaires/danielson.png';
import easy_composite from '../../images/partenaires/easy_composite.png';
import tcs from '../../images/partenaires/tcs.png';
import rdi from '../../images/partenaires/rdi.png';
import grille from '../../images/grille-partenariats.png';
import './Partenaires.css';
import '../../App.css';

function Partenaires({ json }) {

    document.title = json.titre_partenaires;

    return (
        <div className="">
            <div className='bg partenaires'></div>
            <div className='div-info'>
                <span>{json.partenaires}</span>
                <br></br>
                <h1>{json.nos_partenaires}</h1>
                <p className='lineheight200'>
                    {json.partenaires_description}
                </p>
            </div>
            <div className='div-info'>
                <span>{json.officiel}</span>
                <br></br>
                <h1>{json.partenaire_officiel}</h1>
                <table>
                    <tr>
                        <th></th>
                        <th className='big-th'>
                            <img src={capgemini} alt='capgemini'></img>
                        </th>
                        <th></th>
                    </tr>
                </table>
            </div>
            <div className='div-info'>
                <span>{json.elite}</span>
                <br></br>
                <h1>{json.partenaire_elite}</h1>
                <table>
                    <tr>
                        <th>
                            <img src={dassault} alt='dassault'></img>
                        </th>
                        <th>
                            <img src={dvic} alt='dvic'></img>
                        </th>
                        <th className='small-th'>
                            <img src={tcs} alt='tcs'></img>
                        </th>
                    </tr>
                </table>
            </div>
            <div className='div-info'>
                <span>{json.premium}</span>
                <br></br>
                <h1>{json.partenaire_premium}</h1>
                <table>
                    <tr className='tr-mini'>
                        <th className='small small-th'>
                            <img src={ansys} alt='ansys'></img>
                        </th>
                        <th className='small'>
                            <img src={hexcel} alt='hexcel'></img>
                        </th>
                        <th className='small'>
                            <img src={sicomin} alt='sicomin'></img>
                        </th>
                    </tr>
                    <tr className='tr-mini'>
                        <th className='small small-th'>
                            <img src={rdi} alt='rdi'></img>
                        </th>
                        <th className='small'>
                            <img src={rs} alt='rs'></img>
                        </th>
                        <th className='small'>
                            <img src={easy_composite} alt='easy_composite'></img>
                        </th>
                    </tr>
                </table>
            </div>
            <div className='div-info'>
                <span>{json.classique}</span>
                <br></br>
                <h1>{json.partenaire_classique}</h1>
                <table>
                    <tr className='tr-mini'>
                        <th className='small small-th'>
                            <img src={xometry} alt='xometry'></img>
                        </th>
                        <th className='small'>
                            <img src={mathworks} alt='mathworks'></img>
                        </th>
                        <th className='small'>
                            <img src={danielson} alt='danielson'></img>
                        </th>
                    </tr>
                    <tr className='tr-mini'>
                        <th className='small small-th'>
                            <img src={sculpteo} alt='sculpteo'></img>
                        </th>
                        <th className='small small-th'>
                            <img src={skf} alt='skf'></img>
                        </th>
                    </tr>
                </table>
            </div>
            <div className='div-info'>
                <span>{json.confiance}</span>
                <br></br>
                <h1>{json.partenaire_confiance}</h1>
                <table>
                    <tr className='tr-mini'>
                        <th className='small small-th'>
                            <img src={nexans} alt='nexans'></img>
                        </th>
                        <th className='small'>
                            <img src={rrs} alt='rrs'></img>
                        </th>
                        <th className='small'>
                            <img src={ferrari} alt='charles_pozzi_ferrari'></img>
                        </th>
                    </tr>
                    <tr className='tr-mini'>
                        <th className='small small-th'>
                            <img src={coq_sportif} alt='coq_sportif'></img>
                        </th>
                        <th className='small'>
                            <img src={redbull} alt='redbull'></img>
                        </th>
                        <th className='small'>
                            <img src={altair} alt='altair'></img>
                        </th>
                    </tr>
                    <tr className='tr-mini'>
                        <th className='small small-th'>
                            <img src={bender} alt='bender'></img>
                        </th>
                        <th className='small'>
                            <img src={analog_devices} alt='analog_devices'></img>
                        </th>
                        <th className='small'>
                            <img src={stieber} alt='stieber'></img>
                        </th>
                    </tr>
                    <tr className='tr-mini'>
                        <th className='small small-th'>
                            <img src={troisd_connexion} alt='3d_connexion'></img>
                        </th>
                        <th className='small'>
                            <img src={enerlis} alt='enerlis'></img>
                        </th>
                        <th className='small'>
                            <img src={optimumg} alt='optimum_g'></img>
                        </th>
                    </tr>
                </table>
            </div>
            <div className='div-info'>
                <span>{json.soutenir}</span>
                <br></br>
                <h1>{json.pourquoi_nous_soutenir}</h1>
                <p className='lineheight200'>
                    {json.pourquoi_nous_soutenir_paragraph1}
                    <br></br>
                    {json.pourquoi_nous_soutenir_paragraph2}
                    <br></br>
                    {json.pourquoi_nous_soutenir_paragraph3}
                    <br></br>
                    {json.pourquoi_nous_soutenir_paragraph4}
                </p>
            </div>
            <div className='div-info'>
                <span>{json.soutenir}</span>
                <br></br>
                <h1>{json.comment_nous_soutenir}</h1>
                <p className='lineheight200'>
                    {json.comment_nous_soutenir_paragraph1}
                    <br></br>
                    {json.comment_nous_soutenir_paragraph2}
                    <br></br>
                    {json.comment_nous_soutenir_paragraph3}
                    <br></br>
                    {json.comment_nous_soutenir_paragraph4}
                </p>
            </div>
            <div className='div-info'>
                <span>{json.soutenir}</span>
                <br></br>
                <h1>{json.les_niveaux_de_partenariats}</h1>
                <div className='big-width'>
                    <p>
                        {json.les_niveaux_de_partenariats_paragraph1}
                        <br></br>
                        {json.les_niveaux_de_partenariats_paragraph2}
                    </p>
                    <p>
                        <img src={grille} alt="grille-partenariats"></img>
                    </p>
                </div>
            </div>
            <div className='div-info'>
                <span>{json.soutenir}</span>
                <br></br>
                <h1>{json.decouvrir_notre_dossier_partenaire}</h1>
                <div className='big-width'>
                    <button className='mybutton btn-black'>Dossier partenaires VED francais</button>
                    <br></br>
                    <button className='mybutton btn-red'>Sponsorship file VED english</button>
                </div>
            </div>
        </div>
    )
}

export default Partenaires;