// Write your code here.
import './index.css'

const NavBar = props => {
  const {currentScore, isGameInProgress, topScore} = props

  return (
    <nav className="nav-style">
      <div className="heading-nav">
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="heading">Emoji Game</h1>
      </div>
      {isGameInProgress && (
        <div className="score-card">
          <p className="score-style">Score: {currentScore}</p>
          <p className="score-style">Top Score: {topScore}</p>
        </div>
      )}
    </nav>
  )
}
export default NavBar
