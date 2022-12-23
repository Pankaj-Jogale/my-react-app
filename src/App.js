import axios from "axios";
import { useState } from "react";

function App() {
  //Make ajax/api post call
  let [messageList, setMessageList] = useState([]);
  let getallmsg = async () => {
    let url = `http://localhost:3001/messages`;
    let response = await axios.get(url);
    //console.log(response.data);
    messageList = [...response.data];
    //console.log(messageList);
    //re-render
    setMessageList(messageList);
  };

  let createnewmsg = async () => {
    let url = `http://localhost:3001/message`;
    let data = {
      message: "Hi from react",
      reply: false,
    };
    await axios.post(url, data);
  };
  return (
    <div>
      <h1>Make ajax/api call</h1>
      <input type="button" value="Make ajax/api call" onClick={getallmsg} />
      <input
        type="button"
        value="Make ajax/api post call"
        onClick={createnewmsg}
      />
      {messageList.map((item) => (
        <>
          <div>{item.message}</div>
        </>
      ))}
    </div>
  );
}
export default App;
