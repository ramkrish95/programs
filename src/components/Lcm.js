import React, { useState } from "react";
import "./programe.css";
const Lcm =() => {
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
      
      function findLCM(num1, num2){
      let maxNumber = Math.max(num1, num2);
      let minNumber = Math.min(num1, num2);
      
      let i = maxNumber;
      while(i % minNumber !== 0){
        i += maxNumber;
      }
      return i;
      }
      const result=findLCM(num1, num2);
      document.getElementById('showresult').innerHTML=(`LCM of ${num1} and ${num2} is = ${result}`);;
    }
 
  return (
    <div>
      <h1>FIND LCM OF GIVEN TWO NUMBERS</h1>
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

  export default Lcm;