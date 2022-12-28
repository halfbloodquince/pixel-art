import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Game from './pages/Game';
import { useState } from 'react';

function App() {

  const [mult, setMult] = useState(2)

  return (
    
    <BrowserRouter>
      <Routes>
                <Route path="/" element={<Home mult={mult} setMult={setMult} />} exact={true} />
                <Route path="/pixels" element={<Game mult={mult}/>} exact={true} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
