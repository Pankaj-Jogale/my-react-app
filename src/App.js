import { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";

//error-boundary changes only in these file creating error so that we can try error boundary
//erroe-trying to access object directly

function App() {
  return (
    <ErrorBoundary FallbackComponent={HandleError}>
      <Error />
    </ErrorBoundary>
  );
}

function HandleError({ error }) {
  console.log("These is error:", error);
  return (
    <div>
      <h1>Error occured</h1>
    </div>
  );
}

function Error() {
  let [user] = useState({ id: 1, name: "Pankaj" });
  return (
    <div>
      <h1>{user}</h1>
    </div>
  );
}
export default App;
