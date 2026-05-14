import Registration from './components/registration/Registration'
import './App.css'

import asset_1 from './assets/elips_1.svg'
import asset_2 from './assets/elips_2.svg'
export default function App() {
  return (
    <div className="App">
      <img className="elips asset_1" src={asset_1} alt="" />
      <img className="elips asset_2" src={asset_2} alt="" />
      <Registration />
    </div>
  )
}