import Registration from './components/registration/Registration'
import AioniqContent from './components/aioniq-contents/MainContent'
import { useState } from "react"

import './App.css'

import asset_1 from './assets/elips_1.svg'
import asset_2 from './assets/elips_2.svg'

export default function App() {
  const [isAuth, setIsAuth] = useState(false)
  return (
    <div className="App">
      {isAuth ? <AioniqContent /> : <Registration setIsAuth={setIsAuth} />}
      {!isAuth && (
        <>
          <img className="elips asset_1" src={asset_1} alt="" />
          <img className="elips asset_2" src={asset_2} alt="" />
        </>
      )}
    </div>
  )
}