import AcceptedCryptoPayment from './AcceptedCryptoPayment'
import CountDownTimer from './CountDownTimer'
import './Hero.scoped.css'

const Hero = (props) => {
  return (
    <div className='hero'>
      <h1>Next Generation <br />Crypto Trading</h1>
      <CountDownTimer />
      <div className="button-group">
        <button>Download App</button>
        <button>Trade Crypto</button>
      </div>
      <AcceptedCryptoPayment />
    </div>
  )
}

export default Hero