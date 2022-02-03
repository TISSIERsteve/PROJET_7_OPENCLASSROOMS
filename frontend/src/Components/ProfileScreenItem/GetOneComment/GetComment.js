import React, { useEffect, useState } from 'react';
import Axios from 'axios';

function GetComment() {

    const [comment, setcomment] = useState('')

    // Obtenir un commentaire poster sur un message
    useEffect(() => {
        Axios.get("http://localhost:3001/api/comments/:id",)
            .then((response) => {
                console.log(response.data)
                setcomment(response.data)
            })

    }, [])


    // JSX
    return (
        <section>
            {comment && comment.length && comment.map((x) => {
                console.log(x)
                return (
                    <li >
                        {comment}
                    </li>
                )
            })}
        </section>
    )
}

export default GetComment;
