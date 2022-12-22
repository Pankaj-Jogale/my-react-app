function App() {
  //passing event parameter from btn

  let clickme = (e) => {
    console.log(e);
  };
  return (
    <div>
      <br />
      <input type="button" value="clickme" onClick={clickme} />
    </div>
  );
}
export default App;
