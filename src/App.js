import { useSelector, useDispatch } from "react-redux";
import { deposit, withdraw } from "./redux/store";

//passing parameter while calling function

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

  let { userAccount } = useSelector((state) => state);

  return (
    <div>
      <h1>Counter 1 amount:{userAccount.amount}</h1>
      <input
        type="button"
        value="Deposit-200"
        onClick={() => dispatch(deposit(200))}
      />
    </div>
  );
}

function Counter2() {
  let dispatch = useDispatch();
  let { userAccount } = useSelector((state) => state);

  return (
    <div>
      <h1>Counter 2 amount:{userAccount.amount}</h1>
      <input
        type="button"
        value="Deposit-100"
        onClick={() => dispatch(deposit(100))}
      />
      <input
        type="button"
        value="withdraw-100"
        onClick={() => dispatch(withdraw(100))}
      />
    </div>
  );
}

export default App;
