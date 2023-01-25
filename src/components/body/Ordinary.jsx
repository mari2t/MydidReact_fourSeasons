import React from "react";
import "./BodyCss.css";
import { v4 as uuid } from "uuid";

export const Ordinary = ({
  ordinaryValue,
  setOrdinaryValue,
  inputValue,
  setInputValue,
  settingTime,
  setSettingTime,
  setDone,
}) => {
  //日常
  const ordinaryOfWord = [
    "🌞起きる",
    "🥐朝食",
    "🍔昼食",
    "🍕夕食",
    "🌜寝る",
    "🙋‍♀️仕事する",
    "👩‍👦一日10分一緒に遊ぶ",
    "😃良いこと",
    "😂嫌なこと",
    "💪がんばったこと",
    "😊思いやったこと",
    "📥整理",
    "📌その他",
  ];
  let ordinaryOfBox = [];
  let index = 0;

  const displayValue = (value) => {
    index = ordinaryOfWord.indexOf(value) + 1;
    ordinaryOfBox = [
      ...ordinaryOfBox,
      { id: index, value: value, completed: false },
    ];
    return value;
  };
  const handleOnClick = (e) => {
    const did = ordinaryOfBox.find(
      (value) => value.value === e.target.innerText
    );
    const didId = uuid();
    if (settingTime === "") {
      did.value = "　　　" + did.value;
    } else {
      did.value = settingTime + did.value;
    }
    if (inputValue !== "") {
      did.value = did.value + " - " + inputValue;
    }
    ordinaryValue = [
      ...ordinaryValue,
      { id: didId, value: did.value, completed: did.completed },
    ];
    e.target.style.backgroundColor = "#d9d0ac";
    setOrdinaryValue(ordinaryValue);
    setInputValue("");
    setSettingTime("");
    setDone(false);
  };
  return (
    <div className="ordinaryGroup">
      <h3 id="ordinaryText">日常</h3>
      <div>
        {ordinaryOfWord.map((value) => (
          <ul className="ulTodo" key={index} id={index} onClick={handleOnClick}>
            {displayValue(value)}
          </ul>
        ))}
      </div>
    </div>
  );
};
