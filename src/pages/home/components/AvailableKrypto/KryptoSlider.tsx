
import { AvailableKrypto } from '../../../../models/AvailableKrypto'
import KryptoSliderCard from './KryptoSliderCard'

interface ComponentProps {
  sliderData: AvailableKrypto[]
}

const AvailableKyrpto = (props: ComponentProps) => {
  return (
    <div className='slider'>
      {
        props.sliderData.map((data: AvailableKrypto) => {
          return <KryptoSliderCard data={data} />
        })
      }
    </div>
  )
}

export default AvailableKyrpto