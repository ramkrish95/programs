import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes,Route,} from "react-router-dom";
import Amicable from "./components/Amicable";
import Anagram from "./components/Anagram";
import Armstrong from "./components/Armstrong";
import Bubblesort from "./components/Bubblesort";
import Countcharacter from "./components/Countcharacter";
import Countvowels from "./components/Countvowels";
import Factors from "./components/Factors";
import Fibonacci from "./components/Fibonacci";
import Hcf from "./components/Hcf";
import Interest from "./components/Interest";
import Lcm from "./components/Lcm";
import Matrix from "./components/Matrix";
import Matrixmultiplication from "./components/Matrixmultiplication";
import Mostoccuring from "./components/Mostoccuring";
import Numberofwords from "./components/Numberofwords";
import Palindrome from "./components/Palindrome";
import Primenumber from "./components/Primenumber";
import Print from "./components/Print";
import Removevowels from "./components/Removevowels";
import Sortwords from "./components/Sortwords";
import Swappingstrings from "./components/Swappingstrings";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
     <Routes>
      <Route path="/programs" element={<App />} />
      <Route path="Amicable" element={<Amicable />} />
      <Route path="Anagram" element={<Anagram />} />
      <Route path="Armstrong" element={<Armstrong />} />
      <Route path="Bubblesort" element={<Bubblesort />} />
      <Route path="Countcharacter" element={<Countcharacter />} />
      <Route path="Countvowels" element={<Countvowels />} />
      <Route path="Factors" element={<Factors />} />
      <Route path="Fibonacci" element={<Fibonacci />} />
      <Route path="Hcf" element={<Hcf />} />
      <Route path="Interest" element={<Interest />} />
      <Route path="Lcm" element={<Lcm />} />
      <Route path="Matrix" element={<Matrix />} />
      <Route path="Matrixmultiplication" element={<Matrixmultiplication />} />
      <Route path="Mostoccuring" element={<Mostoccuring />} />
      <Route path="Numberofwords" element={<Numberofwords />} />
      <Route path="Palindrome" element={<Palindrome />} />
      <Route path="Primenumber" element={<Primenumber />} />
      <Route path="Print" element={<Print />} />
      <Route path="Removevowels" element={<Removevowels />} />
      <Route path="Sortwords" element={<Sortwords />} />
      <Route path="Swappingstrings" element={<Swappingstrings />} />
    </Routes>
  </BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
