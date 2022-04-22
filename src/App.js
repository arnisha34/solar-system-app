import {Routes, Route} from 'react-router-dom'
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Planets from "./components/Planets";
import Planet from './components/Planet';

import { planetData } from './planetData';

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
    <div className="App">
      <Header planets={planets} isActive={isActive} setIsActive={setIsActive} activeLink={activeLink} toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} setActiveButton={setActiveButton}/>
      <Routes>
        <Route path="/" exact element={<Planets planets={planets} isActive={isActive} activeLink={activeLink} toggleMenu={toggleMenu} setActiveButton={setActiveButton}/>}/>
        <Route path="planet/:name" element={<Planet planets={planets} isActive={isActive} setIsActive={setIsActive} activeLink={activeLink} toggleMenu={toggleMenu} activeButton={activeButton} setActiveButton={setActiveButton}/>}/>
      </Routes>
    </div>
  );
}

export default App;
