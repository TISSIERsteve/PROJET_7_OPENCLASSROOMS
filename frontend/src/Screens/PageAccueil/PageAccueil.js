import { Navigate } from "react-router-dom";

// Components
import BarreLaterale from "../../Components/BarreLaterale/AsideLaterale/BarreLaterale";
import Bouton from "../../Components/BarreLaterale/BoutonBarre/Boutton";
import BarrePostMessage from "../../Components/Header/BarrePostMessage/PostMessage";
import BarrePostImage from "../../Components/Header/Barre/BarrePostImage";
import CardPrincipal from "../../Components/CardPageAccueil/Card/CardPrincipal";

// CSS
import "./PageAccueil.css";

// ===== Page principal accueil =====
function PageAccueil() {

    // Si token j'affiche la page profil
    if (localStorage.bearer) {
        return (
            <div>
                {/* Component Bouton */}
                <Bouton />

                {/* Component Barre laterale */}
                <div id="open" className="aside_form">
                    <BarreLaterale />
                </div>

                {/* Components barre de message */}
                <div>
                    <BarrePostMessage />
                </div>

                {/* Component Barre post image */}
                <div className="container">
                    <BarrePostImage />
                </div>

                {/*  Partie dynamique messages postés  */}
                <CardPrincipal />
            </div>
        );

        // Sinon pas token return page accueil
    } else {
        return <Navigate to="/" />;
    }
}
export default PageAccueil;
