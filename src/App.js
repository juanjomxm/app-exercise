import React from "react";

import { IdealWeight } from "./CalculatorFitnes/IdealWeight";
import { BodyMass } from "./CalculatorFitnes/BodyMass";
import { BodyFatPorcentage } from "./CalculatorFitnes/BodyFatPorcentage";

import { ContainerListExercises } from "./ExerciseList/ContainerListExercises";
import { CreateExercise } from "./CreateExercise/CreateExercise";
import { CountExerciseTitle } from "./ExerciseList/CountExerciseTitle";
import { ListExercises } from "./ExerciseList/ListExercises";

import { ExerciseForm } from "./ExerciseForm/ExerciseForm";
import { Modal } from "./ModalGlobal/Modal";
import { ContextGlobal } from "./ContextGlobal/ContextGlobal";


function App() {
  const {
    exercises,
    loading,
    error,
    initExercise,
    exerciseCompleted,
    deletedExercise,
    openModal
} = React.useContext(ContextGlobal)

  return (
    <React.Fragment>
      {error && <p>Error</p>}      
      {/* {loading && <div className="loader-container"><div className="spinner"></div></div>} */}

      <div className="container-calculator-fitness-and-list-exercise">
        <div className="container-list-calculator">
          {/* Componente para el peso ideal */}
          <IdealWeight/>
          {/* Componente para indice de masa corporal (IMC) */}
          <BodyMass/>
          {/* Componente para % de grasa corporal */}
          <BodyFatPorcentage/>
        </div>

        <div className="container-all-list-exercise">
          <ContainerListExercises>
            <CreateExercise/>  
            {exercises.length >= 1 &&
              <React.Fragment>
                <CountExerciseTitle/>
              </React.Fragment>
            }
                    
            {initExercise.map(item => ( // Esta es la manera de trabajar con arrays, sus objetos y su manipulacion en react, despues de el componente, debemos indicar una key que concuerde con el objeto que se desea obtener. Al escribir el metodo para obetener el return no es en llaves si no en parentesis. Estoy ejecutando un estado derivado para poder filtrar el resultado que deseo
            <ListExercises
              key={item.text} 
              text={item.text} 
              completed={item.completed}
              onCompleted={() => exerciseCompleted(item.text)} // Se debe ejecutar como una funcion dentro de otra funcion para que no se rompa la aplicacion
              onDeleted={() => deletedExercise(item.text)} // Debo solucionar que al darle click no elimina el ejercicio seleccionado sino el primero de la lista
              />
            ))}
          </ContainerListExercises>
        </div>
      </div>

      {openModal && (
        <Modal>
          <ExerciseForm />
        </Modal>
      )}
    </React.Fragment>
  );
}

export {App}
