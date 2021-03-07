import Link from 'next/link'
import Image from 'next/image'
import { Artwork } from 'interfaces'
import { getHref } from 'utils/portfolio';
import styles from 'styles/portfolio.scss'

const Portfolio = ({title, type, index}: Artwork) => (
  <Link href={getHref(type, index as number)}>
    <div className={styles.portfolio}>
      <Image width={298} height={298} src={`/thumbnail/${index}.png`} alt=""/>
      <h4>{title}</h4>
      <span>{type}</span>
    </div>
  </Link>
)

export default Portfolio
