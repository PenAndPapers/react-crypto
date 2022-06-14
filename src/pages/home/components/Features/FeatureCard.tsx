import { AttractiveFeatures } from "../../../../models/AttractiveFeatures"
import style from './style.module.css'

interface ComponentProps {
  data: AttractiveFeatures
}

const FeatureCard = (props: ComponentProps) => {
  const { icon, title, description } = props.data
  return (
    <article>
      <div className={style.title}>
        <i className={`fa-solid ${icon}`} />
        <h3>{ title }</h3>
      </div>
      <p className={style.description}>{ description}</p>
    </article>
  )
}

export default FeatureCard