import { useSelector, useDispatch } from 'react-redux'
import { setCookieNotification, showCookieNotification } from '@/store/CookieNotificationStore'
import style from './style.module.css'

const CookieNotification = () => {
  const dispatch = useDispatch()
  const cookieNotification = useSelector(showCookieNotification)

  const handleSetCookieNotification = () => {
    dispatch(setCookieNotification())
  }

  return (
    <>
      { cookieNotification &&
        <div className={style.cookieNotification}>
          <div className={`container ${style.container}`}>
            <div className={style.message}>
              <i className='fa-solid fa-cookie' />
              <p>Fugiat sunt aute ullamco quis do sit irure sunt ut ullamco in consectetur laborum reprehenderit. Proident labore duis consequat fugiat elit elit laborum sunt. Magna aliquip dolore incididunt officia nisi exercitation adipisicing deserunt voluptate labore in excepteur. Fugiat officia qui ullamco magna duis aute fugiat deserunt eiusmod nostrud. Adipisicing fugiat cillum minim proident.</p>
            </div>
            <div className={style.btnContainer}>
              <button className={style.btn} onClick={handleSetCookieNotification}>Got it</button>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default CookieNotification