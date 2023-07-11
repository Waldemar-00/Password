import "./styles.css";
import { useState, useRef } from "react";

export default function App() {
  const _defaultPass = useRef("12345678");
  const [string, setString] = useState("");
  const [content, setContent] = useState(null);
  const inputRef = useRef();

  function onChangeValue(e) {
    e.preventDefault();
    setString(e.target.value);
  }
  function onCheck() {
    setContent(string.includes(_defaultPass.current) ? <Success /> : <Try />);
  }
  return (
    <div className="App">
      <h1>Hello! Write your password</h1>
      <div className="div">
        <label htmlFor="pass">Start here</label>
        <input
          id="pass"
          className="input"
          type="password"
          name="password"
          value={string}
          required
          onChange={onChangeValue}
          ref={inputRef}
        ></input>
        <button className="check" onClick={onCheck}>
          on check
        </button>
        {content}
      </div>
    </div>
  );
  function Success() {
    return <h2>Success</h2>;
  }
  function Try() {
    return <h2>Try againe</h2>;
  }
}
