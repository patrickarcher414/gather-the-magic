import React from 'react';

// const Modal = ({ onClose, currentPhoto }) => {
//     const { name, description, category, index } = currentPhoto;

//     return (
//         <div className="modalBackdrop">
//             <div className="modalContainer">
//                 <h3 className="modalTitle">{name} </h3>
//                 <img
//                     src={require(`../../assets/large/${category}/${index}.jpg`).default}
//                     alt="current category"
//                 />
//                 <p>{description}</p>
//                 <button type="button" onClick={onClose}>
//                     Close this modal
//                 </button>
//             </div>
//         </div>
//     );
// };

// jenna
const Modal = () => {
    var modal = document.getElementById("modalContainer");
    // selected card var
    var span = document.getElementsByClassName("close")[0];

    /* howeverWeIdTheCard.onClick = function() {
        modal.style.display = "block"; */
    
    span.onclick = function() {
        modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    // needs function to save card to deck
    return (
        <div id='modalContainer'>
            <div id='modalBox'>
                <span className='close'>&times;</span>
            </div>
            <div id='modalContent'>

            </div>
            <div>
                <button id='modalBtn'>add to deck</button>
            </div>
        </div>
    )
}

export default Modal;