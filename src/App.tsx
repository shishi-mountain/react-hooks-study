import React, { useState, useCallback } from "react";
import "./App.scss";
import SubTitle from "./components/subTitle/SubTitle";
import Title from "./components/Title/Title";
import Button from "./components/button/Button";
import Counter from "./components/counter/Counter";

function App() {
  const [countA, setCountA] = useState<number>(0);
  const [countB, setCountB] = useState<number>(0);

  // React.memoの中では、違う関数だと認識される
  // useCallbackでmemo化
  const handleCountUpA = useCallback(() => {
    setCountA((prevCount) => prevCount + 1);
  }, []);

  const handleCountUpB = useCallback(() => {
    setCountB((prevCount) => prevCount + 1);
  }, []);

  console.log("-----------");

  return (
    <div className="App">
      <Title titleText={"#7 useCallback"} />
      <SubTitle subTitleText={"あなたは犬派？それとも猫派？"} />
      <div className="itemList">
        <div className="item">
          <Counter counterTitle={"犬派"} count={countA} />
          <Button buttonText={"もちろん犬派"} onClick={handleCountUpA} />
        </div>
        <div className="item">
          <Counter counterTitle={"猫派"} count={countB} />
          <Button buttonText={"やっぱり猫派"} onClick={handleCountUpB} />
        </div>
      </div>
    </div>
  );
}

export default App;
