import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const ContextGlobal = React.createContext()

function ExerciseProvider({children}){

    // ESTADOS
  const {
    item: exercises, 
    saveItem: saveExercises,
    loading,
    error
  } = useLocalStorage('work-out', []) // Le estoy diciendo que el estado inicial es el array con objetos

  const [openModal, setOpenModal] = React.useState(false) // Para abrir el portal de manera manual seria cambiando el estado de un false a un true

  const initExercise = exercises.filter(item => item)

  // ESTADOS DERIVADOS

  const completedExercise = exercises.filter(item => item.completed).length // Esto es un estado derivado, son variables, calculos etc, que hacemos a traves de un estado, tambien con el metodo filter le estoy diciendo que me devuelva los elementos que cumplan con la condicion
  const totalExercise = exercises.length

  // Funcion para agregar el ejercicio
  const addExercise = (text)=>{
    const newExercise =[...exercises]
    newExercise.push({
      text,
      completed: false
    })
    saveExercises(newExercise)
  }

  // Al dar clik en esta funcion el ejercicio aparecera como completado
  const exerciseCompleted = (text)=>{
    const newExercise =[...exercises]
     const exerciseIndex = newExercise.findIndex(
      (item) => item.text == text
     )
    newExercise[exerciseIndex].completed = true
    saveExercises(newExercise)
  }

  // Funcion para eliminar el ejercicio
  const deletedExercise = (text)=>{
    const newExercise = [...exercises]
    const exerciseIndex = newExercise.findIndex(
      (item) => item.text == text
     )
    newExercise[exerciseIndex].completed = true
    newExercise.splice(exerciseIndex, 1)
    saveExercises(newExercise)
  }

    return(
        <ContextGlobal.Provider value={{
            exercises,
            loading,
            error,
            initExercise,
            completedExercise,
            totalExercise,
            exerciseCompleted,
            deletedExercise,
            openModal,
            setOpenModal,
            addExercise
        }}>
            {children}
        </ContextGlobal.Provider>
    )
}

export { ContextGlobal }
export { ExerciseProvider }