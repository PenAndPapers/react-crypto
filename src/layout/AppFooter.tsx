import { Link } from 'react-router-dom'

const AppNavbar = () => {
  return (
    <footer>
      <div className="container">
        <div className="links">
          <div>
            <h2><Link to='/'>Krypto</Link></h2>
            <p>Ad veniam enim esse in eu eiusmod sint Lorem do. Consequat laborum non aute minim consectetur mollit eu consequat officia aute. Aliqua pariatur quis sit eiusmod quis laboris sint elit cillum aute.</p>
          </div>
          <nav>
            <h2>Links</h2>
            <Link to='/'>How it works</Link>
            <Link to='/'>Cryptos</Link>
            <Link to='/'>Features</Link>
            <Link to='/'>Testemonials</Link>
            <Link to='/'>Blogs</Link>
          </nav>
          <nav>
            <h2>Legal</h2>
            <Link to='/'>Terms of use</Link>
            <Link to='/'>Terms and conditions</Link>
            <Link to='/'>Privacy policy</Link>
            <Link to='/'>Cookie policy</Link>
          </nav>
          <div>
            <h2>Newsletter</h2>
            <p>Over 50M people have subscribed</p>
            <form>
              <input type="email" required />
              <button>Subscribe</button>
            </form>
            <span>We don't sell your email and spam</span>
          </div>
        </div>
        <div className="social">
          <div>
          <Link to='/'>Privacy &amp; terms</Link>&nbsp;<Link to='/'>Contact us</Link>
          </div>
          <div>
            <p>Copyright @ 2022 xpence</p>
          </div>
          <div>
            <a href='#'><i className='fa-brands fa-youtube-square' /></a> 
            <a href='#'><i className='fa-brands fa-linkedin' /></a>
            <a href='#'><i className='fa-brands fa-facebook-square' /></a>
            <a href='#'><i className='fa-brands fa-twitter-square' /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default AppNavbar