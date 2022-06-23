import React, { useState } from "react";
import "./programe.css";
const Countvowels =() => {
  const [string, setString] = useState('');
  const [isDisplay, setDisplay] = useState(true);
        
    const handleChange = (e) =>{
         setDisplay(false);
         setString(e.target.value);
    }
    const CountVowel = () =>{
         setDisplay(true);
         let temp=string;
         temp=temp.match(/[aeiou]/gi,'').length;
         setString(temp);
    }
  return (
    <div>
      <h1>COUNT VOWELS</h1>
      <input type="text" placeholder="Enter the words..."onChange={handleChange}/><br/>
      <button  onClick={CountVowel}>Submit</button>
      <p>Result</p>
      <p>=</p>
      <h2>Total Vowel count is = {isDisplay && string}</h2>
    </div> 
  );
}


  export default Countvowels;