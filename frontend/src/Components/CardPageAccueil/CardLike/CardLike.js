import React from 'react'

// CSS
import "./CardLike.css"

// Compnents pour like
function CardLike() {

    const addLike = () => {
        console.log("yes");
    }

    // JSX
    return (
        <button className='btn_like' onClick={addLike}>
            <p className="boutton_commenter">J'aime</p>
        </button>
    )
}

export default CardLike