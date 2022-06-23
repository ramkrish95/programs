import React, { useState } from "react";
import "./programe.css";
const Matrix =() => {
  const [number, setNumber] = useState();
        
    const handleChange = (e) =>{
         setNumber(e.target.value);
    } 
    // Converting number into matrix
    const Transpose = () =>{
      let num =number;
      let a = num.toString();
      let arr1 = new Array(3)
//1d
for (var i = 0; i < arr1.length; i++) {
    arr1[i] = []
    console.log(arr1[i])
}
//2d
var k = 0;
for (i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
        arr1[i][j] = a[k++]
        console.log("2D", arr1[i][j], i, j)
    }
}

for (i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      console.log(arr1[i][j] + " ")

    }
}
console.log(arr1)

// Transposing the matrix
var arr = arr1;
var l, m, n;
document.write("The given matrix is :<br>");
document.write("<br>");
for(l=0; l<3; l++)
{
 for(m=0; m<3; m++)
  document.write(arr[l][m] +" ");
  document.write("<br>");
}

for(l=0; l<3; l++)
{
 for(m=l+1; m<3; m++)
 {
  n = arr[l][m];
  arr[l][m] = arr[m][l];
  arr[m][l] = n;
 }
}

document.write("<br>");
document.write("Transposed Matrix is :<br>");
document.write("<br>");
for(l=0; l<3; l++)
{
 for(m=0; m<3; m++)
  document.write(arr[l][m] +" ");
  document.write("<br>");
}
    }
  return (
    <div>
      <h1>MATRIX TRANSPOSE</h1>
      <label htmlFor="number">Eneter the second 3*3 matrix by row order:</label>
      <input type="number" placeholder="12345689"onChange={handleChange}/><br/>
      <button  onClick={Transpose}>Submit</button> 
      <p>Result</p>
      <p>=</p>
      <h2 id="showresult">-</h2>
    </div> 
  );
}


  export default Matrix;