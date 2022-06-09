import { PortfolioModel } from "../../../../models/Portfolio"
import Qoute from '../../../../assets/images/qoute.svg'

interface ComponentProps {
  data: PortfolioModel
}

const PortfolioSlider = (props: ComponentProps) => {
  const { img, testimony, name, role } = props.data
  return (
    <article>
      <div>
        <img src={Qoute} className='quote' alt="" />
        <p className='testimony'>{ testimony }</p>
        <img src={img} alt={name} />
        <p className='name'>{ name }</p>
        <span>{ role }</span>
      </div>
    </article>
  )
}

export default PortfolioSlider