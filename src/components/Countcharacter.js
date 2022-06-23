import React,{useState} from "react";
import "./programe.css";
const Countcharacter =() => {  
  const [InputText, setInputText] = useState('');

  const handleChange = (e) => {
    setInputText({
        ...InputText,
        [e.target.name]: e.target.value
    })
  }
  
const handleSumbit = (e) => {
  e.preventDefault()

  function printans(ans)
  {
    document.write(` Entered string is = ${test}`);
    document.write("<br><br>");
    
  for( let [ key ,value] of ans)
  {
    // if()
    document.write(`  ${key} character occurs ${value} times  `  ); 
    document.write("<br><br>");
  }
  
  }
  
  // function count occurrence of character
  function count( str , outp_map )
  {
  for( let i = 0 ;i < str.length ;i++)
  {
    let k = outp_map.get(str[i]);
    outp_map.set(str[i], k+1) ;
  }
  //calling print function
  printans(outp_map);
  }
  
  //function create map to count character
  function count_occurs( test , callback )
  {
  //checking string is valid or not
  if( test.length === 0 )
  {
    console.log(" empty string ");
    return ;
  }
  else
  {
    // map for storing count values
    let ans = new Map();
    for( let i = 0 ;i < test.length;i++)
    {
    ans.set(test[i], 0);
    }
    callback( test ,ans); 
  }
  
  }
  
  // test string
  let test = InputText.firstValue;

  count_occurs( test ,count);

   } 
      
  return (
    <div>
      <h1>COUNT CHARACTER FREQUENCY IN A STRING</h1>
      <form onSubmit={handleSumbit}>
                <input
                    type="text"
                    name="firstValue"
                    id="word"
                    value={InputText.firstValue}
                    placeholder="Enter a word"
                    onChange={handleChange}
                /><br/>
                <button>submit</button>
            </form>
    </div> 
  );
}


  export default Countcharacter;