import { Link } from 'react-router-dom'
import { News } from '@/models/News'

interface ComponentProps {
  data: News
}

const NewsList = (props: ComponentProps) => {
  const { title, description, img } = props.data
  return (
    <article>
      <figure>
        <img src={img} alt={title} />
      </figure>
      <div>
        <h3>{ title }</h3>
        <p>{ description }</p>
        <Link to='/'>Learn more</Link>
      </div>
    </article>
  )
}

export default NewsList