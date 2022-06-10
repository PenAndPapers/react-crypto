import FeatureCard from "./FeatureCard"
import { AttractiveFeatures } from "../../../../models/AttractiveFeatures"

interface ComponentProps {
  featuresData: AttractiveFeatures[]
}

const FeatureList = (props: ComponentProps) => {
  return (
    <div className='feature-list'>
      {
        props.featuresData.map(data => {
          return <FeatureCard data={data} key={data.id} />
        })
      }
    </div>
  )
}

export default FeatureList