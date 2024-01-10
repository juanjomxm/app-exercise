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
        className="form-add-exercise" 
        onSubmit={OnSubmit}
        >
            <div className="text-add-exercise">
                <textarea
                className="text-area-exercise"
                placeholder="Inicia tu rutina"
                value={newExerciseValue}
                onChange={OnChange}
                />
            </div>

            <div className="container buttons">
                <button
                className="button-cancel"
                type="button"
                onClick={OnCancel}
                >Cancelar</button>

                <button
                className="button-add"
                 type="submit"
                 >Agregar</button> 
            </div>
        </form>
    )
}
export { ExerciseForm }