import Image from 'next/image'
import { Artwork } from 'interfaces'
import styles from 'styles/portfolio.scss'

const Portfolio = ({title, type, index}: Artwork) => (
  <div className={styles.portfolio}>
    <Image width={298} height={298} src={`/thumbnail/${index}.png`} alt=""/>
    <h4>{title}</h4>
    <span>{type}</span>
  </div>
)

export default Portfolio