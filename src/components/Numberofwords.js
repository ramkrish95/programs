import React, { useState } from "react";
import "./programe.css";
const Numberofwords =() => {
  const [string, setString] = useState('');
  const [isDisplay, setDisplay] = useState(true);
        
    const handleChange = (e) =>{
         setDisplay(false);
         setString(e.target.value);
    }
    const Countwords = () =>{
         setDisplay(true);
         let temp=string.split(' ');
         temp=temp.filter(word => word !== '').length;
         setString(temp);
        
    }
  return (
    <div>
      <h1>NUMBER OF WORDS</h1>
      <input type="text" placeholder="Enter the words..."onChange={handleChange}/><br/>
      <button  onClick={Countwords}>Submit</button>
      <p>Total Words</p>
      <p>=</p>
      <h2>{isDisplay && string}</h2>
    </div> 
  );
}


  export default Numberofwords;