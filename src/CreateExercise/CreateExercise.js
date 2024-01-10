import React from 'react'
import { ContextGlobal } from '../ContextGlobal/ContextGlobal'

function CreateExercise(){
    const {
        setOpenModal
    } =React.useContext(ContextGlobal)
    return(
        <div>
            <h1>Agregar ejercicio</h1>
            <button 
            onClick={()=>{
                setOpenModal(state => !state) // Con este metodo puedo actualizar el modal en pantalla al darle  click, aparece o desaparece segun el caso
            }}
            >+</button>
        </div> 
    )
}

export { CreateExercise }