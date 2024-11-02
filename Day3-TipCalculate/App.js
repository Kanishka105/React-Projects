import "./index.css";
import { useReducer } from "react";
const arr = [
  "Dissatisfied(0%)",
  "It was okay(5%)",
  "It was good(10%)",
  "Absolutely amazing(20%)",
];
const que = [
  "How much was the bill?",
  "How did you like the service?",
  "How did your friend like the service?",
];
const initialState = {
  bill: "",
  valY: 0,
  valF: 0,
  tipByYou: 0,
  tipByFriend: 0,
};
function reduce(state, action) {
  switch (action.type) {
    case "bill":
      return { ...state, bill: action.payload };
    case "LikeY":
      return {
        ...state,
        valY: action.tip,
        tipByYou: state.bill * action.payload,
      };
    case "LikeF":
      return {
        ...state,
        valF: action.tip,
        tipByFriend: state.bill * action.payload,
      };
    case "reset":
      return initialState;
    default:
      throw new Error("Inavlid");
  }
}
export default function App() {
  const [{ bill, tipByFriend, tipByYou, valY, valF }, dispatch] = useReducer(
    reduce,
    initialState
  );

  const avg = ((tipByFriend + tipByYou) / 2).toFixed(0);
  const sum = Number(avg) + Number(bill);
  return (
    <main className="main">
      <div className="block">
        {que.map((ob, i) => (
          <div className="content-box" key={i}>
            <Question key={i} que={ob}></Question>{" "}
            {i === 0 ? (
              <Input dispatch={dispatch} bill={bill}></Input>
            ) : (
              <Selection
                val={i}
                dispatch={dispatch}
                value={i === 1 ? valY : valF}
              ></Selection>
            )}
          </div>
        ))}
      </div>
      <h2>
        You have to pay ${sum} (${bill}+$
        {avg} tip)
      </h2>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </main>
  );
}
function Question({ que }) {
  return <h3>{que}</h3>;
}
function Selection({ val, dispatch, value }) {
  let mul;
  function cal(arg) {
    const target = Number(arg);
    if (target === 0) mul = 0;
    if (target === 1) mul = 0.05;
    if (target === 2) mul = 0.1;
    if (target === 3) mul = 0.2;
  }
  return (
    <select
      value={value}
      onChange={(e) => {
        console.log(e.target.value);
        cal(e.target.value);
        dispatch(
          val === 1
            ? { type: "LikeY", payload: mul, tip: e.target.value }
            : { type: "LikeF", payload: mul, tip: e.target.value }
        );
      }}
    >
      {arr.map((mess, i) => (
        <option value={i} key={i}>
          {mess}
        </option>
      ))}
    </select>
  );
}
function Input({ dispatch, bill }) {
  return (
    <>
      <input
        type="number"
        placeholder="Enter..."
        required
        value={bill}
        onChange={(e) => dispatch({ type: "bill", payload: e.target.value })}
      />
    </>
  );
}
