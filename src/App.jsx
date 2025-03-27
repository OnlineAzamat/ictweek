import Header from './components/Header'
import Welcome from './components/Welcome'
import Stat from './components/Stat'
import Catalog from './components/Catalog'

import './App.css'
import Speaker from './components/Speaker'
import Program from './components/Program'
import Useful from './components/Useful'
import Footer from './components/Footer'

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
      <Footer />
    </div>
  )
}

export default App
