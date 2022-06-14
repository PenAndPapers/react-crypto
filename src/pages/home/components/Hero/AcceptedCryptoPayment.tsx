import bitcoin from '../../../../assets/images/coins/payment/bitcoin.png'
import litecoin from '../../../../assets/images/coins/payment/litecoin.png'
import chainlink from '../../../../assets/images/coins/payment/chainlink.png'
import siacoin from '../../../../assets/images/coins/payment/siacoin.png'
import style  from './style.module.css'

const AcceptedCryptoPayment = () => {
  return (
    <div className={style.acceptedCryptoPayment}>
      <p>We accept</p>
      <ul>
        <li>
          <img src={bitcoin} alt="" />
          <span>Bitcoin</span>
        </li>
        <li>
        <img src={litecoin} alt="" />
          <span>Litecoin</span>
        </li>
        <li>
        <img src={chainlink} alt="" />
          <span>Chainlink</span>
        </li>
        <li>
        <img src={siacoin} alt="" />
          <span>Siacoin</span>
        </li>
      </ul>
    </div>
  )
}

export default AcceptedCryptoPayment