import React from "react";
import axios from "axios";

function IdealWeight(){
    const [dataWeigtht, setDataWeigtht] = React.useState([])
    const [viewResult, setViewResult] = React.useState(false)
    const [inputGender, setInputGender] = React.useState('')
    const [inputHeight, setInputHeight] = React.useState('')

    const mapGender = {
       'hombre': 'male',
       'mujer': 'female'
    }
    const translatedGender = mapGender[inputGender] || inputGender

    const viewIdealWeigtht = axios.create({
        baseURL: 'https://fitness-calculator.p.rapidapi.com/idealweight',
        params: {
            gender: translatedGender, 
            height: inputHeight 
          },
          headers: {
            'X-RapidAPI-Key': '6c1967e5d3msh3257be7d6cac589p1ff725jsnbccdc806cd80',
            'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
          }
    })

    const weight = async()=>{
        const {data, status} = await viewIdealWeigtht.get()

        try{
            if(status === 200,201){
                setDataWeigtht(data.data.Hamwi)
                setViewResult(true)
            }
        }catch(error){
            console.warn(error)
        }
    }

    return(
        <div className="ideal-weigtht">
            <h2>Peso ideal</h2>
            
            <input
            placeholder="hombre o mujer"
            value={inputGender}
            onChange={(event)=>{
                setInputGender(event.target.value)
            }}
            />

            <input
            type="number"
            placeholder="estatura"
            value={inputHeight}
            onChange={(event)=>{
                setInputHeight(event.target.value)
            }}
            />

            <button
            onClick={weight}
            >Calcular</button>

            {viewResult && <p>Tu peso ideal seria de: {dataWeigtht}kg a {inputHeight.slice(-2)}kg</p>}
            {/* Con este metodo: .slice(-2) puedo obtener y renderizar los ultimos dos digitos de la estatura que se ingreso */}
        </div>
    )
}

export { IdealWeight }