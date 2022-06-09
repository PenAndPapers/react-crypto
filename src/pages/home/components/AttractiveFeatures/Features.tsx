import FeatureCard from "./FeatureCard"
import { AttractiveFeatures } from "../../../../models/AttractiveFeatures"

interface ComponentProps {
  featuresData: AttractiveFeatures[]
}

const Features = (props: ComponentProps) => {
  return (
    <div className='features'>
      {
        props.featuresData.map(data => {
          return <FeatureCard data={data} key={data.id} />
        })
      }
    </div>
  )
}

export default Features