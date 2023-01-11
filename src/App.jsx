import './App.css'
import { BrowserRouter, Route, Routes, createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home';
import Game from './pages/Game';
import { useState } from 'react';

function App() {

  const [mult, setMult] = useState(5)

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home mult={mult} setMult={setMult} />
    },
    {
      path: "/app/",
      element: <Game mult={mult} />
    },
  ])

  return (

    <div className="app">
      <RouterProvider router={router} />
    </div>
    
    // <BrowserRouter>
    //   <Routes>
    //             <Route path="/" element={<Home mult={mult} setMult={setMult} />} exact={true} />
    //             <Route path="/pixels" element={<Game mult={mult}/>} exact={true} />
    //   </Routes>
    // </BrowserRouter>
  )
}

export default App
