import "./App.css";
import Modal from "./components/Modal";
import { useState } from "react";

function App() {

  const [ openModal, setOpenModal] = useState(false);



  return ( 
    <div className="App">
      <button className= "openModalBtn" onClick={() => {setOpenModal(true);}}>Show popup</button>
      {openModal  && <Modal closeModal={setOpenModal}  saveModal={setOpenModal}/>}
    
    </div>
  );
}

export default App;
