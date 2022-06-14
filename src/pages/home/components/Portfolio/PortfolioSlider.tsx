import PortfolioCard from "./PortfolioCard"
import { PortfolioModel } from "@/models/Portfolio"
import style from './style.module.css'

interface ComponentProps {
  sliderData: PortfolioModel[]
}

const PortfolioSlider = (props: ComponentProps) => {
  return (
    <div className={style.slider}>
      {
        props.sliderData.map(data => {
          return (<PortfolioCard data={data} key={data.id}/>)
        })
      }
    </div>
  )
}

export default PortfolioSlider