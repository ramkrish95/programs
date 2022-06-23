import React, { useState } from "react";
import "./programe.css";
const Anagram =() => {
  const [InputText, setInputText] = useState({
    firstValue: " ",
    secondValue: " "
})
        
const handleChange = (e) => {
  setInputText({
      ...InputText,
      [e.target.name]: e.target.value
  })
}
const handleSumbit = (e) => {
  e.preventDefault()

        let temp1=InputText.firstValue;
        let temp2=InputText.secondValue;
         let len1 =temp1.length;
         let len2 =temp2.length;

   if(len1 !== len2){
        document.getElementById('showresult').innerHTML='Strings length are not equal';
      return
   }
   let str1 = temp1.split('').sort().join('');
   let str2 = temp2.split('').sort().join('');
   
   if(str1 === str2){
    document.getElementById('showresult').innerHTML="Given strings are Anagram";
   } 
   else { 
    document.getElementById('showresult').innerHTML="Given strings are not Anagram";
   }
      
    }
  return (
    <div>
      <h1>CHECK ANAGRAM</h1>
      <form onSubmit={handleSumbit}>
             <label htmlFor="firstValue">Eneter the first string:</label>
                <input
                    type="text"
                    name="firstValue"
                    placeholder="Eneter the first string"
                    value={InputText.firstValue}
                    onChange={handleChange}
                /><br/>
             <label htmlFor="econdValue">Eneter the second string:</label>
                <input type="text"
                    name="secondValue"
                    placeholder="Eneter the second string"
                    value={InputText.secondValue}
                    onChange={handleChange}
                /><br/>
                <button>Submit</button>
            </form>
      <p>Result</p>
      <p>=</p>
      <h2 id="showresult">-</h2>
    </div> 
  );
}


  export default Anagram;