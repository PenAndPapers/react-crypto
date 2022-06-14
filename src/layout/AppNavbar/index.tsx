import { Link } from 'react-router-dom'
import style from './style.module.css'

const AppNavbar = () => {
  return (
    <div className="container">
      <div className={style.navbar}>
        <Link to='/' className={style.logo}>Krypto</Link>
        <nav>
          <Link to='/'>How crypto works</Link>
          <Link to='/'>Cryptos</Link>
          <Link to='/'>Feature</Link>
          <Link to='/'>Testimonial</Link>
          <Link to='/'>University</Link>
        </nav>
        <button>Country</button>
      </div>
    </div>
  )
}

export default AppNavbar