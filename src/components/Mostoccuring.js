
    import React, { useState } from "react";
    import "./programe.css";
    const Mostoccuring =() => {
      const [number, setNumber] = useState();
            
        const handleChange = (e) =>{
             setNumber(e.target.value);
        }
        const Most = () =>{
          var num = number;
 
// Here we typecasting the num
// Splitting the num, so that
// we got an array of strings
// Then use map function to
// convert the array of strings
// into array of numbers

var myArr = String(num).split(" ").map((num)=>{
return Number(num)
})
           
      var arr1=myArr;
      var mf = 1;
      var m = 0;
      var item;
      for (var i=0; i<arr1.length; i++)
      {
        for (var j=i; j<arr1.length; j++)
        {
          if (arr1[i] == arr1[j])
          m++;
          if (mf<m)
          {
          mf=m; 
          item = arr1[i];
          }
        }
          m=0;
      }
   
        // Print the array
        document.getElementById('showresult').innerHTML=(`${item} element occurs ${mf} times in the given array`);

    }
      return (
        <div>
          <h1>MOST OCCURING ELEMENTS IN AN ARRAY</h1>
          <label htmlFor="firsValue">Enter the array elements with spaces:</label>     
          <input type="text" placeholder="1 2 3 4 5" onChange={handleChange}/><br/>
          <button  onClick={Most}>Submit</button> 
          <p>result</p>
          <p>=</p>
          <h2 id="showresult">-</h2>
        </div> 
      );
    }
    
    
 export default Mostoccuring;