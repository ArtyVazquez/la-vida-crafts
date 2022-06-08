import React from 'react'
import styles from '/styles/ContactBanner.module.css'

export default function ContactBanner() {
  return (
    <div className={styles.box}>
      <h1 className={styles.title}>Contact</h1>
      <p className={styles.text}>Get in touch with us for any questions about our services or pricing. Our gallery shows some of the work we have done.</p>
    </div>
  )
}
