// Write your code here.
import './index.css'

const WinOrLossCard = props => {
  const {isWon, onClickPlayAgain, score} = props
  const imageUrl = isWon
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const heading = isWon ? 'You Won' : 'You Lose'
  const result = isWon ? 'Best Score' : 'Score'

  return (
    <div className="win-loss-container">
      <div className="background-win-loss-container">
        <div className="result-container">
          <h1>{heading}</h1>
          <p className="result">{result}</p>
          <p className="score">{score}/12</p>
          <button className="button1" onClick={onClickPlayAgain} type="button">
            Play Again
          </button>
        </div>
        <img className="image-win-loss" src={imageUrl} alt="win or lose" />
      </div>
    </div>
  )
}

export default WinOrLossCard
