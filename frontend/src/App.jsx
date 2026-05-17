import Registration from './components/registration/Registration'
import AioniqContent from './components/aioniq-contents/MainContent'
import { useState } from "react"

import './App.css'

import asset_1 from './assets/logo_1.svg'
import asset_2 from './assets/logo_2.svg'
import asset_3 from './assets/logo_3.svg'
import asset_4 from './assets/logo_4.svg'

export default function App() {
  const [isAuth, setIsAuth] = useState(false)
  return (
    <div className="App">
      {isAuth ? <AioniqContent /> : <Registration setIsAuth={setIsAuth} />}
      {!isAuth && (
        <>
          <h2 className="welcome-message-1">Мы рады </h2>
          <h2 className="welcome-message-2" >приветствовать</h2>
          <h2 className="welcome-message-3" >вас!</h2>
          <h2 className="thank-you-message-1">Спасибо</h2>
          <h2 className="thank-you-message-2">что выбрали на нас!</h2>
          <img className="logo asset_1" src={asset_1} alt="" />
          <img className="logo asset_2" src={asset_2} alt="" />
          <img className="logo asset_3" src={asset_3} alt="" />
          <img className="logo asset_4" src={asset_4} alt="" />
        </>
      )
      }
    </div >
  )
}