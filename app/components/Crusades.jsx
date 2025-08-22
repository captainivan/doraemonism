"use client"
import React, { useState } from 'react'
import styles from "@/app/styles/Crusades.module.css"
import Image from 'next/image'
import VS from "@/app/images/vs.png"
import crusadeOne from "@/app/images/crusade1.png"
import crusadeTwo from "@/app/images/crusade2.png"
import crusadeThree from "@/app/images/crusade3.png"
import crusadeFour from "@/app/images/crusade4.png"
import surrender from "@/app/images/surrender.png"
import surrenderTwo from "@/app/images/surrenderTwo.png"
import { Button } from '@/components/ui/button'
import { Trophy } from 'lucide-react';
import AllHeader from './AllHeader'

const Crusades = () => {
  const [info, setInfo] = useState(false)

  return (
    <>
      <div className={styles.rotateWrapper}>
        <div className={styles.container}>
          {/* LEFT SIDE */}
          <div className={styles.left}>
            <div className={styles.pictureCrusade}>
              <Image src={info ? surrender : crusadeOne} height={300} width={300} alt='crusadeOne' draggable="false" />
            </div>
            <div className={styles.infoDiv}>
              <div className={styles.rod}></div>
              <div className={styles.flag}>
                <h3><strong>shinchanity</strong><br /> &<br /><strong> pikachuism</strong></h3>
                <p><strong>Crusaders</strong> : 450 Shinchanist & 180 pikachuists </p>
                <ul>
                  {info ? (
                    <>
                      <li>• Defeated </li>
                      <li>• 600+ Crusaders Fell</li>
                      <li>• Shinchan Bowed </li>
                      <li>• Pikachu Vanished </li>
                    </>
                  ) : (
                    <>
                      <li>• False God •</li>
                      <li>• Power over • Peace </li>
                      <li>• Fear as their • Tool</li>
                      <li>• Division their • Goal</li>
                    </>
                  )}
                </ul>
              </div>
              <div className={styles.rod}></div>
              <div className={styles.longRod}></div>
              <div className={styles.rod}></div>
            </div>
          </div>

          {/* MIDDLE FLAG */}
          <div className={styles.warflag}>
            <h2>HOLY CRUSADE</h2>
            <div className={styles.vsimg}>
              <Image src={VS} height={300} width={300} alt='vs' />
            </div>
            <div className={styles.triangle}></div>
            <div className={styles.justadd}></div>
          </div>

          {/* RIGHT SIDE */}
          <div className={styles.right}>
            <div className={styles.infoDiv}>
              <div className={styles.rod}></div>
              <div className={styles.flagTwo}>
                <h3><strong>DORAEMONISM</strong></h3>
                <p><strong>Crusaders</strong> : 2.1K Doraemonist</p>
                <ul>
                  <li>• True God •</li>
                  <li>Kindness above All</li>
                  <li>• Friendship is • Strength</li>
                  <li>• Unity as the • Path</li>
                  <li>• Peace before • Power </li>
                </ul>
              </div>
              <div className={styles.rod}></div>
              <div className={styles.longRod}></div>
              <div className={styles.rod}></div>
            </div>
            <div className={styles.pictureCrusadeTwo}>
              <div className={styles.buttonDiv}>
                <Button onClick={() => { setInfo(!info) }} className={styles.ccheckButton}>
                  Check Crusade Winner <Trophy />
                </Button>
              </div>
              <Image src={crusadeTwo} height={300} width={300} alt='crusadeTwo' draggable="false" />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.rotateWrapperTwo}>
        <div className={styles.containerTwo} >
        <AllHeader Title={"The Holy Crusade"} Desc={"In the sacred dawn of Doraemonism’s history, despite the boundless peace of Lord Doraemon, the wrath of Shinchan and Pikachu rose  only to be swallowed by their own darkness"} />
          <div className={styles.upTwo}>
            <div className={styles.buttonDivTwo}>
              <Button onClick={() => { setInfo(!info) }} className={styles.ccheckButtonTwo}>
                Check Crusade Winner <Trophy />
              </Button>
            </div>
            <div className={styles.pictureCrusadeTwo}>
              <Image src={info ? surrenderTwo : crusadeThree} height={300} width={300} alt='crusadeOne' draggable="false" />
            </div>
          </div>
          <div className={styles.midDiv}>
            <div className={styles.infoDivTwoOne}>
              <div className={styles.rodTwo}></div>
              <div className={styles.flagTwoOne}>
                <h3><strong>shinchanity</strong><br /> &<br /><strong> pikachuism</strong></h3>
                <p><strong>Crusaders</strong> : 450 Shinchanist & 180 pikachuists </p>
                <ul>
                  {info ? (
                    <>
                      <li>• Defeated </li>
                      <li>• 600+ Crusaders Fell</li>
                      <li>• Shinchan Bowed </li>
                      <li>• Pikachu Vanished </li>
                    </>
                  ) : (
                    <>
                      <li>• False God •</li>
                      <li>• Power over • Peace </li>
                      <li>• Fear as their • Tool</li>
                      <li>• Division their • Goal</li>
                    </>
                  )}
                </ul>
              </div>
              <div className={styles.rodTwo}></div>
            </div>
            <div className={styles.warflagTwo}>
              <h2>HOLY CRUSADE</h2>
              <div className={styles.vsimgTwo}>
                <Image src={VS} height={300} width={300} alt='vs' />
              </div>
              <div className={styles.triangleTwo}></div>
              <div className={styles.justaddTwo}></div>
            </div>
            <div className={styles.infoDivTwoOne}>
              <div className={styles.rodTwo}></div>
              <div className={styles.flagTwoTwo}>
                <h3><strong>DORAEMONISM</strong></h3>
                <p><strong>Crusaders</strong> : 2.1K Doraemonist</p>
                <ul>
                  <li>• True God •</li>
                  <li>Kindness above All</li>
                  <li>• Friendship is • Strength</li>
                  <li>• Unity as the • Path</li>
                  <li>• Peace before • Power </li>
                </ul>
              </div>
              <div className={styles.rodTwo}></div>
            </div>

          </div>
          <div className={styles.downTwo}>

            <div className={styles.pictureCrusadeTwo}>
              <Image src={crusadeFour} height={300} width={300} alt='crusadeTwo' draggable="false" />
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Crusades
