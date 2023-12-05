import React from 'react'
import styles from './index.module.css'
import Logo from '../../assets/images/logosbaku.png'
const Loadings = () => {
  return (
    <div className={styles.background}>
    <div className={styles.control}>
      <img src={Logo} alt="Logo" />
    </div>
</div>
  )
}

export default Loadings