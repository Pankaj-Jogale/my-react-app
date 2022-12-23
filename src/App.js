import axios from "axios";
import { useState } from "react";

function App() {
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
  return (
    <div>
      <h1>Make ajax/api call</h1>
      <input type="button" value="Make ajax/api call" onClick={getallmsg} />
      {messageList.map((item) => (
        <div>{item.message}</div>
      ))}
    </div>
  );
}
export default App;
