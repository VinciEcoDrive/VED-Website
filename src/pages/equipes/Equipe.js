import "./Equipe.css";
import "../../App.css";
import { useParams } from 'react-router-dom';
import ReactMarkdown from "react-markdown";
import pe_las from '../../images/las.jpg';
import fs_las from '../../images/fs_las.jpg';
import fs_aero from '../../images/fs_aero.jpg';
import fs_fab from '../../images/fs_fab.jpg';
import fab from '../../images/fab.jpg';
import se from '../../images/se.jpg';
import stig from '../../images/membres/stig.png';
import Heloise from '../../images/membres/Heloise.png';
import Enzo from '../../images/membres/Enzo.png';
import Loic from '../../images/membres/Loic.png';
import PaulGobbi from '../../images/membres/PaulGobbi.png';
import PaulGautier from '../../images/membres/PaulGautier.png';
import Thomas from '../../images/membres/Thomas.png';
import ThomasV from '../../images/membres/ThomasV.png';
import Alaric from '../../images/membres/Alaric.png';
import Maxime from '../../images/membres/Maxime.png';
import Sasha from '../../images/membres/Sasha.png';
import Mattheo from '../../images/membres/Mattheo.png';
import PaulGeraud from '../../images/membres/PaulGeraud.png';
import Romain from '../../images/membres/Romain.png';
import Clement from '../../images/membres/Clement.png';
import Ewan from '../../images/membres/Ewan.png';
import DuyAnh from '../../images/membres/DuyAnh.png';
import AntoineL from '../../images/membres/AntoineL.png';
import Laura from '../../images/membres/Laura.png';
import Bryan from '../../images/membres/Bryan.png';
import Myriam from '../../images/membres/Myriam.png';
import NathanI from '../../images/membres/NathanI.png';
import Valentine from '../../images/membres/Valentine.png';
import Julie from '../../images/membres/Julie.png';
import Alain from '../../images/membres/Alain.png';
import Alexandre from '../../images/membres/Alexandre.png';
import Augustin from '../../images/membres/Augustin.png';
import Edouard from '../../images/membres/Edouard.png';
import Rayan from '../../images/membres/Rayan.png';
import Suvaddhano from '../../images/membres/Suvaddhano.png';
import Charles from '../../images/membres/Charles.png';
import Quentin from '../../images/membres/Quentin.png';
import Hugo from '../../images/membres/Hugo.png';
import Olivier from '../../images/membres/Olivier.png';
import Jeremy from '../../images/membres/Jeremy.png';
import Nathan from '../../images/membres/Nathan.png';
import Arthur from '../../images/membres/Arthur.png';
import Antoine from '../../images/membres/Antoine.png';

