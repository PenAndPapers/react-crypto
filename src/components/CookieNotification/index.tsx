import style from './style.module.css'

const CookieNotification = () => {
  return (
    <div className={style.cookieNotification}>
      <div className={`container ${style.container}`}>
        <div className={style.message}>
          <i className='fa-solid fa-cookie' />
          <p>Fugiat sunt aute ullamco quis do sit irure sunt ut ullamco in consectetur laborum reprehenderit. Proident labore duis consequat fugiat elit elit laborum sunt. Magna aliquip dolore incididunt officia nisi exercitation adipisicing deserunt voluptate labore in excepteur. Fugiat officia qui ullamco magna duis aute fugiat deserunt eiusmod nostrud. Adipisicing fugiat cillum minim proident.</p>
        </div>
        <div className={style.btnContainer}>
          <button className={style.btn}>Got it</button>
        </div>
      </div>
    </div>
  )
}

export default CookieNotification