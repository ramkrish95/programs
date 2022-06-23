
import React, { useState } from "react";
import "./programe.css";
const Palindrome =() => {
  const [number, setNumber] = useState();

    const handleChange = (e) =>{
         setNumber(e.target.value);
    }
    const Palind = () =>{
         let num=number;
         var a;
         var b;
         var temp=0;
         b=num;
while(num>0)
{
a=num%10;
num=parseInt(num/10);
temp=temp*10+a;
}
if(temp==b)
{
  document.getElementById('showresult').innerHTML=(`${b} is a Palindrome number`);
}
else
{
  document.getElementById('showresult').innerHTML=(`${b} is not a Palindrome number`);;
}

    }
  return (
    <div>
      <h1>FIND PALINDROME NUMBER</h1>
      <input type="number" placeholder="Enter a number..."onChange={handleChange}/><br/>
      <button  onClick={Palind}>Submit</button>
      <p>Result</p>
      <p>=</p>
      <h2 id="showresult">-</h2>
     
    </div> 
  );
}


  export default Palindrome;

