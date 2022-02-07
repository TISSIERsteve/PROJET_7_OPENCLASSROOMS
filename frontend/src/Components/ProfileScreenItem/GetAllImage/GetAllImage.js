import React from 'react';
import { useState, useEffect } from "react"
import Axios from 'axios';

// Component pour afficher image
function GetAllImage() {

    const [affiImg, setaffiImg] = useState([])
    // console.log(affiImg);

    useEffect(() => {
        // Affichage de toutes les images postéés
        Axios.get(
            "http://localhost:3001/api/posts")
            .then((response) => {
                // console.log(response.data.result);
                setaffiImg(response.data)
            })
    }, [])

    return (
        < section >
            {
                affiImg
            }

        </section >
    )
}

export default GetAllImage;
