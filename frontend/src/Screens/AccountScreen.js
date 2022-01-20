import React from 'react';
import { Link } from "react-router-dom"

// Css
import "../Styles.css/Screens.css/AccountScreen.css"

function AccountScreen() {
    return (
        <div>
            <Link to='/'>
                <i class='fas fa-arrow-left' />
            </Link>

            <form className="form_item" onSubmit >
                <div>
                    <h1>Se connecter</h1>
                </div>

                <div>
                    <label htmlFor="email">Adresse E-mail</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Entrer email"
                        required
                        onChange
                    />
                </div>
                <div>
                    <label htmlFor="password">Mot de passe</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter password"
                        required
                        onChange
                    />
                </div>
                <div>
                    <label />
                    <button>
                        Se connecter
                    </button>
                </div>
                <div>
                    <label />
                    <div>
                        <div>
                            Vous voulez vous inscrire ?
                            <Link to="/RegistrationScreen"> Créer un compte</Link>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default AccountScreen;

