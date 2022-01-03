import logo from './logo.svg';
import './App.css';
import {useEffect} from "react";

function App() {
  const callApi = async() => {
    const response = await fetch("/api");
    const body = await response.json();
    return console.log(body.test)
  }

  useEffect(() => {
    callApi();
  }, []);

  return (
    <div>test</div>
  );
}

export default App;
