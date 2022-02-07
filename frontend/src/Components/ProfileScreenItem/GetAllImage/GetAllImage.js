import React from 'react';
import { useState, useEffect } from "react"
import Axios from 'axios';

// Component pour afficher image
function GetAllImage() {

    const [affiImg, setaffiImg] = useState('')

    useEffect(() => {
        // Affichage de toutes les images postéés
        Axios.get(
            "http://localhost:3001/api/posts")
            .then((response) => {
                console.log(response.data);
                setaffiImg(response.data)
            })
    }, [])

    return (
        <section className="items">
            {affiImg && affiImg.length && affiImg.map((x) => {
                return (
                    <li >
                        <article className="card">
                            <h3>{x.title}</h3>

                        </article>
                    </li>
                )
            })}
        </section>
    )
}

export default GetAllImage;
