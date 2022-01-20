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

    const addUser = () => {
        Axios.post("http://localhost:3001/user", {
            nom: nom,
            prenom: prenom,
            password: password,
            email: email,
        })


    };

    return (
        <div className="RegistrationScreen">
            <Link to='/'>
                <i class='fas fa-arrow-left' />
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
                                setNom(event.target.value);
                            }}
                        />
                    </div>
                    <div>
                        <label htmlFor="prenom">Prénom:</label>
                        <input required
                            placeholder="Entrer prénom"
                            id="prenom"
                            type="test"
                            onChange={(event) => {
                                setPrenom(event.target.value);
                            }}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Mot de passe:</label>
                        <input required
                            placeholder="Renseigner un mot de passe"
                            id="password"
                            type="password"
                            onChange={(event) => {
                                setpassword(event.target.value);
                            }}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input required
                            placeholder="Entrer une adresse mail"
                            id="email"
                            type="email"
                            onChange={(event) => {
                                setemail(event.target.value);
                            }}
                        />
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

    // const [nom, setNom] = useState("");
    // const [prenom, setPrenom] = useState("");
    // const [password, setPassword] = useState("");
    // const [email, setEmail] = useState("");



    // const addUser = () => {
    //     Axios.post("http://locahost:3001/user", {
    //         nom: nom,
    //         prenom: prenom,
    //         password: password,
    //         email: email,
    //         // confirmPassword: confirmPassword
    //     })
    // }

    // return (
    //     <div className='registrationScreen'>
    //         <Link to='/'>
    //             <i class='fas fa-arrow-left' />
    //         </Link>

    //         <div>
    //             <form className="form" >
    //                 <div>
    //                     <h1>Créer un compte</h1>
    //                 </div>

    //                 <div>
    //                     <label htmlFor="name">Nom :</label>
    //                     <input
    //                         type="text"
    //                         id="name"
    //                         placeholder="Entrer nom"
    //                         required
    //                         onChange={(e) => {
    //                             setNom(e.target.value)
    //                         }}
    //                     />
    //                 </div>
    //                 <div>
    //                     <label htmlFor="firstname">Prénom :</label>
    //                     <input
    //                         type="text"
    //                         id="firstname"
    //                         placeholder="Entrer prénom"
    //                         required
    //                         onChange={(e) => {
    //                             setPrenom(e.target.value)
    //                         }}
    //                     />
    //                 </div>
    //                 <div>
    //                     <label htmlFor="email">Adresse E-mail :</label>
    //                     <input
    //                         type="email"
    //                         id="email"
    //                         placeholder="Entrer email"
    //                         required
    //                         onChange={(e) => {
    //                             setEmail(e.target.value)
    //                         }}
    //                     />
    //                 </div>
    //                 <div>
    //                     <label htmlFor="password">Mot de passe :</label>
    //                     <input
    //                         type="password"
    //                         id="password"
    //                         placeholder="Entrer mot de passe"
    //                         required
    //                         onChange={(e) => {
    //                             setPassword(e.target.value)
    //                         }}
    //                     />
    //                 </div>
    //                 {/* <div>
    //                     <label htmlFor="confirmPassword">Confirmez mot de passe :</label>
    //                     <input
    //                         type="password"
    //                         id="confirmPassword"
    //                         placeholder="Entrer mot de passe confirmez"
    //                         required
    //                         onChange={(e) => {
    //                             setconfirmPassword(e.target.value)
    //                         }}
    //                     />
    //                 </div> */}
    //                 <div>
    //                     <label />
    //                     <button onClick={addUser}>
    //                         Enregister
    //                     </button>
    //                 </div>
    //                 <div>
    //                     <label />
    //                     <div>
    //                         Vous avez déjà un compte ?
    //                         <Link to="/AccountScreen"> S'identifier</Link>
    //                     </div>
    //                 </div>
    //             </form>
    //         </div>
    //     </div>
    // );
}

export default RegistrationScreen;
