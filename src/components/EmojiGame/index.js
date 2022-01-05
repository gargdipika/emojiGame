import {Component} from 'react'

import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLossCard from '../WinOrLoseCard'

import './index.css'

/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

class EmojiGame extends Component {
  state = {clickedEmojiIdList: [], topScore: 0, isGameProgress: true}

  resetList = () => {
    this.setState({clickedEmojiIdList: [], isGameProgress: true})
  }

  renderScoreCard = () => {
    const {emojisList} = this.props
    const {clickedEmojiIdList} = this.state
    const isWon = emojisList.length === clickedEmojiIdList.length

    return (
      <WinOrLossCard
        isWon={isWon}
        score={clickedEmojiIdList.length}
        onClickPlayAgain={this.resetList}
      />
    )
  }

  endGameAndSetTopScore = currentScores => {
    const {topScore} = this.state
    let scoreTop = topScore

    if (currentScores > scoreTop) {
      scoreTop = currentScores
    }

    this.setState({topScore: scoreTop, isGameProgress: false})
  }

  onClickEmoji = id => {
    const {emojisList} = this.props
    const {clickedEmojiIdList} = this.state
    const isSameEmojiClicked = clickedEmojiIdList.includes(id)
    const lengthOfClickedEmojis = clickedEmojiIdList.length

    if (isSameEmojiClicked) {
      this.endGameAndSetTopScore(lengthOfClickedEmojis)
    } else {
      if (lengthOfClickedEmojis === emojisList.length - 1) {
        this.endGameAndSetTopScore(emojisList.length)
      }
      this.setState(prevState => ({
        clickedEmojiIdList: [...prevState.clickedEmojiIdList, id],
      }))
    }
  }

  shufflingTheEmojiList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  renderEmojisList = () => {
    const shuffledList = this.shufflingTheEmojiList()
    return (
      <ul className="emoji-container">
        {shuffledList.map(eachEmoji => (
          <EmojiCard
            key={eachEmoji.id}
            emojiDetail={eachEmoji}
            onClickEmoji={this.onClickEmoji}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {isGameProgress, clickedEmojiIdList, topScore} = this.state

    return (
      <div className="background-container">
        <NavBar
          currentScore={clickedEmojiIdList.length}
          isGameInProgress={isGameProgress}
          topScore={topScore}
        />
        <div>
          {isGameProgress ? this.renderEmojisList() : this.renderScoreCard()}
        </div>
      </div>
    )
  }
}
export default EmojiGame
