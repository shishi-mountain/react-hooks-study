import React from "react";
import Counter from "./components/counter/Counter";
import "./App.css";
// import InputForm from "./components/InputForm";
import ItemList from "./components/ItemList/ItemList";

function App() {
  const [isDisplay, setIsDisplay] = React.useState(true);
  const handleDisplay = () => {
    setIsDisplay(!isDisplay);
  };

  return (
    <div className="App">
      <h2>#2 userEffect</h2>
      {/* <button onClick={() => handleDisplay()}>
        {isDisplay ? "コンポーネント非表示" : "コンポーネント表示"}
      </button> */}
      {/* {isDisplay && <Counter />} */}
      <ItemList />
    </div>
  );
}

export default App;
