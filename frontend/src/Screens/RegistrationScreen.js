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

            <div>
                <form className="form" onSubmit>
                    <div>
                        <h1>Créer un compte</h1>
                    </div>

                    <div>
                        <label htmlFor="name">Nom :</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Entrer nom"
                            required
                            onChange
                        />
                    </div>
                    <div>
                        <label htmlFor="firstname">Prénom :</label>
                        <input
                            type="text"
                            id="firstname"
                            placeholder="Entrer prénom"
                            required
                            onChange
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Adresse E-mail :</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Entrer email"
                            required
                            onChange
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Mot de passe :</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Entrer mot de passe"
                            required
                            onChange
                        />
                    </div>
                    <div>
                        <label htmlFor="confirmPassword">Confirmez mot de passe :</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            placeholder="Entrer mot de passe confirmez"
                            required
                            onChange
                        />
                    </div>
                    <div>
                        <label />
                        <button className="primary" type="submit">
                            Enregister
                        </button>
                    </div>
                    <div>
                        <label />
                        <div>
                            Vous avez déjà un compte ?
                            <Link to="/AccountScreen"> S'identifier</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default RegistrationScreen;
