
    import React, { useState } from "react";
    import "./programe.css";
    const Bubblesort =() => {
      const [number, setNumber] = useState();
            
      const handleChange = (e) =>{
        setNumber(e.target.value);
        }
      const Bubble = () =>{
           
         function bubbleSort(arr)
         {
	
          var i, j;
          var len = arr.length;
          var isSwapped = false;
              
            for(i =0; i < len; i++){
              
              isSwapped = false;
              
              for(j = 0; j < len; j++){
                if(arr[j] > arr[j + 1]){
                var temp = arr[j]
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                isSwapped = true;
                }
              }
              
              // IF no two elements were swapped by inner loop, then break
              
              if(!isSwapped){
              break;
              }
            }
              
            // Print the array
            document.getElementById('showresult2').innerHTML=(arr);
       }
// Declare a variable and store an
// integer value
var num = number;

// Here we typecasting the num
// Splitting the num, so that
// we got an array of strings
// Then use map function to
// convert the array of strings
// into array of numbers

var myArr = String(num).split(",").map((num)=>{
return Number(num)
}) 
            var arr =myArr;
            // calling the bubbleSort Function
            bubbleSort(arr)  
  
        }
      return (
        <div>
          <h1>BUBBLESORT ARRAY</h1>
          <label htmlFor="text">Enter array elements with comma:</label>
          <input type="text" placeholder="5,-3,8,9,1"onChange={handleChange}/><br/>
          <button  onClick={Bubble}>Submit</button> 
          <p>After sorting array elements are</p>
          <p>=</p>
          <h2 id="showresult2">-</h2>
        </div> 
      );
    }
    
    
      export default Bubblesort;