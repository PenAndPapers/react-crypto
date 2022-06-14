import AcceptedCryptoPayment from './AcceptedCryptoPayment'
import CountDownTimer from './CountDownTimer'
import style  from './style.module.css'

const Hero = () => {
  return (
    <div className={style.hero}>
      <h1>Next Generation <br />Crypto Trading</h1>
      <CountDownTimer />
      <div className={style.buttonGroup}>
        <button>Download App</button>
        <button>Trade Crypto</button>
      </div>
      <AcceptedCryptoPayment />
    </div>
  )
}

export default Hero