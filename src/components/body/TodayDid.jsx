import React from 'react'
import './BodyCss.css';

export const TodayDid = (
  {homeValue,ordinaryValue ,myselfValue
  }) => {
  return (
    <div className="allDidGroup">
      <h3 id="allDidList">今日できたこと</h3>
      <div id="todayHouseText"> ―家事・育児― </div>
      {homeValue.map((value) => (
            <ul key={value.id} id={value.id} >{value.value}</ul>
          ))}
      <div id="todayOrdinaryText"> ―日常― </div>
      {ordinaryValue.map((value) => (
            <ul key={value.id} id={value.id} >{value.value}</ul>
          ))}
      <div id="todayMyselfText"> ―自分― </div>
      {myselfValue.map((value) => (
            <ul key={value.id} id={value.id} >{value.value}</ul>
          ))}
    </div>
  )
}
