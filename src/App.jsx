import Header from './components/Header'
import Welcome from './components/Welcome'
import Stat from './components/Stat'
import Catalog from './components/Catalog'

import './App.css'
import Speaker from './components/Speaker'

function App() {
  return (
    <div>
      <Header />
      <Welcome />
      <Catalog />
      <Stat />
      <Speaker />
    </div>
  )
}

export default App
