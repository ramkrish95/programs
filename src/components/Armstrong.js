import React, { useState } from "react";
import "./programe.css";
const Armstrong =() => {
  const [number, setNumber] = useState();
        
    const handleChange = (e) =>{
         setNumber(e.target.value);
    }
    const Astrong = () =>{
         let temp=number;
         var arm=0;
         var a;
         var num;
        
num=temp;
while(num>0)
{
a=num%10;
arm=arm+a*a*a;
num=parseInt(num/10); // convert float into Integer
}
if(arm==temp)
{
  document.getElementById('showresult').innerHTML=(`${temp} is an Armstrong number `);
}
else
{
  document.getElementById('showresult').innerHTML=(`${temp} is not an Armstrong number `);;
}

    }
  return (
    <div>
      <h1>FIND ARMSTRONG NUMBER</h1>
      <input type="number" placeholder="Enter a three digit number..."onChange={handleChange}/><br/>
      <button  onClick={Astrong}>Submit</button> 
      <p>Result</p>
      <p>=</p>
      <h2 id="showresult">-</h2>
     
    </div> 
  );
}


  export default Armstrong;