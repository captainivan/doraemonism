import React from 'react'
import styles from '@/app/styles/Home.module.css'
import NavBar from './NavBar'
import Link from 'next/link'
import { ChevronsRight } from 'lucide-react'
import Image from 'next/image'
import HeroImage from "@/app/images/hero.png"

const Hero = () => {
  return (
    <div className={styles.container}>
      <NavBar />

      {/* Hero Background Image */}
      <div className={styles.bgWrap}>
        <Image
          src={HeroImage}
          alt="Doraemonism background"
          fill
          priority
          className={styles.bgImage}
        />
      </div>

      {/* Hero Content */}
      <div className={styles.heading}>
        <div>
          <h1>
            Doraemonism:<br /> The Eternal Path
          </h1>
          <p>
            Following the prophets Nobita, Shizuka, and the great Doraemon.
          </p>
          <Link
            className={styles.linked}
            href="https://www.reddit.com/r/doraemonism/"
            target="_blank"
          >
            Join The Path <ChevronsRight className={styles.icon} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
