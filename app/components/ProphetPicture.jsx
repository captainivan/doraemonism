"use client"
import React from 'react'
import styles from "@/app/styles/ProphetPicture.module.css"
import AllHeader from './AllHeader'
import Image from "next/image"

// Import prophet images
import prophetOne from "@/app/images/prophetOne.png"
import prophetTwo from "@/app/images/prophetTwo.png"
import prophetThree from "@/app/images/prophetThree.png"
import prophetFour from "@/app/images/prophetFour.png"

const ProphetPicture = () => {
  return (
    <div className={styles.container}>
      <AllHeader 
        Title={"The Sacred Prophets of Doraemonism"} 
        Desc={"Chosen by the Blue Guardian to guide mortals with kindness, courage, and curiosity."} 
      />

      <div className={styles.prophetDiv}>
        <div className={styles.prophetCard}>
          <Image src={prophetOne} alt="Prophet Nobita" className={styles.prophetImage} />
          <div className={styles.infoProphet}>
            <h2>Prophet<br/> Nobita</h2>
            <p>The prophet of hope, teaching that even the weakest can rise with faith and courage.</p>
          </div>
        </div>

        <div className={styles.prophetCard}>
          <Image src={prophetTwo} alt="Prophet Shizuka" className={styles.prophetImage} />
          <div className={styles.infoProphet}>
            <h2>Prophet<br/> Shizuka</h2>
            <p>The prophet of kindness, spreading compassion, purity, balance, harmony and Love.</p>
          </div>
        </div>

        <div className={styles.prophetCard}>
          <Image src={prophetThree} alt="Prophet Suneo" className={styles.prophetImage} />
          <div className={styles.infoProphet}>
            <h2>Prophet<br/> Suneo</h2>
            <p>The prophet of desire, reminding us of humility through pride, temptation, and wisdom.</p>
          </div>
        </div>

        <div className={styles.prophetCard}>
          <Image src={prophetFour} alt="Prophet Takeshi (Gian)" className={styles.prophetImage} />
          <div className={styles.infoProphet}>
            <h2>Prophet<br/> Takeshi (Gian)</h2>
            <p>The prophet of strength, embodying power, resilience, courage, and guardianship.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProphetPicture
