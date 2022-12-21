function App() {
  let username = "Pankaj"; //doing interpolation at tag lvl
  let btvalue = "trail"; //doing interpolation at attribute lvl

  return (
    <div>
      <h1>{username}</h1>
      <input type="button" value={btvalue} />
    </div>
  );
}
export default App;
