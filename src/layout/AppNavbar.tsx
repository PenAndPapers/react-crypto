import { Link } from 'react-router-dom'

const AppNavbar = () => {
  return (
    <div className="container">
      <div className="navbar">
        <Link to='/' className='logo'>Krypto</Link>
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