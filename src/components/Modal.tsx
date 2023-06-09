import React from 'react'

// CSS
import style from "./Modal.module.css"

type Props = {
    children: React.ReactNode;
}

const Modal = ({children}: Props) => {

    const closeModal = (e: React.MouseEvent):void => {
        const modal = document.querySelector('#modal')
        modal!.classList.add("hide")
    }

  return (
    <div id='modal' className='hide'>
        <div className={style.fade} onClick={closeModal}></div>
        <div className={style.modal}>
            <h2>texto do modal</h2>
            {children}
        </div>
    </div>
  )
}

export default Modal