function Equipe() {

    const { link } = useParams();

    var equipes = {};

    var all_members = [];

    switch (link) {
        case "pe-liaison-au-sol":
            equipes = {
                titre: "Prototype d'Efficience - Équipe Liaisons au sol",
                image: pe_las,
                presentation: "La liaison au sol (LAS) rassemble les pièces et systèmes qui permettent à un véhicule de se déplacer, se diriger et freiner. Elle compte en général la direction, le freinage, la transmission ainsi que la suspension du véhicule. Dans le cas du Prototype d'Efficience (PE), seule les 3 premières sont intégrées.\n\rLa liaison au sol est un élément crucial de la réussite du PE et elle doit répondre à un cahier des charges précis afin de valider les tests et contrôles techniques des compétitions. Le point le plus important est la nécessité d'avoir un poids faible et une grande résistance aux contraintes. Il faut donc minimiser le poids du prototype tout en conservant la résistance nécessaire pour garantir la stabilité et la sécurité du véhicule. Ainsi, l'utilisation d'aluminium pour les composants de la liaison au sol peut contribuer à la réduction du poids, car l'aluminium est un matériau léger et résistant. Cependant, il est important de considérer la résistance requise pour les différents composants pour garantir que le prototype puisse gérer les forces et les contraintes de la conduite. On effectue donc des tests numériques avec Ansys Workbench.\n\rEn ce qui concerne la technologie de freinage, elle peut également affecter la consommation d'énergie. Les freins à disque sont généralement plus efficaces pour le freinage que les freins à tambour, mais ils peuvent également consommer plus d'énergie en raison du poids du système requis pour freiner. Il est donc important de choisir une technologie de freinage qui offre un freinage efficace tout en réduisant le poids embarqué.",
                objectifs: "Cette année encore, l'équipe LAS a pour objectif de réaliser la direction, transmission et freinage en suivant un cahier des charges précis, imposé par le Shell Eco Marathon. Celui contient tous les paramètres à respecter afin de valider ce que l'on appelle le contrôle technique qui nous permet un accès à la piste et donc effectuer nos tours afin de réaliser une performance.\n\rPour la direction nous devons réaliser un système fiable et précis mais qui est le plus léger possible. De nombreuses solutions existent telle que la direction a biellettes à l'aide d'un triangle, ou d'une crémaillère, ou encore à câbles mais celle ci est plus rare. Nous avons les années passées réalisé ces directions, et cette année nous avons choisi de développer le triangle de direction et les biellettes pour la robustesse qu'elle apporte.\n\rUn angle de braquage de 8m minimum est imposé par la compétition, et l'équipe LAS doit effectuer les calculs pour valider cette contrainte.\n\rPour la transmission plusieurs possibilités sont possibles encore une fois comme l'utilisation de chaînes, de courroies ou bien un système d'engrenage. Le moteur n'est pas imposé mais doit pouvoir tourner à sa vitesse nominale afin de consommer l'énergie le plus efficacement, quelque soit le circuit. Il faut donc adapter le rapport de réduction à chaque circuit pour jouer sur le couple ou la vitesse maximale.\n\rPour le freinage, le partie cruciale est le test technique qui est la pente de 25° : le PE doit pouvoir se maintenir en position avec uniquement les freins avant et uniquement les freins arrières. Il faut donc un système fiable mais qui ne prend pas trop d'espace ni de poids dans le châssis. Nous avons choisi des étriers de freins à pistons et des disques de 160mm, et cette année nous compter valider une nouvelle fois le test technique.\n\rLe millésime 2023 est le 2nd prototype sur le châssis NOVA et nous compter améliorer les systèmes déjà existant (freins à disque) et innover sur la transmission et la direction. Pour cela nous pouvons compter sur une équipe compétente et déterminée.",
                membres: [
                    {
                        nom: "HAMEL Héloïse",
                        role: "Directeur technique",
                        image: Heloise
                    },
                    {
                        nom: "NAZZARENO Vincent",
                        role: "Chef de projet",
                        image: stig
                    },
                    {
                        nom: "HUYGHE Enzo",
                        role: "Membre",
                        image: Enzo
                    },
                    {
                        nom: "CHARIGNON Loïc",
                        role: "Membre",
                        image: Loic
                    },
                    {
                        nom: "ZIMMERMANN Matthieu",
                        role: "Membre",
                        image: stig
                    },
                    {
                        nom: "VANESSON Paul",
                        role: "Membre",
                        image: stig
                    },
                    {
                        nom: "GOBBI Paul",
                        role: "Membre",
                        image: PaulGobbi
                    },
                    {
                        nom: "GAUTIER Paul",
                        role: "Membre",
                        image: PaulGautier
                    },
                    {
                        nom: "LEROY Thomas",
                        role: "Membre",
                        image: Thomas
                    }
                ]
            };
            break;
        case "pe-fabrication":
            equipes = {
                titre: "Prototype d'Efficience - Équipe Fabrication",
                image: fab,
                presentation: "Dans cette équipe, nous nous occupons de la réalisation de tous les éléments extérieurs du prototype d'efficience. Pour cela, nous créons des moules positifs et négatifs en fonction des besoins, puis utilisons ces moules pour fabriquer des pièces en carbone qui formeront les châssis et le capot de notre prototype. Nous utilisons de la mousse pour donner la forme souhaitée aux pièces, que nous ponçons ou assemblons dans un châssis en bois pour réaliser des pièces de plus grande taille. Le prototype d'efficience est un véhicule qui a été conçu pour être aussi efficace que possible en termes de consommation de carburant et de performances, et notre équipe est chargée de créer les éléments extérieurs qui contribuent à cette efficacité. Nous travaillons donc avec des matériaux légers et résistants, tels que le carbone, pour créer les pièces qui forment la coque du véhicule.",
                objectifs: "Cette année nous avons comme objectifs de construire un nouveau capot avant qui doit être plus léger et être plus adapté au châssis existant. Sur ce nouveau capot nous allons réduire la part de nids d'abeille car nous nous sommes aperçus que ce n'était pas nécessaire au niveau structurel. Nous devons aussi construire les caches roues pour améliorer l'aérodynamisme générale du véhicule.",
                membres: [
                    {
                        nom: "HAMEL Héloïse",
                        role: "Directeur technique",
                        image: Heloise
                    },
                    {
                        nom: "VALESI Thomas",
                        role: "Chef de projet",
                        image: ThomasV
                    },
                    {
                        nom: "DE BASTARD Alaric",
                        role: "Membre",
                        image: Alaric
                    },
                    {
                        nom: "ROUSSEZ Antoine",
                        role: "Membre",
                        image: stig
                    },
                    {
                        nom: "ROUBIN Jeanne",
                        role: "Membre",
                        image: stig
                    },
                    {
                        nom: "SOKOL Maxime",
                        role: "Membre",
                        image: Maxime
                    },
                    {
                        nom: "COSMANO Nicolas",
                        role: "Membre",
                        image: stig
                    },
                    {
                        nom: "MASANOVIC Sasha",
                        role: "Membre",
                        image: Sasha
                    },
                    {
                        nom: "MOINE Sébastien",
                        role: "Membre",
                        image: stig
                    },
                    {
                        nom: "ZOLZETTICH Tiberio",
                        role: "Membre",
                        image: stig
                    }
                ]
            };
            break;
        case "systemes-embarques":
            equipes = {
                titre: "Prototype d'Efficience - Équipe Systèmes Embarqués",
                image: se,
                presentation: "L'équipe systèmes embarqués de la Formula Student est un élément clé de la réussite d'un véhicule de course. Elle est responsable de la conception et de la mise en œuvre des systèmes électroniques du véhicule, y compris la gestion du moteur, les systèmes de mesure et de contrôle de la performance, et les communications de bord. Les membres de l'équipe doivent être des experts en électronique, en programmation et en ingénierie électrique, car ils travaillent sur des projets complexes qui nécessitent une compréhension approfondie de la technologie et des algorithmes.\n\rL'objectif principal de l'équipe est de maximiser la fiabilité et la performance du véhicule en veillant à ce que tous les systèmes soient interconnectés de manière cohérente et fonctionnent de manière optimale sur le circuit. Cela nécessite une coordination étroite avec les autres équipes, notamment l'équipe aérodynamique, l'équipe liaison au sol et l'équipe fabrication et composites. Les membres de l'équipe doivent être en mesure de résoudre rapidement les problèmes et de trouver des solutions innovantes pour améliorer les performances du véhicule.\n\rEn plus de leur travail sur la Formula Student, les membres de l'équipe systèmes embarqués travaillent également sur le projet du Prototype d'efficience. Dans ce contexte, ils sont encore plus impliqués dans le développement de systèmes de mesure de la consommation d'électricité et de la performance, ainsi que dans la mise en place de systèmes de gestion de l'énergie pour maximiser l'efficacité du véhicule. Leurs compétences en matière de développement de systèmes électroniques de haute technologie sont donc encore plus mises à l'épreuve dans ce contexte, ce qui leur permet de développer des compétences précieuses pour leur carrière future en ingénierie.",
                objectifs: "",
                membres: [
                    {
                        nom: "CHOUKROUN Nathan",
                        role: "Chef de projet",
                        image: stig
                    },
                    {
                        nom: "GUNEY Alexis",
                        role: "Chef de projet",
                        image: stig
                    },
                    {
                        nom: "HERMAND Kevin",
                        role: "Membre",
                        image: stig
                    },
                    {
                        nom: "BODIN Matthéo",
                        role: "Membre",
                        image: Mattheo
                    },
                    {
                        nom: "RANDRIA Ntsoa",
                        role: "Membre",
                        image: stig
                    },
                    {
                        nom: "GERAUD Paul",
                        role: "Membre",
                        image: PaulGeraud
                    },
                    {
                        nom: "PAUPE Romain",
                        role: "Membre",
                        image: Romain
                    },
                    {
                        nom: "LEON Ruben",
                        role: "Membre",
                        image: stig
                    }
                ]
            };
            break;
        case "fs-aerodynamique":
            equipes = {
                titre: "Formula Student - Équipe Aérodynamique",
                image: fs_aero,
                presentation: "Bonjour tout le monde ! Si vous lisez ceci c'est parce que vous êtes intéressé par notre équipe ou que vous êtes juste curieux. Comme vous êtes déjà là, laissez-moi vous présenter l'équipe aérodynamique du projet Formula Student de Vinci Eco Drive. Faisons un tour des membres. Notre chef de projet c'est Duy Anh, un A4 en majeure MMN à l'ESILV. Ensuite nous avons Nathan, un A5 en majeure MMN, Antoine Lienard, un A4 en majeure MMN, Bryan, un A3, Myriam, une A3, Antoine Lemaire, un A3 et Valentine, une A3. Ils sont tous à l'ESILV. Nous travaillons sur tous ce qui est liée au châssis en monocoque de la voiture. Nous faisons tous entre la conception du châssis, des pièces aérodynamiques, des pièces de sécurité à la simulation aérodynamique à la fabrication de toutes les choses citées. Donc ne laissez pas le nom de notre équipe vous induire en erreur, nous effectuons un travail qui recouvre plusieurs domaines et nous ne faisons pas que des simulations aérodynamiques.",
                objectifs: "Pour l'année 2022-2023, nous entamons la cinquième année du développement de notre Formula Student. Depuis l'année dernière, nous avons commencé à fabriquer le moule de notre châssis en monocoque avec l'usinage et l'assemblage d'un squelette à la forme du châssis. Ce squelette doit bien sûr être rempli et prêt à mouler le carbone selon la forme de la modélisation de notre châssis. Donc notre objectif principal est de fabriquer le moule et puis pouvoir créer notre châssis d'ici la fin de l'année scolaire. Avec le châssis, nous voulons aussi fabriquer toutes les pièces indispensables au châssis en même temps. Les autres objectifs cette année sont de fabriquer les inserts qui sont implantés dans le châssis pour certaines pièces comme les arceaux de sécurité ou la batterie, le baquet où le pilote va s'assoir et les sidepods qui vont accueillir les radiateurs pour le refroidissement de la batterie. Cependant, nous n'avons pas oublié le fait que nous sommes l'équipe aérodynamique. Il faudra bien sûr faire la fabrication des éléments aérodynamique et faire la simulation aérodynamique de la Formula Student pour savoir sa performance. C'est une année chargée mais nous sommes confiants que nous pouvons compléter ces objectifs avant la fin de l'année.",
                membres: [
                    {
                        nom: "BARBIER Clément",
                        role: "Directeur technique",
                        image: Clement
                    },
                    {
                        nom: "HAMON Ewan",
                        role: "Directeur technique",
                        image: Ewan
                    },
                    {
                        nom: "DO Duy Anh",
                        role: "Chef de projet",
                        image: DuyAnh
                    },
                    {
                        nom: "LIENARD Antoine",
                        role: "Membre",
                        image: AntoineL
                    },
                    {
                        nom: "GOILLOT Laura",
                        role: "Membre",
                        image: Laura
                    },
                    {
                        nom: "BOU NAJM Bryan",
                        role: "Membre",
                        image: Bryan
                    },
                    {
                        nom: "OURAOU Myriam",
                        role: "Membre",
                        image: Myriam
                    },
                    {
                        nom: "ISBLED Nathan",
                        role: "Membre",
                        image: NathanI
                    },
                    {
                        nom: "JOORIS Valentine",
                        role: "Membre",
                        image: Valentine
                    }
                ]
            };
            break;
        case "fs-liaison-au-sol":
            equipes = {
                titre: "Formula Student - Équipe Liaisons au sol",
                image: fs_las,
                presentation: "L'équipe liaison au sol (LAS) de la Formula Student (FS) travaille sur l'ensemble des éléments effectuant la liaison entre le châssis de la FS et le terrain sur lequel elle évolue. Nous concevons la direction, les suspensions, les freins, les essieux de la FS en utilisant des logiciels de conception assistée par ordinateur (CAO), des logiciels de fabrication assistée par ordinateur (FAO) et des machines d'usinage. L'équipe LAS est composée de 7 membres et dirigée par une chef de projet. Chaque semaine, l'équipe de se réunit pour faire un bilan des tâches effectuées et à accomplir. Les membres de l'équipe ont reçu des formations sur le logiciel 3DEXPERIENCE et les machines d'usinage afin d'acquérir les compétences techniques nécessaires.",
                objectifs: "",
                membres: [
                    {
                        nom: "BARBIER Clément",
                        role: "Directeur technique",
                        image: Clement
                    },
                    {
                        nom: "HAMON Ewan",
                        role: "Directeur technique",
                        image: Ewan
                    },
                    {
                        nom: "VERA Julie",
                        role: "Chef de projet",
                        image: Julie
                    },
                    {
                        nom: "OSSART Alain",
                        role: "Membre",
                        image: Alain
                    },
                    {
                        nom: "FUENTES Alexandre",
                        role: "Membre",
                        image: Alexandre
                    },
                    {
                        nom: "VANLERBERGHE Augustin",
                        role: "Membre",
                        image: Augustin
                    },
                    {
                        nom: "MINIAU Édouard",
                        role: "Membre",
                        image: Edouard
                    },
                    {
                        nom: "BONNET Martin",
                        role: "Membre",
                        image: stig
                    },
                    {
                        nom: "CADERMOIDINE Rayan",
                        role: "Membre",
                        image: Rayan
                    },
                    {
                        nom: "LY Suvaddhano",
                        role: "Membre",
                        image: Suvaddhano
                    }
                ]
            };
            break;
        case "fs-fabrication":
            equipes = {
                titre: "Formula Student - Équipe Fabrication",
                image: fs_fab,
                presentation: "Bonjour à tous ! Vous êtes bien sur la page de l'équipe fabrication-composite de la formula Student de Vinci Eco Drive ! Notre rôle, comme notre nom l'indique, est de fabriquer et de produire les différentes parties de la Formula Student, notamment la monocoque en carbone, mais aussi de réaliser les tests nécessaires à l'homologation de notre châssis. Notre savoir-faire unique dans la fabrication du carbone et dans l'utilisation des produits associés nous permet d'être complètement autonome quant à l'usinage de nos pièces.\n\rNotre équipe est composée de 9 membres : Nicolas GONCALVES (A5 majeure MMN), Arthur VEREECKE (A4 majeure MMN), Quentin REES (A3), Hugo CHEN (A3), Jérémy DUBRAY (A3), Olivier BAKTHAVATCHALAM (A3), Nathan COCHET (A2), Antoine RICHARD (A2) et Charles PERIER (A2). L'équipe est dirigée par notre chef de projet, Romain GUET (A5 MMN). Tous les membres de l'équipe étudient à l'ESILV.\n\rAuparavant, notre équipe a effectué de nombreux tests de structure et de tests composites. Ces nombreux tests ont pour rôle de vérifier et valider les options d'offrant à nous. Après tous ces tests, nous avons pu déterminer la construction du composite qui est la plus optimale en termes de déformation sous contrainte légèreté et apparence.",
                objectifs: "Nos objectifs pour cette année 2023 sont, dans un premier temps, d'effectuer les tests restant nécessaires à l'homologation de la Formula Student VED. Les tests de flexion (3 points bending), de l'insert et enfin de cisaillement, sont effectués au sein du laboratoire de mécanique du Pôle Léonard de Vinci, avec l'aide d'enseignants-chercheurs. Par la suite, nous avons pour objectif de terminer le master positif de la Formula Student. Cet objectif étant divisé en sous taches, nous commençons par poser des mousses dans une structure de bois pour créer la forme du châssis. Ensuite, nous appliquerons les couches de protection de cette structure avant d'y poser les couches de carbone et de nid d'abeille en aluminium.\n\rNous avons pour objectif de terminer la création de la monocoque en carbone d'ici avril 2023 afin d'effectuer les premiers tests dynamiques.",
                membres: [
                    {
                        nom: "BARBIER Clément",
                        role: "Directeur technique",
                        image: Clement
                    },
                    {
                        nom: "HAMON Ewan",
                        role: "Directeur technique",
                        image: Ewan
                    },
                    {
                        nom: "PERIER Charles",
                        role: "Chef de projet",
                        image: Charles
                    },
                    {
                        nom: "REES Quentin",
                        role: "Membre",
                        image: Quentin
                    },
                    {
                        nom: "CHEN Hugo",
                        role: "Membre",
                        image: Hugo
                    },
                    {
                        nom: "BAKTHAVATCHALAM Olivier",
                        role: "Membre",
                        image: Olivier
                    },
                    {
                        nom: "DUBRAY Jérémy",
                        role: "Membre",
                        image: Jeremy
                    },
                    {
                        nom: "COCHET Nathan",
                        role: "Membre",
                        image: Nathan
                    },
                    {
                        nom: "VEREECKE Arthur",
                        role: "Membre",
                        image: Arthur
                    },
                    {
                        nom: "RICHARD Antoine",
                        role: "Membre",
                        image: Antoine
                    }
                ]
            };
            break;
        default:
            equipes = {
                titre: "",
                image: stig,
                presentation: "",
                objectifs: "",
                membres: [
                    {
                        nom: "",
                        role: "",
                        image: ""
                    },
                ]
            };
    }

    for (let member of equipes.membres) {
        all_members.push(
            <div className='member-card'>
                <img src={member.image} alt={member.nom}></img>
                <p className='member-name'>{member.nom}</p>
                <p className='member-role'>{member.role}</p>
            </div>
        )
    }

    return (
        <div className="Equipes">
            <div className='div-info equipe-div-img'>
                <img className='equipe-actu-img' alt={equipes.url} src={equipes.image}></img>
            </div>
            <div className='div-info shadow'>
                <span>Presentation</span>
                <br></br>
                <h1>{equipes.titre}</h1>
                <p>
                    <ReactMarkdown>{equipes.presentation}</ReactMarkdown>
                </p>
            </div>
            <div className='div-info'>
                <span>Objectifs</span>
                <br></br>
                <h1>Objectifs</h1>
                <p>
                    <ReactMarkdown>{equipes.objectifs}</ReactMarkdown>
                </p>
            </div>
            <div className='div-info'>
                <span>Membres</span>
                <br></br>
                <h1>Membres</h1>
                <div className='member-cards'>
                    {all_members}
                </div>
            </div>
        </div >
    )
}

export default Equipe;