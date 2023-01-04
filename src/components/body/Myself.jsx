import React from 'react'
import './BodyCss.css';
import { v4 as uuid } from 'uuid';

export const Myself = ({
  myselfValue,setMyselfValue,inputValue,setInputValue,settingTime,setSettingTime,setDone}) => {
  //自分のやること
  const myselfOfWord = [
    "😄楽しむ","😌休む","🧗プランク1分","💃スクワット30回","🏋️‍♂️筋トレ","🤸‍♀️ストレッチ",
    "🍹アルコールDAY","⭕ノー飲酒DAY","🦷糸ようじをする","💊ビタミン剤を飲む",
    "💥美容液を使う","📚読書する","🟦インプット","🟥アウトプット",
    "📩整理","📍その他"
  ];
  let myselfOfBox = []
  let index = 0
  const displayValue = (value) => {
    index = myselfOfWord.indexOf( value ) 
    myselfOfBox = [...myselfOfBox,{id:index, value: value, completed:false }]  
    return value
  }
  const handleOnClick = (e) => {
  //クリックされた要素をhomeValueに追加する
  let spaceWord = "　　　";
  const did = myselfOfBox.find((value) => value.value === e.target.innerText)
  const didId = uuid()
  if(settingTime === ""){did.value = spaceWord + did.value}
  else{did.value = settingTime + did.value}
  if(inputValue !== ""){did.value = did.value + " - " + inputValue}
  myselfValue = [ ...myselfValue, {id:didId, value: did.value, completed:did.completed}]
  //クリックされた要素の色を変える
  e.target.style.backgroundColor = "#ecd4e7";
  //console.log(homeValue)
  setMyselfValue(myselfValue)
  setInputValue("")
  setSettingTime("")
  setDone(false)
}
  return (
    <div className="myselfGroup">
      <h3 id="myselfText">自分のやること</h3>
      <div>
      {myselfOfWord.map((value) => (
            <ul className="ulTodo" key={index} id={index} onClick={handleOnClick} >{displayValue(value)}</ul>
          ))}
      </div>
    </div>
  )
}
