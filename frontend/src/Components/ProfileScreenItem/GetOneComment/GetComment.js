import React from 'react';
import { useEffect, useState } from 'react';
import Axios from 'axios';

function GetComment(props) {

    // {/* =========== Obtenir un commentaire poster sur un message ============================= */ }
    const [com, setcom] = useState('')

    useEffect(() => {
        Axios.get(`http://localhost:3001/api/comments/${props.messageid}`)
            .then((response) => {
                console.log(response.data);
                setcom(response.data.result)
            })
    }, [props.messageid])

    // JSX
    return <div>
        <section>
            {com && com.length && com.map((x) => {
                return (
                    <li key={x.content}>{x.content}</li>
                )
            })
            }
        </section>

    </div>;

}
export default GetComment;
