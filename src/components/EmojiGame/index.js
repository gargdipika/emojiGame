import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
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
  state = this.props

  shuffledEmojisList = () => {
    const {emojisList} = this.state
    console.log(emojisList)
    return emojisList.sort(() => Math.random() - 0.5)
  }

  onShuffling = () => {
    const sortedList = this.shuffledEmojisList()
    this.setState({emojisList: sortedList})
  }

  render() {
    const {emojisList} = this.state
    console.log(emojisList)
    return (
      <div className="background-container">
        <NavBar />
        <ul className="emoji-container">
          {emojisList.map(eachEmoji => (
            <EmojiCard
              key={eachEmoji.id}
              onShuffling={this.onShuffling}
              emojiDetail={eachEmoji}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default EmojiGame
