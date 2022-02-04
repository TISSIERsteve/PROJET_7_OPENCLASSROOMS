import React from 'react';
import { Link } from "react-router-dom"

function Messenger() {

    const identity = JSON.parse(localStorage.prenom)
    console.log(identity);
    // {/* ========================== Obtenir un sms ============================= */ }

    // JSX
    return <div>
        <Link to="/ProfileScreen">
            <i className="fas fa-arrow-left flecheGauche" />
        </Link>
        <section>
            {identity}
            SMS PRIVER
        </section>

    </div>;
}

export default Messenger;
