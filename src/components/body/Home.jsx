import React from 'react'
import './BodyCss.css';
import { v4 as uuid } from 'uuid';

export const Home = ({
  homeValue,setHomeValue,inputValue,setInputValue,settingTime,setSettingTime,setDone}) => {
    //家事・育児
    const homeOfWord = [
    "👦保育園お迎え","🛁息子をお風呂","🛋息子と寝る","🏍息子と公園に行く",
    "🥼洗濯機予約","💈洗濯機まわし","👕洗濯物干し","🍽食洗機まわす",
    "🧂料理をつくる","🧊製氷機の水補給","☕お茶つくり","🥛加湿器水補給","🍙炊飯器セット",
    "🧦月曜保育園準備","✋息子爪切り","🖥生協注文",
    "🚽トイレ掃除","🚿風呂掃除","🧺洗面所掃除","🧹玄関掃除",
    "🕳ルンバ","💨定期家事","📥整理","📌その他"
    ];
    let homeOfBox = []
    let index = 0

    const displayValue = (value) => {
        //id設定とValue表示をする
        index = homeOfWord.indexOf( value ) 
        homeOfBox = [...homeOfBox,{id:index, value: value, completed:false }]  
        return value
    }
    const handleOnClick = (e) => {
        //クリックされた要素をhomeValueに追加する
        let spaceWord = "";
        const did = homeOfBox.find((value) => value.value === e.target.innerText)
        const didId = uuid()
        if(settingTime === ""){did.value = "　　　" + did.value}
        else{did.value = " " + settingTime + "" + did.value}
        if(inputValue !== ""){did.value = did.value + " - " + inputValue}
        homeValue = [ ...homeValue, {id:didId, value: did.value, completed:did.completed}]
        //クリックされた要素の色を変える
        e.target.style.backgroundColor = "#B0E0E6";
        //console.log(homeValue)
        setHomeValue(homeValue)
        setInputValue("")
        setSettingTime("")
        setDone(false)
    }

  return (
    <div className="houseGroup">
      <h3 id="houseText">家事・育児</h3>
      <div id="homeList">
      {homeOfWord.map((value) => (
            <ul className="ulTodo" key={index} id={index} onClick={handleOnClick} >{displayValue(value)}</ul>
          ))}
      </div>
    </div>
  )
}
