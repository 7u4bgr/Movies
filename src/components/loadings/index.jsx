import React from 'react'
import styles from './index.module.css'
import {StartIcon} from '../../icons'
const Loadings = () => {
  return (
    <div className={styles.background}>
    <div className={styles.control}>
      <StartIcon/>
    </div>
</div>
  )
}

export default Loadings