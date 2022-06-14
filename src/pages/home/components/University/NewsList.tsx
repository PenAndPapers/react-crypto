import { News } from '@/models/News'
import NewsCard from './NewsCard'
import style from './style.module.css'

interface ComponentProps {
  newsData: News[]
}

const NewsList = (props: ComponentProps) => {
  return (
    <div className={style.newsList}>
      {
        props.newsData.map(data => {
          return (<NewsCard data={data} key={data.id} />)
        })
      }
    </div>
  )
}

export default NewsList