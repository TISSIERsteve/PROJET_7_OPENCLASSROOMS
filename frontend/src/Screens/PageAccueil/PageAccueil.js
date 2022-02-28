import { Navigate } from "react-router-dom";

// Components
import BarreLaterale from "../../Components/BarreLaterale/BarreLaterale/BarreLaterale";
import Bouton from "../../Components/BarreLaterale/BoutonBarre/BouttonBarre";
import BarrePostMessage from "../../Components/Header/BarrePostMessage/PostMessage";
import BarrePostImage from "../../Components/Header/Barre/BarrePostImage";
import CardPrincipal from "../../Components/CardPageAccueil/CardPrincipal/CardPrincipal";

// CSS
import "./PageAccueil.css";

// ===== Page principal accueil =====
function PageAccueil() {

    // Si token j'affiche la page accueil profil
    if (localStorage.bearer) {

        return (
            <div>
                {/* Component Bouton */}
                <Bouton />

                {/* Component Barre laterale */}
                <div id="open" className="aside_form">
                    <BarreLaterale />
                </div>

                {/* Components barre poste de message */}
                <div>
                    <BarrePostMessage />
                </div>

                {/* Component Barre poste d'image */}
                <div className="container">
                    <BarrePostImage />
                </div>

                {/*  Component card principal */}
                <CardPrincipal />
            </div>
        );

        // Sinon pas token return page accueil
    } else {
        return <Navigate to="/" />;
    }
}
export default PageAccueil;
