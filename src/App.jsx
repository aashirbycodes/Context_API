import "./App.css";
import Parent from "./components/parent";

import {useEffect} from "react";


function App() {
   useEffect(() => {
      console.log("I am Runnning");
    }, []);
  return (
    <div>
      <Parent name="Syed Aashir Ali" />
    </div>
  );
}

export default App;