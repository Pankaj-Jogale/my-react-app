import { useSelector, useDispatch } from "react-redux";
import { deposit, withdraw } from "./redux/store";

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
        value="Deposit"
        onClick={() => dispatch(deposit())}
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
        value="Deposit"
        onClick={() => dispatch(deposit())}
      />
      <input
        type="button"
        value="withdraw"
        onClick={() => dispatch(withdraw())}
      />
    </div>
  );
}

export default App;
