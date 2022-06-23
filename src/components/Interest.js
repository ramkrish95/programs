import React, { useState } from "react";
import "./programe.css";
const Interest =() => {
  const [InputNum, setInputNum] = useState({
    firstValue:([]),
    secondValue:([]),
    thirdValue:([])
})
        
const handleChange = (e) => {
  setInputNum({
      ...InputNum,
      [e.target.name]: e.target.value
  })
}
const handleSumbit = (e) => {
  e.preventDefault()
         let P=InputNum.firstValue;
         let T=InputNum.secondValue;
         let R=InputNum.thirdValue;

        let SI= (P*T*R)/100;
        document.getElementById('showresult1').innerHTML=(`The simple interest is = ${SI}`);
        let amount = P*Math.pow((1 +R/100),T );
        let CI = amount-P;
        document.getElementById('showresult2').innerHTML=(`The compound interest is = ${CI}`);

    }

  
  return (
    <div>
      <h1>SIMPLE AND COMPUND INTEREST</h1>
    <form onSubmit={handleSumbit}>
    <label htmlFor="firsValue">Principal Amount:</label>     
    <input
        type="number"
        name="firstValue"
        placeholder="Eneter the principal amount"
        value={InputNum.firstValue}
        onChange={handleChange}
    /><br/>
    <label htmlFor="secondValue">Time in months:</label>     
    <input type="number"
        name="secondValue"
        placeholder="Enter the period in months"
        value={InputNum.secondValue}
        onChange={handleChange}
    /><br/>
    <label htmlFor="thirdValue">Rate of interest:</label>     
    <input type="number"
        name="thirdValue"
        placeholder="Enter the rate"
        value={InputNum.thirdValue}
        onChange={handleChange}
    /><br/>
    <button>Submit</button>
</form>
<p>Result</p>
<p>=</p>
<h2 id="showresult1">-</h2>
<h2 id="showresult2">-</h2>
</div> 
  );
}

  export default Interest;