import { usestate, useEffect } from "react";

function Hello() {
    
    useEffect(function () {
        console.log("hi :)");
        return function () {
        console.log("bye :(");
    };
    }, []);
    return <h1>Hello</h1>;

function App () {
    const [showing, setShowing] = useState(false);
    const onClick = () => setShowing((prev) => !prev);
    return <div>
        {showing ? <Hello /> : <Bye />}
        <button onClick={onClick}> {showing ? "Hide" : "Show"} </button>
    <button> {showing ? "Hide" : "Show"} </button>
    </div>
}