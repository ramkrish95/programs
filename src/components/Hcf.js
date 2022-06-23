import React, { useState } from "react";
import "./programe.css";
const Hcf =() => {
  const [InputNum, setInputNum] = useState({
    firstValue:([]),
    secondValue:([])
})
        
const handleChange = (e) => {
  setInputNum({
      ...InputNum,
      [e.target.name]: e.target.value
  })
}
const handleSumbit = (e) => {
  e.preventDefault()
         let num1=InputNum.firstValue;
         let num2=InputNum.secondValue;
         let hcf;

         // looping from 1 to number1 and number2
         for (let i = 1; i <= num1 && i <= num2; i++) {
         
             // check if is factor of both integers
             if( num1 % i == 0 && num2 % i == 0) {
                 hcf = i;    
             }
         }
         document.getElementById('showresult').innerHTML=(`HCF of ${num1} and ${num2} is = ${hcf}`);
    }

  
  return (
    <div>
      <h1>FIND HCF OF GIVEN TWO NUMBERS</h1>
    <form onSubmit={handleSumbit}>
    <input
        type="number"
        name="firstValue"
        placeholder="Eneter the first number"
        value={InputNum.firstValue}
        onChange={handleChange}
    />
    <input type="number"
        name="secondValue"
        placeholder="Enter the second number"
        value={InputNum.secondValue}
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

  export default Hcf;