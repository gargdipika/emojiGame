// Write your code here.
import './index.css'

const NavBar = () => (
  <nav className="nav-style">
    <div className="heading-nav">
      <img
        className="image"
        src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
        alt="emoji logo"
      />
      <h1 className="heading">Emoji Game</h1>
    </div>
    <div className="score-card">
      <p className="score-style">Score: 0</p>
      <p className="score-style">Top Score: 0</p>
    </div>
  </nav>
)

export default NavBar
