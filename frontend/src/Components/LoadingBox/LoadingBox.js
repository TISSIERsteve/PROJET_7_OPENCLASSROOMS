import React from 'react'

// CSS 
import "../LoadingBox/LoadingBox.css"

function LoadingBox() {
    return (
        <div className='loading'>
            <i className="fa fa-spinner fa-spin"></i>Veuillez patientez...
        </div>
    )
}

export default LoadingBox