import { News } from '../../../../models/News'
import NewsCard from './NewsCard'

interface ComponentProps {
  newsData: News[]
}

const NewsList = (props: ComponentProps) => {
  return (
    <div className='news-list'>
      {
        props.newsData.map(data => {
          return (<NewsCard data={data} key={data.id} />)
        })
      }
    </div>
  )
}

export default NewsList