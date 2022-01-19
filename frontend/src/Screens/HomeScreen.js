import React from "react";
import { Link } from "react-router-dom";

// CSS
import "../Styles.css/Screens.css/HomeScreen.css";

function HomeScreenItem() {
    return (
        <div className="homeScreen">
            <main>
                <nav className="homeScreen_navLink">
                    <div className="homeScreen_title">
                        <h3>Vous n'êtes pas identifié</h3>
                    </div>
                    <div className="homeScreen_navLink_item">
                        <Link to="/AccountLogin">Se connecter</Link> <strong>ou</strong>
                        <Link to="/RegistrationScreen">Créer un compte</Link>
                    </div>
                </nav>
                <div>
                    <img className="homeScreen_img1" src="./images/img5.png" alt="" />
                </div>
            </main>
        </div>
    );
}

export default HomeScreenItem;
