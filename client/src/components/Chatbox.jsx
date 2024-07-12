import  { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:5000"); // Initialize socket.io client

const Chatbox = ({ input, setInput }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Event listener for incoming messages
    socket.on("message", (message) => {
      console.log("Received message:", message); // Debugging: Log received message
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    // Clean up event listener when component unmounts
    return () => {
      socket.off("message");
    };
  }, []); // Empty dependency array ensures this effect runs only once

  const sendMessage = () => {
    
    if (input.trim() !== "") {
      socket.emit("message",input);
      setInput(" "); // Clear the input field
     
     
    }
  };

  return (
    <div className="flex flex-col h-[500px] w-[400px] ">
      <div className="flex-1 overflow-y-auto bg-gray-200 px-4 py-2 mb-10">
        {messages.map((message, index) => (
          <div
            key={index}
            className="my-2 py-1 px-4 rounded-lg bg-blue-500 text-white max-w-[70%] self-start"
          >
            {message}
          </div>
        ))}
      </div>
     

     <div className=" bottom-0 flex gap-4 items-cener justify-center ml-10 mb-8">

        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 p-2 mr-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
          />
        <button onClick={sendMessage}
          type="submit"
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none"
          >
          Send
        </button>
    
          </div>
    </div>
  );
};

export default Chatbox;
