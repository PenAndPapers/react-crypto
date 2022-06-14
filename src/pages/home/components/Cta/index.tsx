import GooglePlay from '@/assets/images/cta/google_play.png'
import AppStore from '@/assets/images/cta/app_store.png'
import style from './style.module.css'

const Cta = () => {
  return (
    <div className={style.cta}>
      <div className="container">
        <h1>Most advanced crypto trading platfrom ever!</h1>
        <a href="#">
          <img src={GooglePlay} alt="" />
        </a>
        <a href="#">
          <img src={AppStore} alt="" />
        </a>
      </div>
    </div>
  )
}

export default Cta