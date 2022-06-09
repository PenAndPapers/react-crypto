import Hero from './components/Hero'
import TradeKyrpto from './components/TradeKrypto'
import AvailableKyrpto from './components/AvailableKrypto' 

const Home = (props) => {
  return (
    <div className='home'>
      <div className='container'>
        <Hero />
        <TradeKyrpto />
        <AvailableKyrpto />
      </div>
    </div>
  )
}

export default Home