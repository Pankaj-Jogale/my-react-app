import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deposit, withdraw } from "./redux/store";

//taking parameter from user and passing while calling function

function App() {
  return (
    <div>
      <Counter1 />
      <hr />
      <Counter2 />
    </div>
  );
}

function Counter1() {
  let dispatch = useDispatch();
  //console.log(dispatch);
  //let allstate = useSelector((state) => state);
  //console.log(allstate.userAccount.amount);

  let [amount, setAmount] = useState(0);

  let { userAccount } = useSelector((state) => state);
  let handleInputchange = (e) => {
    // console.log("hi");
    amount = parseInt(e.target.value);

    setAmount(amount);
  };

  return (
    <div>
      <h1>Counter 1 amount:{userAccount.amount}</h1>
      <input
        type="number"
        placeholder="Enter amount to deposit"
        value={amount}
        onChange={handleInputchange}
      />
      <input
        type="button"
        value="Deposit"
        onClick={() => dispatch(deposit(amount))}
      />
    </div>
  );
}

function Counter2() {
  let [amount, setAmount] = useState(0);
  let dispatch = useDispatch();
  let { userAccount } = useSelector((state) => state);

  let handleInputchange = (e) => {
    amount = parseInt(e.target.value);
    setAmount(amount);
  };

  return (
    <div>
      <h1>Counter 2 amount:{userAccount.amount}</h1>
      <input type="number" value={amount} onChange={handleInputchange} />
      <input
        type="button"
        value="Deposit"
        onClick={() => dispatch(deposit(amount))}
      />
      <input
        type="button"
        value="withdraw"
        onClick={() => dispatch(withdraw(amount))}
      />
    </div>
  );
}

export default App;
