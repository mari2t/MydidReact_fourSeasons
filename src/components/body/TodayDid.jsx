import React from 'react'
import './BodyCss.css';
import { DisplayTodayDid } from './DisplayTodayDid';

export const TodayDid = (
  {homeValue,ordinaryValue ,myselfValue,deleteDid
  }) => {

  return (
    <div className="allDidGroup">
      <h3 id="allDidList">今日できたこと</h3>
      <div id="todayHouseText"> ―家事・育児― </div>
      {homeValue.map((
        (value) => <DisplayTodayDid key={value.id} value={value} deleteDid={deleteDid}/>
          ))}
      <div id="todayOrdinaryText"> ―日常― </div>
      {ordinaryValue.map((
        (value) => <DisplayTodayDid key={value.id} value={value} deleteDid={deleteDid}/>
          ))}
      <div id="todayMyselfText"> ―自分― </div>
      {myselfValue.map((
        (value) => <DisplayTodayDid key={value.id} value={value} deleteDid={deleteDid}/>
          ))}
    </div>
  )
}
