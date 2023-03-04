import React from 'react'
import Link from 'next/link'
import styles from '@/styles/Nav.module.css'


const Nav = () => {
  return (
    <nav  >
      
        <ul className={styles.ul}>
          <li >
            <Link href='/' className={styles.link}>Home</Link>
          </li>
          <li>
            <Link href="/components/Contact" className={styles.link}>Contact</Link>
          </li>
          <li>
            <Link href="/components/About" className={styles.link}>About</Link>
          </li>
        </ul>

      
    </nav>
  )
}

export default Nav