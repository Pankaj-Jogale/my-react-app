import axios from "axios";

import { useEffect, useRef, useState } from "react";

//taking i/p from textbox
function App() {
  let inputRef = useRef();
  let [message, setmessage] = useState("");
  let [messageList, setMessageList] = useState([]);

  useEffect(() => {
    //console.log("i am called");
    getallmsg();
  });

  let changemsg = (e) => {
    message = e.target.value;
    setmessage(message);
    //above 2 equal to setmessage(e.target.value);
  };
  let getallmsg = async () => {
    let url = `http://localhost:3001/messages`;
    let response = await axios.get(url);
    //console.log(response.data);
    messageList = [...response.data];
    //console.log(messageList);
    //re-render
    setMessageList(messageList);
  };

  let createnewmsg = async (reply) => {
    let url = `http://localhost:3001/message`;

    if (!inputRef.current.checkValidity()) {
      alert("invalid");
      return;
    }
    let data = {
      message: message,
      reply: reply,
    };

    await axios.post(url, data);
    setmessage("");
    getallmsg();
  };
  let checkenter = (e) => {
    if (e.keyCode === 13) {
      createnewmsg();
    }
  };

  return (
    <div>
      <h1 className="bg-dark text-light sticky-top p-2">Message App</h1>
      <div className="row justify-content-center">
        <div className="col-12 col-md-6">
          <div className="d-flex ">
            <input
              className="form-control form-control-lg"
              type="text"
              value={message}
              onChange={changemsg}
              onKeyUp={checkenter}
              ref={inputRef}
              required
              minLength={3}
            />
            <input
              className="btn btn-secondary"
              type="button"
              value="add"
              onClick={() => createnewmsg(false)}
            />
            <input
              className="btn btn-dark"
              type="button"
              value="Reply"
              onClick={() => createnewmsg(true)}
            />
          </div>
        </div>
      </div>

      {messageList.map((item, index) => (
        <div className="row justify-content-center border-4">
          <div className="col-12 col-md-6 border-4 border-dark">
            <div
              key={index}
              className={
                item.reply
                  ? "d-flex justify-content-end my-1"
                  : "d-flex justify-content-start my-1"
              }
            >
              <div className="badge text-bg-secondary">
                {item.message}
                <span className="ms-4">
                  {new Date(item.messageTime).getHours()}:
                  {new Date(item.messageTime).getMinutes()}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default App;
