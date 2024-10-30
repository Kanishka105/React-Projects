import "./App.css";
import { useState } from "react";

const questionArr = [
  "What language is react based on?",
  "What are the building blocks of react app?",
  "What's the name of the syntax we use to describe a UI in React?",
  "How to pass data from parent to child components?",
  "How to give components memory",
  "What do we call an input element that is completely synchronized with state?",
];
const ansArr = ["0", "1", "2", "3", "4", "5"];
export default function App() {
  const [ans, setAns] = useState();
  console.log("ans", ans);
  return (
    <>
      <FlashList ans={ans} setAns={setAns}></FlashList>
    </>
  );
}
function FlashList({ setAns, ans }) {
  return (
    <div className="arrange">
      {questionArr.map((q, i) =>
        i !== ans ? (
          <FlashCard value={i} key={i} setAns={setAns} question={q}></FlashCard>
        ) : (
          <FlashCard key={i} question={ansArr[i]}></FlashCard>
        )
      )}
    </div>
  );
}
function FlashCard({ question, value, setAns }) {
  return (
    <>
      <div className="box">
        <p>{question}</p>
        <button
          className="btn"
          value={value}
          onClick={(e) => setAns(Number(e.target.getAttribute("value")))}
        >
          Answer
        </button>
      </div>
    </>
  );
}
