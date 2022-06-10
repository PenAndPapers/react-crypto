import './App.css'
import AppNavbar from './layout/AppNavbar'
import AppMain from './layout/AppMain'
import AppFooter from './layout/AppFooter'
import CookieNotification from './components/CookieNotification'

function App() {
  return (
    <div className="app">
      <AppNavbar />
      <AppMain />
      <AppFooter />
      <CookieNotification />
    </div>
  )
}

export default App
