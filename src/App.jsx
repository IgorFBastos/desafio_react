import { useState } from 'react'
import './App.css'

function App() {

  const [selectedPant, setSelectedPant] = useState("");
  const [selectedShirt, setSelectedShirt] = useState("");
  const [selectedsocks, setSelectedSocks] = useState("");


  const setClothingType = (type, item) => {

    if(type == 'Calças') {
      setSelectedPant(item);
    }

    if(type == 'Camisetas') {
      setSelectedShirt(item);
    }

    if(type == 'Meias') {
      setSelectedSocks(item);
    }
  }

  const submitButtonClicked = () => {
    alert(`Calça: ${selectedPant} - Camiseta: ${selectedShirt} - Meia: ${selectedsocks}`);
  }

  return (
    <div className='container'>

      <h1>Seleção de Roupas</h1>

      <div>
        <h2>Calças</h2>
        <button className={(selectedPant == "A") ? "selected" : ""} onClick={() => setClothingType("Calças", "A")}>A</button>
        <button className={(selectedPant == "B") ? "selected" : ""} onClick={() => setClothingType("Calças", "B")}>B</button>
        <button className={(selectedPant == "C") ? "selected" : ""} onClick={() => setClothingType("Calças", "C")}>C</button>
      </div>

      <div>
        <h2>Camisetas</h2>
        <button className={(selectedShirt == "A") ? "selected" : ""} onClick={() => setClothingType("Camisetas", "A")}>A</button>
        <button className={(selectedShirt == "B") ? "selected" : ""} onClick={() => setClothingType("Camisetas", "B")}>B</button>
        <button className={(selectedShirt == "C") ? "selected" : ""} onClick={() => setClothingType("Camisetas", "C")}>C</button>
      </div>

      <div>
        <h2>Meias</h2>
        <button className={(selectedsocks == "A") ? "selected" : ""} onClick={() => setClothingType("Meias", "A")}>A</button>
        <button className={(selectedsocks == "B") ? "selected" : ""} onClick={() => setClothingType("Meias", "B")}>B</button>
        <button className={(selectedsocks == "C") ? "selected" : ""} onClick={() => setClothingType("Meias", "C")}>C</button>
      </div>


      <div>
        <h2>Final</h2>
        <button onClick={submitButtonClicked}>Submeter</button>
      </div>
    </div>
  )
}

export default App
