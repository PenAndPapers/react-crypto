import { Routes, Route } from 'react-router-dom'
import Home from '@/pages/home'
import Cryptos from '@/pages/cryptos'

const AppMain = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cryptos" element={<Cryptos />} />
      </Routes>
    </main>
  )
}

export default AppMain