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
          <img className="logo asset_1" src={asset_1} alt="" />
          <img className="logo asset_2" src={asset_2} alt="" />
          <img className="logo asset_3" src={asset_3} alt="" />
          <img className="logo asset_4" src={asset_4} alt="" />
        </>
      )}
    </div>
  )
}