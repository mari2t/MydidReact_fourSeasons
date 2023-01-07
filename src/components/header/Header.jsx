import React from 'react'
import './HeaderCss.css';

export const Header = ({inputValue,setInputValue,settingTime,setSettingTime,done,setDone}) => {

  //西暦の日付表示用関数
  const getDate = () => {
    const today = new Date()
    let month = today.getMonth() + 1
    let day = today.getDate()
    const dayOfWeek = today.getDay() ;
    const dayOfWeekStr = [ "日", "月", "火", "水", "木", "金", "土" ][dayOfWeek] 
    if (month  < 10) {month = `0${month}`}  
    if (day < 10) {day = `0${day}`}  
    const date = today.getFullYear() + "-" + month + "-" + day + " " + dayOfWeekStr + "曜日"
    return date
  };

  //フリーワード取得の値が入っている時の関数
  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  //任意時刻の取得用関数
  const handleAnyClick = (e) => {
    let nowTime = ""
    nowTime = e.target.value
    setSettingTime(nowTime)
  }

  //現在時刻の取得用関数
  const handleNowClick =  (e) => {
    if(e.target.checked === false){ 
      setDone(false)
      setSettingTime("")
      return
      }
    setDone(true)
    let nowTime = ""
    const today = new Date()
    let hours = today.getHours()
    let minutes = today.getMinutes()
    if(hours < 10 ){
      hours = "0" +  hours
    }else {hours = "" + hours}
    if(minutes < 10 ){
      minutes = "0" +  minutes
    }else {minutes = "" + minutes}
    nowTime = "" + hours +":" + minutes
    settingTime = nowTime
    setSettingTime(nowTime)
  }

  return (
    <div className='headerGroup'>
      <h1 className='title' >MyDid</h1>
      <h2 className='dateOfToday' > {getDate()}</h2>
      <label className="freeWordLabel">できたことの後に追記
        <input id="freeWord" autoFocus type="text" onChange={handleChange} maxLength="60"  value={inputValue}/>
      </label>
      <label id="setTimeLabel">任意時刻追記
        <input type="time" id="setTime" name="setTime" step="600" onChange={handleAnyClick} value={settingTime}/> 
      </label>
      <label id="checkboxLabel">
        <input type="checkbox" id = "checkId" name="nowTime" checked={done}
        onChange={handleNowClick}/> 現在時刻追記
      </label>
    </div>
  )
}
