import { useState } from "react";

function App() {
  //accessing txtbox i/p

  let [message, setMessage] = useState("Hello");
  let updateMsg = (e) => {
    message = e.target.value;
    setMessage(message);
    console.log(e);
  };
  return (
    <div>
      <input
        type="text"
        value={message}
        placeholder="enter msg"
        onChange={updateMsg}
      />
      <h1>{message}</h1>
    </div>
  );
}
export default App;
