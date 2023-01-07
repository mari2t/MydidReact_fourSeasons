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

    const deleteDid = (id) => {
      let did = ""
      let didnum = 0
      let newList = []
      did = homeValue.find((value) => value.id === id)
      console.log(did)
      if(did !== undefined){
            newList = [...homeValue]
            didnum = homeValue.indexOf(did)
            newList.splice(didnum,1)
            setHomeValue(newList)
      }
      did = ordinaryValue.find((value) => value.id === id)
      console.log("ordinary after",did)
      if(did !== undefined){
            console.log("in")
            newList = [...ordinaryValue]
            didnum = ordinaryValue.indexOf(did)
            newList.splice(didnum,1)
            setOrdinaryValue(newList)
      }
      did = myselfValue.find((value) => value.id === id)
      if(did !== undefined){
            newList = [...myselfValue]
            didnum = myselfValue.indexOf(did)
            newList.splice(didnum,1)
            setMyselfValue(newList)
      }
  }

  return (
    <div>
       <div className='wrapOfList'>
            <Home homeValue={homeValue} setHomeValue={setHomeValue}
                  inputValue={inputValue} setInputValue={setInputValue} 
                  settingTime={settingTime} setSettingTime={setSettingTime} 
                  done={done} setDone={setDone} />
            <Ordinary ordinaryValue={ordinaryValue} setOrdinaryValue={setOrdinaryValue}
                  inputValue={inputValue} setInputValue={setInputValue} 
                  settingTime={settingTime} setSettingTime={setSettingTime} 
                  done={done} setDone={setDone}/>
            <Myself myselfValue={myselfValue} setMyselfValue={setMyselfValue}
                  inputValue={inputValue} setInputValue={setInputValue} 
                  settingTime={settingTime} setSettingTime={setSettingTime} 
                  done={done} setDone={setDone}/>
            <TodayDid
             homeValue={homeValue} setHomeValue={setHomeValue} ordinaryValue={ordinaryValue} myselfValue={myselfValue} deleteDid={deleteDid}
             />
        </div>
    </div>
  )
}
