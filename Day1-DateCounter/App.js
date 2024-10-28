import { useState } from "react";
import "./index.css";
export default function App() {
  const [count2, setCount2] = useState(0);
  const [isOpen, setOpen] = useState(false);
  const [val, setVal] = useState(0);
  return (
    <>
      <div className="main">
        <Step count2={count2} setCount2={setCount2} setOpen={setOpen}></Step>
        <Count
          count2={count2}
          isOpen={isOpen}
          setOpen={setOpen}
          use="block-1"
        ></Count>
      </div>
      <div className="main">
        <StepRange val={Number(val)} setVal={setVal}></StepRange>
        <Count
          count2={Number(val)}
          setOpen={setOpen}
          isOpen={isOpen}
          use="block-2"
        ></Count>
      </div>
    </>
  );
}
function Count({ count2, isOpen, setOpen, use }) {
  const [count, setCount] = useState(0);
  const now = new Date();
  const day = now.getDate();
  return (
    <div>
      <div className="block">
        <button
          onClick={() => {
            setCount(count - 1);
            setOpen(true);}}>-</button>
        <p>Count:{count}</p>
        <button
          onClick={() => {
            setCount(count + 1);
            setOpen(true);}}> +</button>
      </div>
      {isOpen && (
        <p>
          {count !== 0 ? `${count + count2} days from today` : "Today"} is :
          <br />
          {now.toDateString(now.setDate(count + count2 + day))}
        </p>
      )}
    </div>
  );
}
function Step({ setCount2, count2, setOpen }) {
  return (
    <div>
      <div className="block">
        <button
          onClick={() => {
            setCount2(count2 - 1);
            setOpen(false);}}> - </button>
        <p>Step:{count2}</p>
        <button
          onClick={() => {
            setCount2(count2 + 1);
            setOpen(false);}} >+</button>
      </div>
    </div>
  );
}
function StepRange({ val, setVal }) {
  console.log(typeof val);
  return (
    <div className="block2">
      <input
        type="range"
        value={val}
        min="0"
        max="10"
        onChange={(e) => {
          setVal(e.target.value);}}></input>
      <p>{val}</p>
    </div>
  );
}
