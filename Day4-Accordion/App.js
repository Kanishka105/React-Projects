import "./index.css";
import { useReducer } from "react";
const initialState = {
  Ques: [
    {
      que: "What type of questions you asked in viva?",
      Ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur consequatur veniam, beatae ut totam voluptate alias modi? Ipsum laborum illum nostrum voluptatum nihil eius ducimus debitis, quaerat dolores excepturi tempora!answer1",
    },
    {
      que: "How do I prepare for a quize?",
      Ans: "answer2",
    },
    {
      que: "How many questions would be ask?",
      Ans: "answer3",
    },
  ],
  curValue: 0,
  again: 0,
  isOpen: true,
};
function reduce(state, action) {
  switch (action.type) {
    case "on_off":
      return { ...state, isOpen: !state.isOpen };
    case "check":
      return { ...state, curVal: action.payload, again: action.payload };
    default:
      throw new Error("inavlid");
  }
}
export default function App() {
  const [{ Ques, again, curVal, isOpen }, dispatch] = useReducer(
    reduce,
    initialState
  );
  return (
    <main className="main">
      {Ques.map((ob, i) => (
        <Question
          key={i}
          queNum={i + 1}
          ob={ob}
          isOpen={isOpen}
          curVal={curVal}
          again={again}
          dispatch={dispatch}
        ></Question>
      ))}
    </main>
  );
}
function Question({ queNum, isOpen, ob, curVal, again, dispatch }) {
  const condition = Number(curVal) === Number(queNum) && isOpen;
  return (
    <section className={condition ? " section highlight" : "section"}>
      <div className="block">
        <h3>
          <span className={condition ? "queNum" : ""}>
            {queNum < 10 ? "0" : null}
            {queNum}
          </span>
          {ob.que}
        </h3>
        <button
          value={queNum}
          key={1}
          onClick={(e) => {
            let target = Number(e.target.value);
            Number(again) === target
              ? dispatch({ type: "on_off" })
              : dispatch({ type: "check", payload: target });
          }}
        >
          {condition ? "-" : "+"}
        </button>
      </div>
      {condition && <p>{ob.Ans}</p>}
    </section>
  );
}
