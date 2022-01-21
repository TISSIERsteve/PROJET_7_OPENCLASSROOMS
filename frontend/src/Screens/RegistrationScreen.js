import { useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios"

// CSS
import "../Styles.css/Screens.css/RegistrationScreen.css";

function RegistrationScreen() {

    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [password, setpassword] = useState("");
    const [email, setemail] = useState("");


    const nomRegex = /(.*[a-z]){3,30}/;
    const prenomRegex = /(.*[a-z]){3,30}/;
    const pwdRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    const mailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/

    const addUser = (e) => {
        if (nomRegex.test(nom) && prenomRegex.test(prenom) && pwdRegex.test(password) && mailRegex.test(email)) {
            alert(`
             Bravo
             ${prenom} 
             tu viens de t'inscrire sur GROUPOMANIA`)

            Axios.post("http://localhost:3001/user", {
                nom: nom,
                prenom: prenom,
                password: password,
                email: email,
            })
        } else {
            alert("Veuillez renseigner des champs valides")
        }
    };

    return (
        <div className="RegistrationScreen">
            <Link to='/'>
                <i className='fas fa-arrow-left' />
            </Link>

            <div>
                <form className="form">
                    <div>
                        <h2>Créer un compte</h2>
                    </div>

                    <div>
                        <label htmlFor="nom">Nom:</label>
                        <input required
                            placeholder="Entre nom"
                            id="nom"
                            type="text"
                            onChange={(event) => {
                                if (nomRegex.test(event.target.value)) {
                                    setNom(event.target.value)
                                    document.getElementById("span1").style.color = "green"
                                    document.getElementById("span1").innerHTML =
                                        "Nom Valide"
                                } else {
                                    document.getElementById("span1").style.fontWeight = "bold"
                                    document.getElementById("span1").style.color = "red"
                                    document.getElementById("span1").innerHTML =
                                        "Veuillez renseigner un nom valide"
                                }
                            }}
                        />
                        <span id="span1"></span>
                    </div>
                    <div>
                        <label htmlFor="prenom">Prénom:</label>
                        <input required
                            placeholder="Entrer prénom"
                            id="prenom"
                            type="test"
                            onChange={(event) => {
                                if (prenomRegex.test(event.target.value)) {
                                    setPrenom(event.target.value)
                                    document.getElementById("span2").style.color = "green"
                                    document.getElementById("span2").innerHTML =
                                        "Prénom Valide"
                                } else {
                                    document.getElementById("span2").style.fontWeight = "bold"
                                    document.getElementById("span2").style.color = "red"
                                    document.getElementById("span2").innerHTML =
                                        "Veuillez renseigner un prénom valide"
                                }
                            }}
                        />
                        <span id="span2"></span>
                    </div>
                    <div>
                        <label htmlFor="password">Mot de passe:</label>
                        <input required
                            placeholder="Renseigner un mot de passe"
                            id="password"
                            type="password"
                            onChange={(event) => {
                                if (pwdRegex.test(event.target.value)) {
                                    setpassword(event.target.value)
                                    document.getElementById("span3").style.color = "green"
                                    document.getElementById("span3").innerHTML =
                                        "Mot de passe valide"
                                } else {
                                    document.getElementById("span3").style.fontWeight = "bold"
                                    document.getElementById("span3").style.color = "red"
                                    document.getElementById("span3").innerHTML =
                                        "Veuillez renseigner un mot de passe valide"
                                }
                            }}
                        />
                        <span id="span3"></span>
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input required
                            placeholder="Entrer une adresse mail"
                            id="email"
                            type="email"
                            onChange={(event) => {
                                if (mailRegex.test(event.target.value)) {
                                    setemail(event.target.value)
                                    document.getElementById("span4").style.color = "green"
                                    document.getElementById("span4").innerHTML =
                                        "Adresse e-mail valide"
                                } else {
                                    document.getElementById("span4").style.fontWeight = "bold"
                                    document.getElementById("span4").style.color = "red"
                                    document.getElementById("span4").innerHTML =
                                        "Veuillez renseigner une adresse e-mail valide"
                                }
                            }}
                        />
                        <span id="span4"></span>
                    </div>
                    <div>
                        <label></label>
                        <button onClick={addUser}>Enregistrer</button>
                    </div>
                    <div>
                        <label></label>
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
