import {useState, useEffect} from 'react';

function PriceEvo(){
    const [yearSelected, setYearSelected]= useState('');
    const [yearFetch, setYearFetch]= useState(null);

    const handleYearS =()=>{
        if(yearSelected !==''){
            setYearFetch(yearSelected);
        }
    };

    const [prices, setPrices]= useState(null);
    useEffect(()=>{
        if(!yearFetch) return;
        fetch(`https://data-analitics.onrender.com/mean_year?year=${yearFetch}`).then(
            (response)=>response.json()
        ).then((data)=>{setPrices(data)}).catch((err)=>console.error('Error al obtener datos:', err));
    },[yearFetch])
    return (
        <div className ="grid grid-cols-1 justify-items-center">
            <h1 className="text-2xl font-bold flex items-center justify-center m-8">Select a year between 2013-2025</h1>
            <input value={yearSelected} onChange={(e)=>setYearSelected(e.target.value)} className="border border-gray-300 rounded px-3 py-2 mr-2 w-60 h-10 m-2" type="string" placeholder='Year'></input>
            <button onClick={handleYearS} className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-900 w-60 h-10 m-2">FETCH</button>
            {prices && (
                <div>
                    <p className="font-sans text-3xl text-center font-bold">Mean for the Year</p>
                    <div className="flex flex-col items-center justify-center bg-gradient-to-br from-black-800 to-slate-500 m-4 w-60 h-40 rounded-lg border-2 border-indigo-600">
                        <p className="text-3xl font-bold text-center whitespace-normal animate-pulse">{prices.year} :</p>
                        <p className="text-3xl font-bold text-center whitespace-normal animate-pulse">{prices.precio_promedio ?? 'Dato no disponible'}</p>
                    </div>
                </div>
            )}
        { prices && (
            <div>
                <p className="font-sans text-3xl text-center font-bold">Observation</p>
                <p className="font-sans text-2xl text-center font-bold whitespace-normal m-2">There was a period, between 2013 and 2020 that presented higher values in the market, after the year 2020, the adoption of a single coin system, the prices began to drop, in the 2022 was the last spike, probably because the migration of the population. You can check it out here.</p>
            </div>)}
        </div>
    );

}
export default PriceEvo;