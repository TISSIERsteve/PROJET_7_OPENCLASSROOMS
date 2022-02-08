import React from 'react';
import { useState, useEffect } from "react"
import Axios from 'axios';

// CSS
import "./GetAllImage.css"

// Component pour afficher image
function GetAllImage() {

    const [affiImg, setaffiImg] = useState([])
    console.log(affiImg);

    useEffect(() => {

        // Affichage de toutes les images postées
        Axios.get(
            "http://localhost:3001/api/posts")
            .then((response) => {
                setaffiImg(response.data.result)
            })
    }, [])

    return (
        <section className='getAllImage_image'>

            <img src='/images' alt='img telecharger'></img>

            {affiImg && affiImg.length && affiImg.map((x) => {
                return (

                    <li></li>

                )
            })}
        </section>
    )
}

export default GetAllImage;
