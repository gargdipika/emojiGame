// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetail, onClickEmoji} = props
  const {emojiName, emojiUrl, id} = emojiDetail

  const onClickEmojiFn = () => {
    onClickEmoji(id)
  }

  return (
    <li className="list-style">
      <button className="button" type="button" onClick={onClickEmojiFn}>
        <img alt={emojiName} src={emojiUrl} />
      </button>
    </li>
  )
}

export default EmojiCard
