// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetail, onShuffling} = props
  const {emojiName, emojiUrl, id} = emojiDetail

  const onClickEmoji = () => {
    onShuffling(id)
  }

  return (
    <li className="list-style" onClick={onClickEmoji}>
      <img alt={emojiName} src={emojiUrl} />
    </li>
  )
}

export default EmojiCard
