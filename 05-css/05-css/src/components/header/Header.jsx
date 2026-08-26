import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.hdr}>
     <h1>This is Header.</h1> 
      <button>Click on it</button>
      </div>
  )
}

export default Header