import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom"
import Axios from 'axios';

// Css
import "../Styles.css/Screens.css/AccountScreen.css"

function AccountScreen() {
    const navigate = useNavigate()
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    const accountUser = async (e) => {
        e.preventDefault()

        try {
            const response = await Axios.post(`http://localhost:3001/api/auth/login`, {
                email,
                password
            })

            localStorage.setItem("bearer", JSON.stringify(response.data.token))
            localStorage.setItem("prenom", JSON.stringify(response.data.user.prenom))
            navigate("/ProfileScreen", { replace: true })

        } catch (err) {
            alert("E-mail ou mot de passe incorrect")
            window.location.reload()
            console.log(err)
        }
    }


    return (
        <div>
            <Link to='/'>
                <i className='fas fa-arrow-left' />
            </Link>

            <form className="form_item">
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
                        onChange={(event) => setemail(event.target.value)}
                        value={email}
                    />
                </div>
                <div>
                    <label htmlFor="password">Mot de passe</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter password"
                        required
                        onChange={(event) => setpassword(event.target.value)}
                        value={password}
                    />
                </div>
                <div>
                    <label />
                    <button onClick={accountUser}>
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

