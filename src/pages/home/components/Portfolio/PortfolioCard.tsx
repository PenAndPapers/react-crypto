import { PortfolioModel } from "@/models/Portfolio"
import Qoute from '@/assets/images/qoute.svg'
import style from './style.module.css'

interface ComponentProps {
  data: PortfolioModel
}

const PortfolioSlider = (props: ComponentProps) => {
  const { img, testimony, name, role } = props.data
  return (
    <article>
      <div>
        <img src={Qoute} className={style.qoute} alt="" />
        <p className='testimony'>{ testimony }</p>
        <img src={img} alt={name} />
        <p className={style.name}>{ name }</p>
        <span>{ role }</span>
      </div>
    </article>
  )
}

export default PortfolioSlider