     import React, { useState } from "react";
    import "./programe.css";
    const Factors =() => {
      const [number, setNumber] = useState();
            
        const handleChange = (e) =>{
             setNumber(e.target.value);
        }
        const Fact = () =>{
             let temp=number;

             document.write(`The factors of ${temp} are:`);
             document.write(" <br> ");
// looping through 1 to num
     for(let i = 1; i <= temp; i++) { 

    // check if number is a factor
    if(temp % i == 0) {
      document.write(" <br> " + i);
       }
     }
      }
      return (
        <div>
          <h1>FIND FACTORS</h1>
          <input type="number" placeholder="Enter a number..."onChange={handleChange}/><br/>
          <button  onClick={Fact}>Submit</button> 
        </div> 
      );
    }

      export default Factors;