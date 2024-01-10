import React from "react"
import { ContextGlobal } from "../ContextGlobal/ContextGlobal"

function ExerciseForm(){
    const{
        addExercise,
        setOpenModal
    }=React.useContext(ContextGlobal)
    const [newExerciseValue, setNewExerciseValue] = React.useState('')

    const OnSubmit = (event)=>{
        event.preventDefault()
        addExercise(newExerciseValue)
        setOpenModal(false)
    }

    const OnCancel = ()=>{
        setOpenModal(false)
    }

    const OnChange = (event)=>{
        setNewExerciseValue(event.target.value)
    }

    return(
        <form 
        style={styleFormExercise}
        onSubmit={OnSubmit}
        >
            <label style={styleLabelExercise}>Agregar ejercicio</label>
            <textarea
            style={styleTextExercise} 
            placeholder="Inicia tu rutina"
            value={newExerciseValue}
            onChange={OnChange}
            />
            <div>
                <button 
                style={styleButtonCancelExercise}
                type="button"
                onClick={OnCancel}
                >Cancelar</button>

                <button
                 style={styleButtonAddExercise}
                 type="submit"
                 >Agregar</button> 
            </div>
        </form>
    )
}
export { ExerciseForm }