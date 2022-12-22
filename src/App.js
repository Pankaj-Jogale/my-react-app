import { useState } from "react";

function App() {
  //msg app using map function+btn

  let [list, setList] = useState([
    { message: "Hi", messageTime: new Date() },
    { message: "hello", messageTime: new Date() },
  ]);
  let addmsg = () => {
    let newmsg = { message: "what happen??", messageTime: new Date() };
    list = [newmsg, ...list];
    setList(list);
  };

  return (
    <div>
      <h1>map demo</h1>
      <input type="button" value="add msg" onClick={addmsg} />
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
