import React, { useState } from "react";
import "./programe.css";
const Primenumber =() => {
  const [number, setNumber] = useState();

    const handleChange = (e) =>{
         setNumber(e.target.value);
    }
    const Prime = () =>{
         let num=number;
         var i;
         var prime = true; 

         for(i = 2; i <= num - 1; i++) 
    if (num % i == 0) {
        prime = false;
        break;
    }
if (prime == true)
{
  document.getElementById('showresult').innerHTML=(`${num} is a Prime number` );
}
else
{
  document.getElementById('showresult').innerHTML=(`${num} is not a Prime number` )
}

    }
  return (
    <div>
      <h1>FIND PRIME NUMBER</h1>
      <input type="number" placeholder="Enter a number..."onChange={handleChange}/><br/>
      <button  onClick={Prime}>Submit</button>
      <p>Result</p>
      <p>=</p>
      <h2 id="showresult">-</h2>
     
    </div> 
  );
}


  export default Primenumber;

