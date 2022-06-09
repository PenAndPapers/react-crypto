import Hero from './components/Hero'
import TradeKyrpto from './components/TradeKrypto'
import AvailableKyrpto from './components/AvailableKrypto'
import AttractiveFeatures from './components/AttractiveFeatures'
import Cta from './components/Cta'
import Portfolio from './components/Portfolio'

const Home = () => {
  return (
    <div className='home'>
      <div className='container'>
        <Hero />
        <TradeKyrpto />
        <AvailableKyrpto />
        <AttractiveFeatures />
      </div>
      <Cta />
      <div className="container">
        <Portfolio />
      </div>
    </div>
  )
}

export default Home