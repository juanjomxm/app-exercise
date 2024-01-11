import React from "react";

import { CreateExercise } from "./CreateExercise/CreateExercise";
import { CountExerciseTitle } from "./ExerciseList/CountExerciseTitle";
import { SearchExercise } from "./ExerciseList/ListExercises";
import { ContainerListExercises } from "./ExerciseList/ContainerListExercises";
import { ListExercises } from "./ExerciseList/ListExercises";
import { Modal } from "./ModalGlobal/Modal";
import { ExerciseForm } from "./ExerciseForm/ExerciseForm";
import { ContextGlobal } from "./ContextGlobal/ContextGlobal";


function App() {
  const {
    loading,
    error,
    searchedExercise,
    exerciseCompleted,
    totalExercise,
    deletedExercise,
    openModal
} = React.useContext(ContextGlobal)

  return (
    <React.Fragment>
      <CreateExercise/>
            {openModal && (
                <Modal>
                    <ExerciseForm />
                </Modal>
            )}
            
            {totalExercise &&
            <React.Fragment>
              <SearchExercise />
              <CountExerciseTitle/>
            </React.Fragment>
            }
            
            <ContainerListExercises>
                {loading && <div className="loader-container"><div className="spinner"></div></div>}
                {error && <p>Error</p>}
                {(!loading && searchedExercise.length === 0) && <p className="text-init-exercise">Inicia tu rutina</p>}

                {searchedExercise.map(item => ( // Esta es la manera de trabajar con arrays, sus objetos y su manipulacion en react, despues de el componente, debemos indicar una key que concuerde con el objeto que se desea obtener. Al escribir el metodo para obetener el return no es en llaves si no en parentesis. Estoy ejecutando un estado derivado para poder filtrar el resultado que deseo
                <ListExercises
                    key={item.text} 
                    text={item.text} 
                    completed={item.completed}
                    onCompleted={() => exerciseCompleted(item.text)} // Se debe ejecutar como una funcion dentro de otra funcion para que no se rompa la aplicacion
                    onDeleted={() => deletedExercise(item.text)} // Debo solucionar que al darle click no elimina el ejercicio seleccionado sino el primero de la lista
                    />
                    ))}
            </ContainerListExercises>
    </React.Fragment>
  );
}

export {App}
