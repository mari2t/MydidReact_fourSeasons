import './App.css';
import React , { useState }from 'react'
import { Body } from './components/body/Body';
import { Header } from "./components/header/Header";
import { Imgs } from './components/imgs/Imgs';


function App() {
  const [inputValue, setInputValue] = useState("")
  const [settingTime, setSettingTime] = useState("")
  const [done, setDone] = useState(false)

  return (
    <div className="App">
        <Header inputValue={inputValue} setInputValue={setInputValue} settingTime={settingTime} setSettingTime={setSettingTime} done={done} setDone={setDone}/>
        <Imgs />
        <Body inputValue={inputValue} setInputValue={setInputValue} settingTime={settingTime} setSettingTime={setSettingTime} done={done} setDone={setDone}/>
    </div>
  );
}

export default App;
