import React, { useState } from "react";
import "./programe.css";
const Print =() => {
  const [string, setString] = useState('');
     
    const handleChange = (e) =>{
         setString(e.target.value);
    }
    const Possible = () =>{
      document.write(`The given word is = ${string}`)
      document.write("<br><br>");
      document.write("The possible combinations are:");
      document.write("<br><br>");
         function permute(str, l, r)
{
	if (l == r)
			document.write(str+"<br>");
		else
		{
			for (let i = l; i <= r; i++)
			{
				str = swap(str, l, i);
				permute(str, l + 1, r);
				str = swap(str, l, i);
			}
		}
}

function swap(a, i, j)
{
	let temp;
  let charArray = a.split("");
  temp = charArray[i] ;
  charArray[i] = charArray[j];
  charArray[j] = temp;
  return (charArray).join("");
}

let temp1=string;
let str = temp1;
let n = str.length;
permute(str, 0, n-1);
    
}

  return (
    <div>
      <h1>PRINT NAME IN ALL POSSIBLE COMBINATION</h1>
      <input type="text" placeholder="Enter a word..."onChange={handleChange}/><br/>
      <button  onClick={Possible}>Submit</button>
    </div> 
  );
}


  export default Print;