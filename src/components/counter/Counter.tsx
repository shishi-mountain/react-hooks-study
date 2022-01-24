import React, { useState, useEffect } from "react";
import counterCss from "./counter.module.scss";

const Counter: React.VFC = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  // useEffect(() => {
  //   console.log("count1 change value!!");
  // }, [count1]);

  useEffect(() => {
    console.log("count1 change value!!");
    const countUp = setInterval(() => {
      setCount1((prevCount) => prevCount + 1);
      console.log("countUP");
    }, 1000);
    return () => {
      clearInterval(countUp);
      console.log("unmount!!");
    };
  }, []);

  return (
    <div className={counterCss.root}>
      <div className={counterCss.buttonWrapper}>
        <span className={counterCss.ButtonText}>カウント１</span>
        <button
          onClick={() => {
            setCount1((prevCount) => prevCount + 1);
          }}
        >
          {count1}
        </button>
      </div>
      <div className={counterCss.buttonWrapper}>
        <span className={counterCss.ButtonText}>カウント２</span>
        <button
          onClick={() => {
            setCount2((prevCount) => prevCount + 1);
          }}
        >
          {count2}
        </button>
      </div>
    </div>
  );
};

export default Counter;
