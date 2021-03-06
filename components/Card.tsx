import React,  {ReactNode} from 'react'
import styles from 'styles/card.scss'

type Props = {
  children: ReactNode
  className?: string
}

const Card = ({ children, className }: Props) => (
    <div className={[styles.card, className].join(' ')}>
      {children}
    </div>
  )


export default Card
