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
        // Affichage de toutes les images postéés
        Axios.get(
            "http://localhost:3001/api/posts")
            .then((response) => {
                // console.log(response.data.result);
                setaffiImg(response.data.result)
            })
    }, [])

    return (
        <section className='getAllImage_image'>
            {affiImg && affiImg.length && affiImg.map((x) => {
                return (
                    <ul key={x.content}>
                        <li>{x.media_url}</li>
                        <li>{x.title}</li>
                        <li>{x.content}</li>
                    </ul>

                )
            })}
        </section >
    )
}

export default GetAllImage;
