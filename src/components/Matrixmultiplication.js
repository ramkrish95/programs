import React, { useState } from "react";
import "./programe.css";

const Matrix =() => {
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
    const Matmulti = () =>{

      //Matrix 1
      let num1 =InputNum.firstValue;
      let a = num1.toString(); 
      let arr1 = new Array(2)
      //1d
      for (var i = 0; i < arr1.length; i++) {
          arr1[i] = []
          console.log(arr1[i])
      }
      //2d
      var k = 0;
      for (i = 0; i < 2; i++) {
          for (var j = 0; j < 2; j++) {
              arr1[i][j] = a[k++]   
          }
      }
      
      for (i = 0; i < 2; i++) {
          for (var j = 0; j < 2; j++) {
              console.log(arr1[i][j] + " ")
          }
      }
      console.log(arr1)
      
      //Matrix 2
      let num2 =InputNum.secondValue;
      let b = num2.toString();
      let arr2 = new Array(2)
      //1d
      for (var r = 0; r < arr2.length; r++) {
          arr2[r] = []
          console.log(arr2[r])
      }
      //2d
      var t = 0;
      for (r = 0; r < 2; r++) {
          for (var s = 0; s < 2; s++) {
              arr2[r][s] = b[t++]
              
          }
      }
      
      for (r = 0; r < 2; r++) {
          for (var s = 0; s < 2; s++) {
             console.log(arr2[r][s] + " ")
          }
      }
      console.log(arr2)
      
      // Matrix multiplication
      const multiplyMatrices = (c, d) => {
         if (!Array.isArray(c) || !Array.isArray(d) || !c.length || !d.length) {
            throw new Error('arguments should be in 2-dimensional array format');
         }
         let x = c.length,
         z = c[0].length,
         y = d[0].length;
         if (d.length !== z) {
            // XxZ & ZxY => XxY
            throw new Error('number of columns in the first matrix should be the same as the number of rows in the second');
         }
         let productRow = Array.apply(null, new Array(y)).map(Number.prototype.valueOf, 0);
         let product = new Array(x);
         for (let p = 0; p < x; p++) {
            product[p] = productRow.slice();
         }
         for (let g = 0; g < x; g++) {
            for (let h = 0; h < y; h++) {
               for (let f = 0; f < z; f++) {
                  product[g][h] += c[g][f] * d[f][h];
               }
            }
         }
         return product;
      }
      
      let c = arr1;
      let d = arr2;
      
      console.log(multiplyMatrices(c, d));
      document.getElementById("showresult").innerHTML=multiplyMatrices(c, d);

    }
  return (
    <div>
      <h1>MATRIX MULTIPLICATION</h1>
      <label htmlFor="firsValue">Eneter the first 2*2 matrix by row order:</label>     
       <input
        type="number"
        name="firstValue"
        placeholder="1234"
        value={InputNum.firstValue}
        onChange={handleChange}
    /><br/>
    <label htmlFor="firsValue">Eneter the second 2*2 matrix by row order:</label>
    <input type="number"
        name="secondValue"
        placeholder="1234"
        value={InputNum.secondValue}
        onChange={handleChange}
    /><br/> 
     <button  onClick={Matmulti}>Submit</button> 
      <p>Matrix after mulplication in row order</p>
      <p>=</p>
      <h2 id="showresult">-</h2>
     
    </div> 
  );
}


  export default Matrix;