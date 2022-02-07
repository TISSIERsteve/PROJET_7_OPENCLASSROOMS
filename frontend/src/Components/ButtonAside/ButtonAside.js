import React from 'react';

// CSS
import "../ButtonAside/ButtonAside.css"

// ===== Components Bouton open aside =====
function ButtonAside() {

    // Open boutton
    const open = () => {
        document.getElementById("open").classList.toggle("active")
    }

    // JSX
    return <div>
        <button onClick={open}
            type="button"
            className="open-sidebar button_sidebar">
            <i className="fa fa-bars" />
        </button>
    </div>;
}
export default ButtonAside;
