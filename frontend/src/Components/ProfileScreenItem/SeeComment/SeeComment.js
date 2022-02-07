import React from 'react';
import { useEffect, useState } from 'react';
import Axios from 'axios';

// CSS
// import "./GetComment.css"

// ===== Components récupére commentaire que l'on nous à poster sur ma page perso =====
function SeeComment(props) {

    // Obtenir un commentaire poster sur un message 
    const [com, setcom] = useState('')

    // Ouverture commentaire que l'on nous a poster page perso
    const [isGetActive, setGetisActive] = useState("")
    const openFieldset = () => {
        if (isGetActive === "active") {
            setGetisActive("")

        } else {
            setGetisActive("active")
        }
    }

    useEffect(() => {
        Axios.get(`http://localhost:3001/api/comments/`)
            .then((response) => {
                setcom(response.data.result)
                console.log(response.data.result);
            })
    }, [])

    // JSX
    return <div className='get'>
        <fieldset className='fieldset' onClick={openFieldset}>
            <legend className='getcomment_fieldset'>Voir les commentaires</legend>
            <section className={`getsection ${isGetActive}`}>
                {com && com.length ? com.map((x) => {
                    return (
                        <ul key={x.prenom} className="getcomment">
                            <li className='getcomment_prenom'>{x.prenom} vous à commenter :</li>
                            <li className='getcomment_content'>{x.content}</li>
                        </ul>
                    )
                }) : <li>Vous avez aucun commentaire</li>
                }
            </section>
        </fieldset>
    </div>;

}
export default SeeComment;

