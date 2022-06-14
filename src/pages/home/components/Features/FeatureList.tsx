import FeatureCard from "./FeatureCard"
import { AttractiveFeatures } from "../../../../models/AttractiveFeatures"
import style from './style.module.css'

interface ComponentProps {
  featuresData: AttractiveFeatures[]
}

const FeatureList = (props: ComponentProps) => {
  return (
    <div className={style.featureList}>
      {
        props.featuresData.map(data => {
          return <FeatureCard data={data} key={data.id} />
        })
      }
    </div>
  )
}

export default FeatureList