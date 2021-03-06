import React from 'react'
import styles from 'styles/member.scss'
import {User} from 'interfaces'

const Member = ({ name, role, description }: User) => (
  <div className={styles.member}>
    <div>
      <h3>{name}</h3>
      <span>{role}</span>
    </div>
    <p>{description}</p>
  </div>
)

export default Member
