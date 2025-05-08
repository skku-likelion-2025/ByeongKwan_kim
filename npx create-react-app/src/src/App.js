import Button from "./Button";
improt styles from './App.module.css';
import { usestate, useEffect } from "react";

function App() {
  const [counter, setValue] = useState();
  const [keyword, setKeyword] = useState("")
  const onCLick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("i run only once.");

  useEffect(() => {
    console.log("I run when 'keyword' changes. ");
  }, []);
  useEffect(() => {
    if (keyword !== "" && keyoword.length > 5){
  console.log("I run when 'counter' changes."); 
    }
  }, [keyword]);
  useEffect(() => { 
    console.log("I run when keyword & counter change")
  }, [keyword, counter])

 return (
  <div> 
    <input
    value = {keyword}
    onChange = {onChange} 
    type="text" 
    placeholder="search here..." />
    <h1>{counter}</h1>  
    <Button onClick = {onClick}> click me </Button>
    </div>
  );
}

export default App;
