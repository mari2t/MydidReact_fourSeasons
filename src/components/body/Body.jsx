import React , { useState }from 'react'
import './BodyCss.css';
import { Home } from './Home';
import { Ordinary } from './Ordinary';
import { Myself } from './Myself';
import { TodayDid } from './TodayDid';

export const Body = ({inputValue,setInputValue,settingTime,setSettingTime,done,setDone}) => {
    const [homeValue, setHomeValue] = useState([])
    const [ordinaryValue, setOrdinaryValue] = useState([])
    const [myselfValue, setMyselfValue] = useState([])
  return (
    <div>
       <div className='wrapOfList'>
            <Home homeValue={homeValue} setHomeValue={setHomeValue}
                  inputValue={inputValue} setInputValue={setInputValue} 
                  settingTime={settingTime} setSettingTime={setSettingTime} 
                  done={done} setDone={setDone}/>
            <Ordinary ordinaryValue={ordinaryValue} setOrdinaryValue={setOrdinaryValue}
                  inputValue={inputValue} setInputValue={setInputValue} 
                  settingTime={settingTime} setSettingTime={setSettingTime} 
                  done={done} setDone={setDone}/>
            <Myself myselfValue={myselfValue} setMyselfValue={setMyselfValue}
                  inputValue={inputValue} setInputValue={setInputValue} 
                  settingTime={settingTime} setSettingTime={setSettingTime} 
                  done={done} setDone={setDone}/>
            <TodayDid
             homeValue={homeValue} ordinaryValue={ordinaryValue} myselfValue={myselfValue}
             />
        </div>
    </div>
  )
}
