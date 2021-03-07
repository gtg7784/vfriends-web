import React from 'react'
import Link from 'next/link'
import styles from 'styles/header.scss'

const Header = () => (
  <header className={styles.header}>
    <Link href="/">
      <img src="/static/logo-vfriends-yellow.svg" alt=""/>
    </Link>
    <ul>
      <li>
        <Link href="/#intro">INTRODUCE</Link>
      </li>
      <li>
        <Link href="/#awards">AWARDS</Link>
      </li>
      <li>
        <Link href="/#protfolio">PORTFOLIO</Link>
      </li>
    </ul>
  </header>
)

export default Header;
