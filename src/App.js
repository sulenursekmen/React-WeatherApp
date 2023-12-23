import { useState } from "react";
import Form from "./components/Form";
import {Info} from "./components/Info";
import "./App.css";
function App() {
  const [info, setInfo] = useState([])
  const [state, setState] = useState(false);
  return (
    <div className="App">
    <div className="app-container">
           <Form  setInfo={setInfo} setState={setState}/>
      <Info info={info} state={state}/>
    </div>
 
    </div>
  );
}

export default App;
