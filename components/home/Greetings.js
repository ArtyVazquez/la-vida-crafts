import React from 'react'
import styles from '/styles/HomeBanner.module.css'

export default function Greetings() {
  return (
    <div className={styles.box}>
      <h1 className={styles.titleFocus}>Welcome to La Vida Crafts</h1>
      <h4 className={styles.titleSub}>Gift a Smile to Remember</h4>
      <p className={styles.description}>La Vida Crafts is a small business located in Chicago, IL.
       The business was started with the goal of making others smile.</p>
      <div>
        <h4>Some of our services include: </h4>
        <ul>
          <li>Garlands</li>
          <li>Ballon Bouquets</li>
          <li>Party Favors</li>
          <li>Flowers</li>
          <li>Shirts</li>
          <li>Crafts</li>
        </ul>
      </div>
    </div>
  )
}