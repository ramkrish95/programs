

    import React, { useState } from "react";
    import "./programe.css";
    const Fibonacci =() => {
      const [number, setNumber] = useState();
            
        const handleChange = (e) =>{
             setNumber(e.target.value);
        }
        const Fibo = () =>{
             let temp=number;
             var n1=0;
             var n2=1;
             var nextnum;
             var i; 
             
             document.write ("Fibonacci series untill the given Fn number "); 
             document.write (" <br> ");

             for ( i = 1; i <= temp; i++)   {  
              document.write (" <br> " +  n1);  // print the n1  
                 nextnum = n1 + n2;     // sum of n1 and n2 into the next_num  
                 n1 = n2;    // assign the n2 value into n2  
                 n2 = nextnum;   // assign the next_num into n2  
             }    
        }
      return (
        <div>
          <h1>FIND FIBONACCI SERIES</h1>
          <input type="number" placeholder="Enter the Fn number..."onChange={handleChange}/><br/>
          <button  onClick={Fibo}>Submit</button> 
          <p>Result</p>
          <p>=</p>
          <h2 id="showresult">-</h2>
         
        </div> 
      );
    }
    
    
      export default Fibonacci;