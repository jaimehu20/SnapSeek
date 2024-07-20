import React from "react"
import { Close } from "../Icons/Close"

export const Modal:React.FC<any> = ({ showModal, setShowModal, info }) => {

    const handleClick = () => {
        setShowModal(false)
    }

    return <>
    <div className={`modal ${showModal ? 'enabled' : ''}`}>
        <div className="modal-content">
            <div className="modal-header">
                <h1>Editar descripción</h1>
                <Close handleClick={handleClick}/>
            </div>
            <div className="modal-editor">
                <p>{"La descripción de la foto es:"}</p>
                <em>{`"${info.description}"`}</em>
                <p>Si quieres cambiar la descripción, introdúcela en el siguiente campo:</p>
                <input type="text" placeholder={info.description} />
            </div>
            <button onClick={handleClick}>Editar descripción</button>
        </div>
    </div>
    </>
}