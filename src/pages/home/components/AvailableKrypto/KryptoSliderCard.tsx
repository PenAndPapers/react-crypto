import { AvailableKrypto } from "../../../../models/AvailableKrypto"
import style from './style.module.css'

interface ComponentProps {
  data: AvailableKrypto
}

const KryptoSliderCard = (props: ComponentProps ) => {
  const { img, title, description, price } = props.data
  return (
    <article>
      <figure>
        <img src={ img } alt="" />
      </figure>
      <div className={style.details}>
        <h3>{ title }</h3>
        <p>{ description }</p>
        <div className={style.price}>
          <span>${ price }</span>
          <button>
            Trade now
          </button>
        </div>
      </div>
    </article>
  )
}

export default KryptoSliderCard