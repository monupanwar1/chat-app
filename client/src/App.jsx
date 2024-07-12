
import { useState } from "react";
import Chatbox from "./components/Chatbox";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Loginpage from "./components/Loginpage";



const App = () => {

  const [input, setInput] = useState("");
   // Initialize the state with an empty string or any initial value

  return (
    <>
      <Loginpage/>
      <Navbar/>
    <div className="h-screen w-full p-10 bg-cover bg-center "  style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1604079628040-94301bb21b91?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")' }}>
      
   
      <h1 className="text-center text-3xl p-10 relative font-[GIlroy]">FireChat</h1>
      <div className="items-center flex justify-center ">
        <Chatbox input={input} setInput={setInput} /> {/* Pass the props correctly */}
      </div>
    </div>
      <About/>  
    </>
  );
};

export default App;
