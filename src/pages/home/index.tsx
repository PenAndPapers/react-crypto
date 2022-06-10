import Hero from './components/Hero'
import HowToTrade from './components/HowToTrade'
import AvailableKyrpto from './components/AvailableKrypto'
import Features from './components/Features'
import Cta from './components/Cta'
import Portfolio from './components/Portfolio'
import University from './components/University'

const Home = () => {
  return (
    <div className='home'>
      <div className='container'>
        <Hero />
        <HowToTrade />
        <AvailableKyrpto />
        <Features />
      </div>
      <Cta />
      <div className="container">
        <Portfolio />
        <University />
      </div>
    </div>
  )
}

export default Home