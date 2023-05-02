// Write your code here
import {useState} from 'react'

import {
  LockContainer,
  ImageContainer,
  Img,
  Paragraph,
  Button,
} from './styledComponents'

const Unlock = () => {
  const [isUnlocked, setIsUnlocked] = useState(false)
  const imageUrl = isUnlocked
    ? 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
  const altText = isUnlocked ? 'unlock' : 'lock'
  const text = isUnlocked ? 'Your Device is Unlocked' : 'Your Device is Locked'
  const buttonText = isUnlocked ? 'Lock' : 'Unlock'

  const onClickBtn = () => setIsUnlocked(prevStatus => !prevStatus)

  return (
    <LockContainer>
      <ImageContainer>
        <Img src={imageUrl} alt={altText} />
        <Paragraph>{text}</Paragraph>
      </ImageContainer>
      <Button type="button" onClick={onClickBtn}>
        {buttonText}
      </Button>
    </LockContainer>
  )
}

export default Unlock
