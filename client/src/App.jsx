
import { useState } from "react";
import Chatbox from "./components/Chatbox";


const App = () => {
  const [input, setInput] = useState("");
   // Initialize the state with an empty string or any initial value

  return (
    <>
      <h1 className="text-center text-3xl p-10 relative font-[GIlroy]">FireChat</h1>
      <div className="items-center flex justify-center mt-10">
        <Chatbox input={input} setInput={setInput} /> {/* Pass the props correctly */}
      </div>
    </>
  );
};

export default App;
