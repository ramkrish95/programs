import React, { useState } from "react";
import "./programe.css";
const Amicable =() => {
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
         let fact=InputNum.firstValue;
         let total=InputNum.secondValue;
         var sum = 0;
 for(let i = 1; i < fact; i++) {

if(fact % i == 0 ) {
  sum += i;
}
if(sum == total)
{
  document.getElementById('showresult').innerHTML=(`${fact} and ${total} are Amicable numbers`);
}
else
{
  document.getElementById('showresult').innerHTML=(`${fact} and ${total} are  not Amicable numbers`)
}

    }
  }
  return (
    <div>
      <h1>amicable numbers</h1>
    <form onSubmit={handleSumbit}>
    <input
        type="number"
        name="firstValue"
        placeholder="Enter the number or the sum of the factors"
        value={InputNum.firstValue}
        onChange={handleChange}
    />
    <input type="number"
        name="secondValue"
        placeholder="Enter the number or the sum of the factors"
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

  export default Amicable;