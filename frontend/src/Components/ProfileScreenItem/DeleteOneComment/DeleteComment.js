// import React from 'react';
// import Axios from 'axios';

// function DeleteComment(props) {
//     const { destructure } = props
//     console.log(destructure);

//     // ====================== Supprimer un message ==========================
//     const deleteCom = (id) => {
//         if (window.confirm("Voulez vous vraiment supprimer ce post ?")) {
//             deleteDefini(id)
//         }
//     }

//     const deleteDefini = (id) => {
//         Axios.delete("http://localhost:3001/api/messagesPerso/" + id,)
//             .then((response) => {
//                 // console.log(response);
//             })
//     }
//     return (
//         <div className='trash'>
//             {destructure && destructure.length && destructure.map((x) => {
//                 return (

//                     <button onClick={() => deleteCom(x.message_perso_id)}>
//                         <span>
//                             <i className="fas fa-trash-alt poubelle"></i>
//                         </span>
//                     </button>
//                 )
//             })}
//         </div>
//     )
// }

// export default DeleteComment;

