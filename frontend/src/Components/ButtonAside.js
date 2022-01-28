import React from 'react';

// CSS
import "../Styles.css/Components.css/ButtonAsideComponent.css"

function ButtonAside() {

    // Sidebar
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
