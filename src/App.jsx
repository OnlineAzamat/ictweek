import Header from './components/Header'
import Welcome from './components/Welcome'
import Stat from './components/Stat'
import Catalog from './components/Catalog'

import './App.css'
import Speaker from './components/Speaker'
import Program from './components/Program'
import Useful from './components/Useful'

function App() {
  return (
    <div>
      <Header />
      <Welcome />
      <Catalog />
      <Stat />
      <Speaker />
      <Program />
      <Useful />
    </div>
  )
}

export default App
