import React from "react";
import { Link } from "react-router-dom";
import './App.css'
function App() {
  return (
    <div className="App">
           <h1 style={{ borderBottom: "solid 1px", paddingBottom: "1rem",}} >programes</h1>
      <nav>
      <ol className="list">
        <li><Link to="/removevowels">Remove vowels in String</Link></li>
        <li><Link to="/countvowels">Count Vowels in string</Link></li>
        <li><Link to="/armstrong">Armstrong Number</Link></li>
        <li><Link to="/palindrome">Palindrome Number</Link></li>
        <li><Link to="/numberofwords">Number of words in a string</Link></li>
        <li><Link to="/primenumber">Prime Number</Link></li>
        <li><Link to="/fibonacci">Fibonacci Series</Link></li>
        <li><Link to="/sortwords">Sort words in Order</Link></li>
        <li><Link to="/countcharacter">Count character frequency</Link></li>
        <li><Link to="/swappingstrings">Swapping of two strings</Link></li>
        <li><Link to="/anagram">Anagram</Link></li>
        <li><Link to="/factors">Factors of a Given Numbers</Link></li>
        <li><Link to="/amicable">Amicable Numbers</Link></li> 
        <li><Link to="/lcm">LCM</Link></li>
        <li><Link to="/hcf">HCF</Link></li>
        <li><Link to="/interest">Simple and Compound Interest</Link></li>
        <li><Link to="/matrix">Matrix Transpose</Link></li>
        <li><Link to="/matrixmultiplication">Matrix Multiplication</Link></li>
        <li><Link to="/mostoccuring">Most Occuring Elements in an Array</Link></li>
        <li><Link to="/print">Print all possible combinations</Link></li> 
        <li><Link to="/bubblesort">Bubble Sort</Link></li> 
      </ol>
    </nav> 
    </div>
  );
}

export default App;
