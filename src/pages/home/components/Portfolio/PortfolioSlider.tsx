import PortfolioCard from "./PortfolioCard"
import { PortfolioModel } from "../../../../models/Portfolio"

interface ComponentProps {
  sliderData: PortfolioModel[]
}

const PortfolioSlider = (props: ComponentProps) => {
  return (
    <div className='slider'>
      {
        props.sliderData.map(data => {
          return (<PortfolioCard data={data} key={data.id}/>)
        })
      }
    </div>
  )
}

export default PortfolioSlider