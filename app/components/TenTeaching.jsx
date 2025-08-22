import React from 'react'
import styles from "@/app/styles/TenTeachings.module.css"
import AllHeader from './AllHeader'

const TenTeaching = () => {
  return (
    <div className={styles.container}>
      <AllHeader Title={'The SIX Sacred Teachings'} Desc={'Guidance from the Blue Guardian for a life of joy, kindness, and wisdom.'} />
      <div className={styles.teaching}>
        <div className={styles.teachingImg}>
          <div className={styles.innercontent}>
            <h3>Believe in  Pocket</h3>
            <p>All solutions lie in the Four-Dimensional Pocket—sometimes you just need to ask</p>
          </div>
        </div>
        <div className={styles.teachingImg}>
          <div className={styles.innercontent}>
            <h3>Kindness Over <br /> Chaos</h3>
            <p>Doraemon never judged Nobita, even when he deserved it. Be kind</p>
          </div>
        </div>
        <div className={styles.teachingImg}>
          <div className={styles.innercontent}>
            <h3>Do Not Misuse <br/> the Gadget</h3>
            <p>Those who abuse gadgets shall face comic disasters</p>
          </div>
        </div>
        <div className={styles.teachingImg}>
          <div className={styles.innercontent}>
            <h3>Respect <br/> Timeline</h3>
            <p>Time Travel is sacred. Fix mistakes, don’t cheat on tests or steal</p>
          </div>
        </div>
        <div className={styles.teachingImg}>
          <div className={styles.innercontent}>
            <h3>Everyone Has <br/> a Gian to Face</h3>
            <p>Life will always have a bully. But courage  can lift you above.</p>
          </div>
        </div>
        <div className={styles.teachingImg}>
        <div className={styles.innercontent}>
            <h3>Shizuka is <br/> the Ideal</h3>
            <p>Graceful, kind, and always bathing… she represents peace and balance</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TenTeaching