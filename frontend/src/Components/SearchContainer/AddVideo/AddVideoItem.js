import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom"


// Components ajouter video item
function AddVideoItem() {

    const videoRegex = /(.*[a-z]){5,30}/;
    const [legendeVideo, setlegendeVideo] = useState("")
    console.log(legendeVideo);

    return (
        <div>
            <Link to="/ProfileScreen">
                <i className="fas fa-arrow-left flecheGauche" /> retour
            </Link>
            <div>
                <div className='addPickItem'>
                    <h2 className='addPickItem_titre'>Ajouter une vidéo</h2>
                    <form className='addPickItem_form'>
                        <div className='addPickItem_file'>
                            <div>
                                <input className='addPickItem_file_input'
                                    required
                                    type="file"
                                    id='file'
                                    name='file'
                                    accept=''
                                />
                            </div>
                            <img className='addPickItem_img' alt="vidéo_a_télècharger"></img>
                        </div>
                        <div className='addPickItem_button'>
                            <input type="text"
                                placeholder='Mettre une légende'
                                required
                                onChange={(event) => {
                                    if (videoRegex.test(event.target.value)) {
                                        setlegendeVideo(event.target.value)
                                        return
                                    }
                                }}
                            />
                            <div className='addPickItem_item'>
                                <button className='brt'
                                >Valider
                                </button>
                                <button className='brt'
                                >Anuler
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddVideoItem;
