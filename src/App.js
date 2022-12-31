import { useState } from "react";

//created 2 counter bt then not link to each other like bank counter to share user bank balance

function App() {
  return (
    <div>
      <Counter1 />
      <Counter2 />
    </div>
  );
}

function Counter1() {
  let [amount, setAmount] = useState(100);
  let deposit = () => {
    amount += 50;
    setAmount(amount);
  };
  return (
    <div>
      <h1>Counter 1 amount:{amount}</h1>
      <input type="button" value="Deposit" onClick={deposit} />
    </div>
  );
}

function Counter2() {
  let [amount, setAmount] = useState(100);
  let deposit = () => {
    amount += 50;
    setAmount(amount);
  };
  return (
    <div>
      <h1>Counter 2 amount:{amount}</h1>
      <input type="button" value="Deposit" onClick={deposit} />
    </div>
  );
}

export default App;
