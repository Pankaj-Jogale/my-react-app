function App() {
  return (
    <div>
      <h1>Using internal function(Person) as tag in these function(App tag)</h1>
      <Person />
    </div>
  );
}

function Person() {
  return (
    <div>
      <h1>Person name</h1>
      <img src="https://picsum.photos/400" alt="" srcset="" />
      <h1>Person name</h1>
    </div>
  );
}
export default App;

// export { App };
