import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

// CSS
import "../AddPick/AddPickItem.css"

// Components ajouter image item
function AddPickItem() {

    const imgRegex = /(.*[a-z]){5,30}/;

    const [legende, setlegende] = useState("")
    const [postPicture, setPostPicture] = useState(null)

    // J'importe une image
    const handlePicture = (e) => {
        setPostPicture(e.target.files[0])
    }

    // Fonction envoie image bdd
    const addImg = (e) => {
        e.preventDefault()
        window.confirm("Voulez vous vraiment partager l'image sur groupomania")
        addImgItem()
    }

    const addImgItem = () => {
        if (imgRegex.test(legende)) {
            const formData = new FormData()
            formData.append("fk_id_user", localStorage.id)
            formData.append("legende", legende)
            formData.append("image", postPicture)
            Axios.post("http://localhost:3001/api/posts", formData)
                .then(() => {
                    window.location.reload()
                })

        } else {
            alert("Veillez à remplir tous les champs")
            return
        }
    }

    // Supprimer image
    const removeImg = () => {
        window.confirm("Voulez vous vraiment anuler le partage")
        removeImgItem()
    }
    const removeImgItem = () => {
        window.location.reload()
    }

    // JSX
    return (
        <div>
            <Link to="/ProfileScreen">
                <i className="fas fa-arrow-left flecheGauche" /> retour
            </Link>
            <div className='addPickItem'>
                <h2 className='addPickItem_titre'>Ajouter une image</h2>
                <form className='addPickItem_form'>
                    <div className='addPickItem_file'>
                        <div>
                            <input className='addPickItem_file_input'
                                required
                                type="file"
                                id='file'
                                name='file'
                                onChange={(e) =>
                                    handlePicture(e)
                                }
                            />
                        </div>
                        <img className='addPickItem_img' src={postPicture} alt="image_a_télècharger"></img>
                    </div>
                    <div className='addPickItem_button'>
                        <input type="text"
                            placeholder='Mettre une légende'
                            required
                            onChange={(event) => {
                                if (imgRegex.test(event.target.value)) {
                                    setlegende(event.target.value)
                                    return
                                }
                            }}
                        />
                        <div className='addPickItem_item'>
                            <button className='brt'
                                onClick={addImg}>Valider
                            </button>
                            <button className='brt'
                                onClick={removeImg}>Anuler
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default AddPickItem;
