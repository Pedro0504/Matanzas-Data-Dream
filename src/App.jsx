import {useState, useEffect} from 'react';

import ConsejoList from './components/ConsejoList.jsx';
import About from './components/About.jsx';
import Home from './components/Home.jsx';
import axios from 'axios';
import mtz from './images/mtz.png';

function App() {
  //Necesito crear varios apartados para que no quede el contenido cargado
  const [wind, setWind]= useState('');
  const appShow=()=>{
    switch(wind){
      case 'home':
        return <Home/>;
      case 'counting':
        return <ConsejoList/>;
      case 'about':
        return <About/>;
      default:
        return <Home/>
    };
  };

  return (
    <>
      <div className ="min-h-screen bg-gradient-to-br from-zinc-700 to-slate-950 text-white p-6 font-sans">
        <div className="flex justify-end">
          <button onClick={()=>setWind('home')} className ="font-bold bg-black w-20 h-10 rounded-md m-2 focus:ring-2">HOME</button>
          <button onClick={()=>setWind('about')} className ="font-bold bg-black w-20 h-10 rounded-md m-2 focus:ring-2">ABOUT</button>
          <button onClick={()=>setWind('counting')} className ="font-bold bg-black w-20 h-10 rounded-md m-2 focus:ring-2">DATA</button>
        </div>
        <div className = "h-64 bg-cover bg-center mb-6 rounded-lg shadow-lg"
        style={{backgroundImage:`linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.3)), url(${mtz})`}}>
          <div className="h-full flex items-center justify-center">
            <h1 className="text-white text-6xl font-bold font-sans">MATANZAS AND THE DATA ANALYSIS</h1>
          </div>
        </div>
        {appShow()}
      </div>
    </>
  );
}

export default App;
