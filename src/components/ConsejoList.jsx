import { useEffect, useState } from 'react';
import MeanCP from './MeanCP.jsx';
import PriceEvo from './PriceEvo.jsx';
import FreTracer from './FreTracer.jsx';

export default function ConsejoList(){
    //Apartado para las funciones de la media de precio por barrio.
    const [cpInput, setCpInput] = useState('');
    const [cpFetch, setCpFetch] = useState(null);

    const handleBuscar=()=>{
        if(cpInput!==''){
        setCpFetch(cpInput);
        }
    };

return (
    <div>
        <div className="grid grid-cols-2">
            <div className="grid justify-items-center border-2 border-scale rounded-xl m-2">
                <PriceEvo/>
            </div>
            <div className ="grid justify-items-center border-2 border-scale rounded-xl m-2">
                <div className="text-2xl font-bold flex items-center justify-center m-8">Fetch the price mean by Consejo Popular...</div>
                <input type='text' value={cpInput} onChange={(e)=>setCpInput(e.target.value)} placeholder='Consejo Popular' className="border border-gray-300 rounded px-3 py-2 mr-2 w-60 h-10 m-2"></input>
                <button onClick={handleBuscar} className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-900 w-60 h-10 m-2">FETCH</button>
                {cpFetch && <MeanCP cp={cpFetch}/>}
            </div>
        </div>
        <FreTracer/>
    </div>
);
}