import React from "react";
import { ContextGlobal } from "../ContextGlobal/ContextGlobal";

function ListExercises(props){ // Creando un complemento que por dentro lleva los elementos que se mostraran en el navegador y se podran reutilizar si es necesario

    return(
        <div className="container-list-exercise">
          <input
            id="input-exercise"
            type="checkbox"
            name="exercise"
            checked={props.completed}
            onChange={() => props.onCompleted(props.text)}
          />

          <label htmlFor='input-exercise'>{props.text}</label>

          <button
            className="button-delete-exercise"
            onClick={() => props.onDeleted(props.text)}
          >
            X
          </button>
        </div>
    )
}
  
export { ListExercises }