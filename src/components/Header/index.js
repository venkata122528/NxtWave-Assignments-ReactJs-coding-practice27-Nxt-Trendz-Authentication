// Write your JS code here
import './index.css'

const Header = () => (
  <nav className="headerContainer">
    <div className="logoImageContainer">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        className="logoImage"
        alt="website logo"
      />
    </div>
    <div className="thumbnailsContainer">
      <li className="thumbnails">Home</li>
      <li className="thumbnails">Products</li>
      <li className="thumbnails">Cart</li>
      <button type="button" className="logoutButton">
        Logout
      </button>
    </div>
  </nav>
)

export default Header
