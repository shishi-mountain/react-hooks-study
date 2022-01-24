import React, { useState } from "react";
import classes from "./App.module.scss";
import Title from "./components/Title/Title";
import { useAutoResize } from "./hooks/index";

const App = () => {
  // 画面表示するitem一覧の値を管理
  const [itemList, setItemList] = useState<string[]>([]);
  const [value, setValue] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setItemList([...itemList, value]);
    setValue("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const textareaRef = useAutoResize(value);

  return (
    <div className={classes.app}>
      <Title titleText={"#9 useRef"} />
      <div className={classes.content}>
        <div className={classes.itemlist}>
          {itemList.length === 0 ? (
            <h3>NO ITEMS!!!</h3>
          ) : (
            <ul className={classes.ul}>
              {itemList.map((item) => {
                return (
                  <li className={classes.li} key={item}>
                    {item}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
        <form
          action=""
          className={classes.form}
          onSubmit={(e) => handleSubmit(e)}
        >
          <textarea
            value={value}
            onChange={(e) => handleChange(e)}
            className={classes.textarea}
            ref={textareaRef}
          />
          <button className={classes.button}>送信する</button>
        </form>
      </div>
    </div>
  );
};

export default App;
