import { useState } from "react";
import { evaluate } from "mathjs"; 
import "./Calculator.css";

function Calculator() {
  const [input, setInput] = useState(""); 
  const [result, setResult] = useState(""); 
  const Buttons = ["7", "8", "9", "+", "4", "5", "6", "-", "1", "2", "3", "*", "C", "0", "=", "/"];

  const handleClick = (value) => {
    if (value === "C") {
      setInput("");
      setResult(""); 
    } else if (value === "=") {
      if (input.trim() === "") {
        setResult("Error"); 
      } else {
        try {
          let computedResult = evaluate(input);

          if (computedResult === Infinity) {
            setResult("Infinity"); 
          } else if (isNaN(computedResult)) {
            setResult("NaN"); 
            setResult(computedResult.toString()); 
          }
        } catch {
          setResult("Error"); 
        }
      }
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="calculator">
      <h2>React Calculator</h2>
      <input type="text" className="display" value={input} readOnly />
      <div className="result">{result}</div> 
      <div className="buttons">
        {Buttons.map((item) => (
          <button key={item} onClick={() => handleClick(item)}>
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Calculator;
