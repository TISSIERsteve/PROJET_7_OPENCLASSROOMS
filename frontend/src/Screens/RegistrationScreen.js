import React from "react";
import { Link } from "react-router-dom";

// CSS
import "../Styles.css/Screens.css/RegistrationScreen.css";

function RegistrationScreen() {
    return (
        <div className='registrationScreen'>
            <Link to='/'>
                <i class='fas fa-arrow-left' />
            </Link>
            <h2 className='registrationScreen_title'>Création d'un compte</h2>

            <div>
                <fieldset className='container_form'>
                    <legend>Informations personnelles</legend>
                    <form>
                        <label for="name">Nom :</label>
                        <input id="name" type={"text"} />
                        <label for="prenom">Prénom :</label>
                        <input id="prenom" type={"text"} />
                        <label for="mail">Email :</label>
                        <input id="mail" type={"email"} />
                        <label for="poste">Poste :</label>
                        <input id="poste" type={"text"} />
                        <label for="status">Status :</label>
                        <input id="status" type={"text"} />
                        <label for="tel">Tel :</label>
                        <input id="tel" type={"tel"} />
                    </form>
                </fieldset>
                <fieldset className='container_form'>
                    <legend>Identifiant de connexion</legend>
                    <form>
                        <label for="password">Password :</label>
                        <input id="password" type={"password"} />
                        <label for="pseudo"> Pseudo :</label>
                        <input id="pseudo" type={"text"} />
                    </form>
                    <button className="registrationScreen_button">Créer le compte</button>
                </fieldset>
            </div>
        </div>
    );
}

export default RegistrationScreen;
