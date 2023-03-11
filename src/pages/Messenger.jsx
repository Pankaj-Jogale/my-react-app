import Conversation from "../components/conversation/Conversation";
import Message from "../components/message/Message";
import "./messenger.scss";
import { useEffect, useState } from "react";
import axios from "axios";
const Messenger = () => {
  let [messageList, setMessageList] = useState([]);
  // useEffect(() => {
  //   //console.log("i am called");
  //   getallmsg();
  // });
  window.onload = function () {
    getallmsg();
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
  console.log(messageList);
  let own = false;
  return (
    <>
      <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <input className="chatMenuInput" placeholder="Search for Friends" />
            <div className="conversation">
              <img
                className="conversationImg"
                src="https://picsum.photos/200/301"
                alt=""
              />
              <span className="conversationName">Pankaj j</span>
            </div>
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
            <div className="chatBoxTop">
              <div className={own ? "message own" : "message"}>
                <div className="messageTop">
                  <img
                    className="messageImg"
                    src="https://picsum.photos/200/301"
                    alt=""
                  />
                  <p className="messageText">
                    these is msg from demo user Paragraphs are the building
                    blocks
                  </p>
                </div>
                <div className="messageBottom">1hr ago</div>
              </div>
            </div>
            <div className="chatBoxBottom">
              <textarea
                className="chatMessageInput"
                placeholder="type msg to send...."
              ></textarea>
              <button className="chatSubmitButton">send</button>
            </div>
          </div>
        </div>
        <div className="chatOnline">
          <div className="chatOnlineWrapper">right</div>
        </div>
      </div>
    </>
  );
};

export default Messenger;
