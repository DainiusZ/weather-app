import "./App.css";
import useFetch from "./useFetch";

function App() {
  const { data, loading } = useFetch();
  return <div className="App"></div>;
}

export default App;
