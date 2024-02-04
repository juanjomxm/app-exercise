import React from "react";
import axios from "axios";

function BodyFatPorcentage(){
    const [dataPorcentage, setDataProcentage] = React.useState([])
    const [translatedCategory, setTranslatedCategory] = React.useState([])
    const [viewResult, setViewResult] = React.useState(false)

    const [inputAge, setInputAge] = React.useState('')
    const [inputGender, setInputGender] = React.useState('')
    const [inputWeigtht, setInputWeigtht] = React.useState('')
    const [inputHeight, setInputHeight] = React.useState('')
    const [inputNeck, setInputNeck] = React.useState('')
    const [inputWaist, setInputWaist] = React.useState('')
    const [inputHip, setInputHip] = React.useState('')

    const mapGender = {
        'hombre': 'male',
        'mujer': 'female'
     }
     const translatedGender = mapGender[inputGender] || inputGender

    const viewPorcentage = axios.create({
        baseURL: 'https://fitness-calculator.p.rapidapi.com/bodyfat',
        params: {
            age: inputAge,
            gender: translatedGender,
            weight: inputWeigtht,
            height: inputHeight,
            neck: inputNeck,
            waist: inputWaist,
            hip: inputHip
          },
          headers: {
            'X-RapidAPI-Key': '6c1967e5d3msh3257be7d6cac589p1ff725jsnbccdc806cd80',
            'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
          }
    })

    const translateBodyFatCategory = (category) => {
        const translations = {
          "Underfat": "Bajo en grasa",
          "Healthy": "Saludable",
          "Overfat": "Sobrepeso",
          "Obese": "Obeso",
          "Fitness": "Atleta",
          "Average": "Promedio",
          "Athletes": "Atleta"
        };
    
        return translations[category] || category;
      }

    const petitionFatProcentage = async()=>{
        const {data, status} = await viewPorcentage.get()
        try{
            if(status === 200, 201){
                setDataProcentage(data.data)
                setTranslatedCategory(translateBodyFatCategory(data.data['Body Fat Category']))
                setViewResult(true)
                console.log(data)
            }
        }catch(error){
            console.warn(error)
        }
    }

    return(
        <div className="body-fat-porcentage">
            <h2>% de grasa corporal</h2>

            <input
            placeholder="edad"
            type="number"
            value={inputAge}
            onChange={(event)=>{
                setInputAge(event.target.value)
            }}
            />

            <input
            placeholder="hombre o mujer"
            type="text"
            value={inputGender}
            onChange={(event)=>{
                setInputGender(event.target.value)
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

            <input
            placeholder="medida cuello"
            type="number"
            value={inputNeck}
            onChange={(event)=>{
                setInputNeck(event.target.value)
            }}
            />

            <input
            placeholder="medida cintura"
            type="number"
            value={inputWaist}
            onChange={(event)=>{
                setInputWaist(event.target.value)
            }}
            />

            <input
            placeholder="medida cadera"
            type="number"
            value={inputHip}
            onChange={(event)=>{
                setInputHip(event.target.value)
            }}
            />

            <button 
            onClick={petitionFatProcentage}
            >Calcular</button>

            {viewResult && (
                <ul>
                    <li>Grasa Corporal: {dataPorcentage['Body Fat (BMI method)']}</li>
                    <li>Categoria: {translatedCategory}</li>
                    <li>Masa de Grasa Corporal: {dataPorcentage['Body Fat Mass']}</li>
                    <li>Masa Corporal Magra: {dataPorcentage['Lean Body Mass']}</li>
                </ul>
            )}
        </div>
    )
}

export { BodyFatPorcentage }