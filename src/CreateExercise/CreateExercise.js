import React from 'react'
import { ContextGlobal } from '../ContextGlobal/ContextGlobal'

function CreateExercise(){
    const {
        setOpenModal
    } =React.useContext(ContextGlobal)
    return(
        <div className='container-add-exercise'>
            <button
            className='button-add-exercise' 
            onClick={()=>{
                setOpenModal(state => !state) // Con este metodo puedo actualizar el modal en pantalla al darle  click, aparece o desaparece segun el caso
            }}
            >Agregar ejercicio</button>
        </div> 
    )
}

export { CreateExercise }