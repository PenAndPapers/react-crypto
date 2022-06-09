import { AvailableKrypto } from "../../../../models/AvailableKrypto"

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
      <div className='details'>
        <h3>{ title }</h3>
        <p>{ description }</p>
        <div className="price">
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