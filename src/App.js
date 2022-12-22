import { useState } from "react";

function App() {
  //msg app using map function

  let [list] = useState([
    { message: "Hi", messageTime: new Date() },
    { message: "hello", messageTime: new Date() },
  ]);

  return (
    <div>
      <h1>map demo</h1>
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
