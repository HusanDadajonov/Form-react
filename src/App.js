
import { useState } from "react";
import Card from "./Components/Card/Card";
import Form from "./Components/Card/Form/Form";
function App() {
  const [inpVal,setInpVal] = useState("");
  const [fullnameVal,setFullnameVal] = useState("");
  const [monthVal,setMothVal] = useState("");
  const [yearVal,setYearVal] = useState("");

  let [str,setStr] = useState("");
  str+= inpVal;

  return (
    <div className="card-form">
      <Card  inpVal = {inpVal}
        str = {str} 
        fullnameVal = {fullnameVal} 
        monthVal = {monthVal} 
        yearVal = {yearVal}
      />
      <Form 
        setInpVal = {setInpVal} 
        str = {str} 
        setFullnameVal = {setFullnameVal} 
        setMothVal = {setMothVal} 
        setYearVal = {setYearVal} 
        inpVal = {inpVal}
        fullnameVal = {fullnameVal}
      />  
    </div>
  );
}

export default App;
