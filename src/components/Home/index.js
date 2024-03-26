// Write your JS code here
import Header from '../Header'
import './index.css'

const Home = () => (
  <div className="homePageContainer">
    <Header />
    <div className="shoppingHomePageContainer">
      <div className="shopContainer">
        <h1 className="heading">Clothes That Get You Noticed</h1>
        <p className="paragraph">
          Fashion is part of the daily air and it does not quite help that it
          changes all the time. Clothes have always been a marker of the era and
          we are in a revolution. Your fashion makes you been seen and heard
          that way you are. So, celebrate the seasons new and exciting fashion
          in your own way.
        </p>
        <div className="buttonContainer">
          <button type="button" className="shopNowButton">
            Shop Now
          </button>
        </div>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
        className="shopImage"
        alt="clothes that get you noticed"
      />
    </div>
  </div>
)

export default Home
