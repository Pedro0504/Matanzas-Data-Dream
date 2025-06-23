import { useState,useEffect } from "react";


function FreTracer(){
    //Datos de frecuencia
    const[fredata, setFredata] = useState('');
    useEffect(()=>{
        fetch('https://data-analitics.onrender.com/frecuency').then((response)=>response.json()).then(
            (data)=>{setFredata(data)}).catch((err)=>console.error('Error al cargar datos:', err));
    },[])
    //Datos de varianza y desviación
    const[vardata, setVarData]=useState('');
    useEffect(()=>{
        fetch('https://data-analitics.onrender.com/varianza').then((response)=>response.json()).then(
            (data)=>{setVarData(data)}
        ).catch((err)=>console.error('Error al cargar los datos:', err));
    },[])

    return (
        <div className="text-2xl font-bold m-2">
            <div className="grid grid-cols-2 border-2 border-black rounded-xl">
                <div >
                    <h1 className="text-3xl m-2">Absolute Frecuency</h1>
                    <ul className="m-2">
                        {fredata.Frecuencia_absoluta &&
                        Object.entries(fredata.Frecuencia_absoluta).map(([key, value])=>(
                        <li key={key}>
                            {key}:{value}
                        </li>))}
                    </ul>
                </div>
                <div>
                    <h1 className="text-3xl m-2">Relative Frecuency</h1>
                    <ul className="m-2">
                        {fredata.Frecuencia_relativa && Object.entries(fredata.Frecuencia_relativa).map(([key,value])=>(
                            <li key={key}>{key}:{value.toFixed(2)}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <h1 className="text-3xl text-center m-2">Relative Frequency Shart</h1>
            <div className="flex justify-center items-center m-4">
                <img src='https://data-analitics.onrender.com/graph' alt="Gráfica de frecuencia" className="border-2 rounded shadow-lg max-w-full h-auto"/>
            </div>
            <div className="grid grid-cols-2 justify-center text-center border-2 border-scale rounded-xl">
                <h1>Variance</h1>
                <p>{Number(vardata.Varianza)?.toFixed(2)}</p>
                <h1>Standard Deviation</h1>
                <p>{Number(vardata.Standard_Deviation)?.toFixed(2)}</p>
            </div>
        </div>
    );
};
export default FreTracer;