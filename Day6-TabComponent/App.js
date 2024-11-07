import { useState } from "react";
import "./index";
import { MdCurrencyExchange } from "react-icons/md";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { AiOutlineCloseCircle } from "react-icons/ai";
const arr = [0, 1, 2];
const tabContent = [
  {
    emoji: <MdCurrencyExchange />,
    id: 0,
    heading: "Steps to take for instant transfer online!!",
    para: "loreum 0 Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti debitis dolorum dignissimos quo quibusdam. Quia doloribus corporis ullam? Atque odio ea eum tempora similique adipisci odit temporibus aperiam dicta reiciendis.",
  },
  {
    emoji: <RiMoneyRupeeCircleLine />,
    id: 1,
    heading: "Condition and policies required for applying loan",
    para: "loreum 1Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti debitis dolorum dignissimos quo quibusdam. Quia doloribus corporis ullam? Atque odio ea eum tempora similique adipisci odit temporibus aperiam dicta reiciendis.",
  },
  {
    emoji: <AiOutlineCloseCircle />,
    id: 2,
    heading: "Easily close your account with us",
    para: "loreum 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti debitis dolorum dignissimos quo quibusdam. Quia doloribus corporis ullam? Atque odio ea eum tempora similique adipisci odit temporibus aperiam dicta reiciendis.",
  },
];
const des = [
  {
    mes: "Instant Transfer",
    color: "tab red",
  },
  {
    mes: "Instant Loan",
    color: "tab yellow",
  },
  {
    mes: "Instant Transfer",
    color: "tab green",
  },
];
export default function App() {
  const [activeTab, setactiveTab] = useState(0);
  return (
    <section className="app">
      <Repeat setactiveTab={setactiveTab} activeTab={activeTab}></Repeat>
      {arr.map((e, i) => (
        <Tab key={i} activeTab={activeTab} num={i} ob={tabContent[i]}></Tab>
      ))}
    </section>
  );
}
function Repeat({ activeTab, setactiveTab }) {
  return (
    <>
      <div className="tab-block">
        {arr.map((e, i) => (
          <TabBtn
            key={i}
            activeTab={activeTab}
            value={i}
            setactiveTab={setactiveTab}
          ></TabBtn>
        ))}
      </div>
    </>
  );
}

function TabBtn({ value, activeTab, setactiveTab }) {
  return (
    <button
      className={des[value].color}
      value={value}
      onClick={(e) => setactiveTab(value)}
    >
      {des[value].mes}
    </button>
  );
}
function Tab({ activeTab, num, ob }) {
  return (
    <>
      {Number(activeTab) === num && (
        <div className="tab-content">
          <div className="flex">
            <span>{ob.emoji}</span>
            <h2>{ob.heading}</h2>
          </div>
          <p className="about">{ob.para}</p>
        </div>
      )}
    </>
  );
}
