import {useState, useEffect} from 'react';
import centro from '../images/centro.png';
import playa from '../images/playa.png';
import versalles from '../images/versalles.png';
import pnuevo from '../images/pnuevo.png';
import paltas from '../images/paltas.png';
import naranjal from '../images/naranjal.png';
import oeste from '../images/oeste.png';

function MeanCP({cp}){
    //Esta constante es para los datos cargados de la api
    const [data,setData] = useState(null);

    useEffect(()=>{
        if (!cp)return;
        fetch(`https://data-analitics.onrender.com/mean_precio_cp?cp=${cp}`).then((response)=>response.json()).then(
            (data)=>setData(data)).catch((err)=> console.error("Error al obtener datos:", err));
    },[cp]);
    //Esto es para incorporar una imagen del Consejo Popular
    const useImage=()=>{
        switch(cp){
            case 'Playa':
                return <img src={playa} className="w-full max-w-3xl h-auto rounded-xl border-2 border-scale"/>
            case 'Matanzas Este':
                return <img src={centro} className="w-full max-w-3xl h-auto rounded-xl border-2 border-scale"/>
            case 'Matanzas Oeste':
                return <img src={oeste} className="w-full max-w-3xl h-auto rounded-xl border-2 border-scale"/>
            case 'Naranjal':
                return <img src={naranjal} className="w-full max-w-3xl max-w-3xl h-auto rounded-xl border-2 border-scale"/>
            case 'Pueblo Nuevo':
                return <img src={pnuevo} className="w-full max-w-3xl h-auto rounded-xl border-2 border-scale"/>
            case 'Peñas Altas':
                return <img src={paltas} className="w-full max-w-3xl h-auto rounded-xl border-2 border-scale"/>
            case 'Versalles':
                return <img src={versalles} className="w-full max-w-3xl h-auto rounded-xl border-2 border-scale"/>
        };
    };

    return(
        <>
            <div className="grid- grid-cols-1 justify-items-center">
                <h3 className="text-3xl font-bold">Mean for the CP</h3>
                <div>
                    {data ? (
                        <div className="flex flex-col items-center justify-center bg-gradient-to-br from-black-800 to-slate-500 m-4 w-60 h-40 rounded-lg border-2 border-indigo-600">
                            <p className="text-3xl font-bold text-center whitespace-normal animate-pulse">{data.Consejo_Popular} : </p>
                            <p className="text-3xl font-bold text-center whitespace-normal animate-pulse">{data.precio_promedio}</p>
                            
                        </div>
                    ): (
                        <p className="text-3xl font-bold">Cargando datos...</p>
                    )}
                </div>
                <h1 className="font-sans text-center font-bold text-3xl m-3">Location</h1>
                {useImage()}
            </div>
        </>
    );
}
export default MeanCP;