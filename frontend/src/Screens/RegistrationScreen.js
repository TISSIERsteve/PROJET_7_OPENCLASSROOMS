import React, { useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios"

// CSS
import "../Styles.css/Screens.css/RegistrationScreen.css";

function RegistrationScreen() {

    const [name, setName] = useState("")
    const [firstname, setfirstname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    // const [confirmPassword, setconfirmPassword] = useState("")


    const addUser = () => {
        Axios.post("http://locahost:3001/create", {
            name: name,
            firstname: firstname,
            email: email,
            password: password,
            // confirmPassword: confirmPassword
        })
    }

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
                            onChange={(e) => {
                                setName(e.target.value)
                            }}
                        />
                    </div>
                    <div>
                        <label htmlFor="firstname">Prénom :</label>
                        <input
                            type="text"
                            id="firstname"
                            placeholder="Entrer prénom"
                            required
                            onChange={(e) => {
                                setfirstname(e.target.value)
                            }}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Adresse E-mail :</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Entrer email"
                            required
                            onChange={(e) => {
                                setemail(e.target.value)
                            }}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Mot de passe :</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Entrer mot de passe"
                            required
                            onChange={(e) => {
                                setpassword(e.target.value)
                            }}
                        />
                    </div>
                    {/* <div>
                        <label htmlFor="confirmPassword">Confirmez mot de passe :</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            placeholder="Entrer mot de passe confirmez"
                            required
                            onChange={(e) => {
                                setconfirmPassword(e.target.value)
                            }}
                        />
                    </div> */}
                    <div>
                        <label />
                        <button onClick={addUser}>
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
