import { useState } from "react";

function App() {
  //msg app using map function+btn+txtbox
  let [message, setmessage] = useState("hii");
  let [list, setList] = useState([
    { message: "Hi", messageTime: new Date() },
    { message: "hello", messageTime: new Date() },
  ]);

  let updateinputmsg = (e) => {
    message = e.target.value;
    setmessage(message);
  };

  let addmsg = () => {
    let newmsg = { message: message, messageTime: new Date() };
    list = [newmsg, ...list];
    setList(list);
  };

  return (
    <div>
      <h1 className="bg-primary text-light p-3">map demo</h1>
      <div className="d-flex">
        <input
          className="form-control"
          type="text"
          name={message}
          id=""
          onChange={updateinputmsg}
        />
        <input
          className="btn btn-info"
          type="button"
          value="add msg"
          onClick={addmsg}
        />
      </div>

      {list.map((item, index) => (
        <div key={index}>
          <div>
            {item.message}
            <span>
              {item.messageTime.getHours()}:{item.messageTime.getMinutes()}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
export default App;
