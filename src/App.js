function App() {
  //data member ex
  let project = "counter appln";
  let btnvalue = "click me";

  //member funtion ex
  let clickme = () => {
    alert();
  };
  return (
    <div>
      <h1>{project}</h1>
      <input type="button" value={btnvalue} onClick={clickme} />
    </div>
  );
}
export default App;
