import { AttractiveFeatures } from "../../../../models/AttractiveFeatures"

interface ComponentProps {
  data: AttractiveFeatures
}

const FeatureCard = (props: ComponentProps) => {
  const { icon, title, description } = props.data
  return (
    <article>
      <div className='title'>
        <i className={`fa-solid ${icon}`} />
        <h3>{ title }</h3>
      </div>
      <p className="description">{ description}</p>
    </article>
  )
}

export default FeatureCard