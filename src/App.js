import axios from "axios";

import { useEffect, useRef, useState } from "react";

//taking i/p from textbox
function App() {
  let inputRef = useRef();

  useEffect(() => {
    //console.log("i am called");
    getallmsg();
  });

  let [messageList, setMessageList] = useState([]);
  let getallmsg = async () => {
    let url = `http://localhost:3001/messages`;
    let response = await axios.get(url);
    //console.log(response.data);
    messageList = [...response.data];
    //console.log(messageList);
    //re-render
    setMessageList(messageList);
    getallmsg();
  };

  let [message, setmessage] = useState("message");
  let changemsg = (e) => {
    message = e.target.value;
    setmessage(message);
    //above 2 equal to setmessage(e.target.value);
  };

  let createnewmsg = async () => {
    let url = `http://localhost:3001/message`;

    if (!inputRef.current.checkValidity()) {
      let box = inputRef.current;
      box.style.border = "4px solid red";
      // console.log(inputRef.current);
      // alert("invalid");
      return;
    } else {
      let box = inputRef.current;
      box.style.border = "inherit";
    }
    let data = {
      message: message,
      reply: false,
    };
    await axios.post(url, data);
    setmessage("");
  };
  let checkenter = (e) => {
    if (e.keyCode === 13) {
      createnewmsg();
    }
  };

  return (
    <div>
      <h1>Make ajax/api call</h1>
      <input
        type="text"
        value={message}
        onChange={changemsg}
        onKeyUp={checkenter}
        ref={inputRef}
        required
        minLength={3}
      />
      <input type="button" value="add" onClick={createnewmsg} />
      {messageList.map((item, index) => (
        <>
          <div key={index}>{item.message}</div>
        </>
      ))}
    </div>
  );
}
export default App;
