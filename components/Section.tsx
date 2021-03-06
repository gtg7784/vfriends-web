import React, {CSSProperties, ReactNode} from 'react';
import styles from 'styles/section.scss';

type Props = {
  children: ReactNode,
  style?: CSSProperties
}

const Section = ({ children, style }: Props) => (
  <section className={styles.section} style={style}>
    {children}
  </section>
)

export default Section