import React from "react";
import { ContextGlobal } from "../ContextGlobal/ContextGlobal";

function SearchExercise(){
    const {
      searchExercise,
      setSearchExercise
    } = React.useContext(ContextGlobal)
  
    return(
      <div>
        <input 
        className="input-search-exercise"
        placeholder="Buscar ejercicio"
        value={searchExercise}
        onChange={(eventSearch)=>{
        setSearchExercise(eventSearch.target.value)
      }} 
      />
      </div>
    )
}
  
  function ListExercises(props){ // Creando un complemento que por dentro lleva los elementos que se mostraran en el navegador y se podran reutilizar si es necesario
      return(
        <div className="container-list-exercise">
          <input
          id="input-exercise" 
          type="checkbox" 
          name="exercise"
          onClick={props.onCompleted}
          />
        
          <label 
          htmlFor='input-exercise'
          >{props.text}</label>
  
          <button
          className="button-delete-exercise"
          onClick={props.onDeleted}
          >X</button>
        </div>
      )
  }
  
  export { SearchExercise }
  export { ListExercises }