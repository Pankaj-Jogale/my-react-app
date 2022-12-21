function App() {
  let list = ["mumbai", "delhi", "pune"];
  return (
    <div>
      <h1>map function</h1>
      <h1>
        {list.map((item) => (
          <h1>{item}</h1>
        ))}
      </h1>
    </div>
  );
}
export default App;
