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
  //ๆฅๅธธ
  const ordinaryOfWord = [
    "๐่ตทใใ",
    "๐ฅๆ้ฃ",
    "๐ๆผ้ฃ",
    "๐ๅค้ฃ",
    "๐ๅฏใ",
    "๐โโ๏ธไปไบใใ",
    "๐ฉโ๐ฆไธๆฅ10ๅไธ็ทใซ้ใถ",
    "๐ไปๆฅใใฃใ่ฏใใใจ",
    "๐ไปๆฅใใฃใๅซใชใใจ",
    "๐ชไปๆฅใใใฐใฃใใใจ",
    "๐ไปๆฅๆใใใฃใใใจ",
    "๐ถโ๐ซ๏ธไปๆฅใฎไฝ่ชฟ",
    "๐ไปๆฅใฎๅคฑๆ",
    "๐ไปๆฅใฎๆฌกใซใใใใใจ",
    "๐ฅๆด็",
    "๐ใใฎไป",
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
      did.value = "ใใใ" + did.value;
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
      <h3 id="ordinaryText">ๆฅๅธธ</h3>
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
