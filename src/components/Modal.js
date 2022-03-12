import React from "react";
import "./Modal.css";


 function Modal({closeModal, saveModal}){
    return (
    <div className="modalBackground">
        <div className="modalContainer">
            <div className="title">
                <h2>Theme Color</h2>
                <div className="theme">Change Theme</div>    
            </div>
            <div className="body">
                <div className="Lbody line1">
                    <p>Font Color</p>
                    <p>#444444 <button></button></p>
                </div>
                <div className="Lbody line2">
                    <p>Background Color</p>
                    <p>#FFFFFF <button></button></p>
                </div>
                <div className="Lbody line3">
                    <p>Button Color</p>
                    <p>#2072EF <button></button></p>
                </div>
                <div className="Lbody line4">
                    <p>Button Border Color</p>
                    <p>#2072EF <button></button></p>
                </div>
                <div className="Lbody line5">
                    <p>Buttons Mouseover Color</p>
                    <p>#0053D1 <button></button></p>
                </div>
            </div>
            <div className="footer">
            <button className="btn-cancel" onClick={() => closeModal(false)}>Cancel</button>
            <button className="btn-save" onClick={() => saveModal(false)} >Save</button>
            </div>

            
        </div>
    </div>
    )
 }
 export default Modal