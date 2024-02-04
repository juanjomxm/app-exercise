import React from "react";
import axios from "axios";

function BodyMass(){
    const [dataBodyMas, setDataBodyMas] = React.useState([])
    const [viewResult, setViewResult] = React.useState(false)
    const [inputAge, setInputAge] = React.useState('')
    const [inputWeigtht, setInputWeigtht] = React.useState('')
    const [inputHeight, setInputHeight] = React.useState('')


    const viewBodyMas = axios.create({
        baseURL: 'https://fitness-calculator.p.rapidapi.com/bmi',
        params: {
            age: inputAge,
            weight: inputWeigtht,
            height: inputHeight
          },
          headers: {
            'X-RapidAPI-Key': '6c1967e5d3msh3257be7d6cac589p1ff725jsnbccdc806cd80',
            'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
          }
    })

    const translateHealthStatus = (healthStatus) => {
        const healthStatusMapping = {
          'Severe Thinness': 'Delgadez Severa',
          'Underweight': 'Bajo peso',
          'Normal': 'Normal',
          'Overweight': 'Sobrepeso',
          'Obese Class I (Moderate)': 'Obeso Clase I (Moderado)',
          'Obese Class II (Severe)': 'Obeso Clase II (Severo)',
          'Obese Class III (Very Severe)': 'Obeso Clase III (Muy Severo)',
        }
        return healthStatusMapping[healthStatus] || healthStatus
    }

    const petitionBodyMass = async()=>{
        const {data, status} = await viewBodyMas.get()
        try{
            if(status === 200, 201){
                setDataBodyMas(data.data)
                setViewResult(true)
            }
        }catch(error){
            console.warn(error)
        }
    }

    return(
        <div className="body-mass">
            <h2>Indice de masa corporal(IMC)</h2>
            <input
            placeholder="edad"
            type="number"
            value={inputAge}
            onChange={(event)=>{
                setInputAge(event.target.value)
            }}
            />

            <input
            placeholder="peso"
            type="number"
            value={inputWeigtht}
            onChange={(event)=>{
                setInputWeigtht(event.target.value)
            }}
            />

            <input
            placeholder="estatura"
            type="number"
            value={inputHeight}
            onChange={(event)=>{
                setInputHeight(event.target.value)
            }}
            />

            <button
            onClick={petitionBodyMass}
            >Calcular</button>
            
            {viewResult && (
                <ul>
                    <li>(IMC) = {dataBodyMas.bmi}</li>
                    <li>Salud = {translateHealthStatus(dataBodyMas.health)}</li>
                    <li>Rango de IMC saludable = {dataBodyMas.healthy_bmi_range}</li>
                </ul>
            )}
        </div>
    )
}

export { BodyMass }