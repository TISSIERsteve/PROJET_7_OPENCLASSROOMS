import React from "react";
import { Link } from "react-router-dom";

// CSS
import "../HomeScreen/HomeScreen.css";

// Page d'accueil pour connexion ou la création compte
function HomeScreenItem() {
    return (
        <div className="homeScreen">
            <main>
                <nav className="homeScreen_navLink">
                    <div className="homeScreen_title">
                        <h3>Vous n'êtes pas identifié</h3>
                    </div>
                    <div className="homeScreen_navLink_item">
                        <Link to="/AccountScreen">Se connecter</Link> <strong>ou</strong>
                        <Link to="/RegistrationScreen">Créer un compte</Link>
                    </div>
                </nav>
            </main>
        </div>
    );
}
export default HomeScreenItem;
