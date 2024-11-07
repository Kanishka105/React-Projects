import "./App.css";
import { useState } from "react";
export default function App() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste
          accusantium quae dolore atque aut minus cumque dolores animi velit
          eveniet veniam officiis excepturi, alias, maxime error, voluptatem
          dicta rerum voluptatibus.
        </p>
        {isOpen && (
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima,
            reiciendis? At, sit quasi quos veritatis unde nemo praesentium ab
            sunt nulla, nisi, eos quas dolores eum laborum error consequatur
            officia!
          </p>
        )}
        <button onClick={() => setOpen(!isOpen)}>
          {isOpen ? "Show less" : "Show more"}
        </button>
      </div>
    </>
  );
}
