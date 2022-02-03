import React from 'react';

// CSS
import "../ButtonAside/ButtonAside.css"

function ButtonAside() {

    // Sidebar boutton
    const open = () => {
        document.getElementById("open").classList.toggle("active")
    }

    return <div>
        <button onClick={open}
            type="button"
            className="open-sidebar button_sidebar">
            <i className="fa fa-bars" />
        </button>
    </div>;
}
export default ButtonAside;
