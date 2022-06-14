
import { AvailableKrypto } from '@/models/AvailableKrypto'
import KryptoSliderCard from './KryptoSliderCard'
import style from './style.module.css'

interface ComponentProps {
  sliderData: AvailableKrypto[]
}

const AvailableKyrpto = (props: ComponentProps) => {
  return (
    <div className={style.slider}>
      {
        props.sliderData.map((data: AvailableKrypto) => {
          return <KryptoSliderCard data={data} key={data.id} />
        })
      }
    </div>
  )
}

export default AvailableKyrpto