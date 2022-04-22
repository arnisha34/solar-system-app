import {Routes, Route} from 'react-router-dom'
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Planets from "./components/Planets";
import Planet from './components/Planet';

import { planetData } from './planetData';

import { Context } from './components/Context';


function App() {
  
  const [planets, setPlanets] = useState([])
  const [isActive, setIsActive] = useState("")
  const [toggleMenu, setToggleMenu] = useState(false)
  const [activeButton, setActiveButton] = useState("overview")
  
  
  useEffect(() => {
    let planet = planetData.map(planet => planet)
    setPlanets(planet)
  },[])

  const activeLink = (name) => {
    setIsActive(name)
}

  return (
    <Context.Provider value={{planets, setPlanets, isActive, setIsActive, toggleMenu, setToggleMenu, activeButton, setActiveButton, activeLink}}>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" exact element={<Planets/>}/>
          <Route path="planet/:name" element={<Planet/>}/>
        </Routes>
      </div>
    </Context.Provider>
  );
}

export default App;
