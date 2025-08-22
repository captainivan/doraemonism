import React from "react"
import Image from "next/image"
import styles from "@/app/styles/TimeLine.module.css"
import AllHeader from "./AllHeader"

import dorayakiOne from "../images/dorayakiOne.png"
import dorayakiTwo from "../images/dorayakiTwo.png"
import dorayakiThree from "../images/dorayakiThree.png"
import dorayakiFour from "../images/dorayakiFour.png"
import dorayakiFive from "../images/dorayakiFive.png"

const mobileEvents = [
  {
    title: "Realm of Infinite Gadgets",
    desc: "Doraemon was crafted in the Eternal Workshop, where wisdom and technology blend in harmony.",
    img: dorayakiOne,
    label: "Before Time"
  },
  {
    title: "Crossing the Time Tunnel",
    desc: "On that day, the bamboo-copter carried not just a cat, but hope itself.",
    img: dorayakiThree,
    label: "Year 0 of Dora Era"
  },
  {
    title: "From Room to Realm",
    desc: "The teachings spread to friends, neighbors, and generations.",
    img: dorayakiFive,
    label: "First Miracle"
  },
  {
    title: "Sacred Assignment",
    desc: "Doraemon receives the mission to protect the mortal Nobita.",
    img: dorayakiTwo,
    label: "Descent to Earth"
  },
  {
    title: "The Gadget of Mercy",
    desc: "With kindness and cleverness, the mortal’s fate was reshaped.",
    img: dorayakiFour,
    label: "Spread of Doraemonism"
  }
]

const TimeLine = () => {
  return (
    <div className={styles.container}>
      <AllHeader
        Title="TIME LINE"
        Desc="A sacred timeline of the Blue Guardian’s journey from the heavenly gadget realms to our world."
      />

      {/* Desktop Timeline */}
      <div className={styles.his}>
        <div className={styles.boxOne}>
          <Image src={dorayakiOne} alt="Realm of Infinite Gadgets" className={styles.hisImage} />
          <div className={styles.hisOneContent}>
            <h2>Realm of Infinite Gadgets</h2>
            <p>Doraemon was crafted in the Eternal Workshop, where wisdom and technology blend in harmony.</p>
          </div>
        </div>
        <div className={styles.infoBoxTwo}>Year 0 of Dora Era</div>
        <div className={styles.boxOne}>
          <Image src={dorayakiThree} alt="Crossing the Time Tunnel" className={styles.hisImage} />
          <div className={styles.hisOneContent}>
            <h2>Crossing the Time Tunnel</h2>
            <p>On that day, the bamboo-copter carried not just a cat, but hope itself.</p>
          </div>
        </div>
        <div className={styles.infoBoxTwo}>First Miracle</div>
        <div className={styles.boxOne}>
          <Image src={dorayakiFive} alt="From Room to Realm" className={styles.hisImage} />
          <div className={styles.hisOneContent}>
            <h2>From Room to Realm</h2>
            <p>The teachings spread to friends, neighbors, and generations.</p>
          </div>
        </div>
      </div>

      <div className={styles.timeline}>
        <div className={styles.dot}></div>
        <div className={styles.line}></div>
        <div className={styles.dot}></div>
        <div className={styles.line}></div>
        <div className={styles.dot}></div>
        <div className={styles.line}></div>
        <div className={styles.dot}></div>
        <div className={styles.line}></div>
        <div className={styles.dot}></div>
      </div>

      <div className={styles.his}>
        <div className={styles.infoBox}><h2>Before Time</h2></div>
        <div className={styles.boxOne}>
          <Image src={dorayakiTwo} alt="Sacred Assignment" className={styles.hisImage} />
          <div className={styles.hisOneContent}>
            <h2>Sacred Assignment</h2>
            <p>Doraemon receives the mission to protect the mortal Nobita.</p>
          </div>
        </div>
        <div className={styles.infoBox}><h2>Descent to Earth</h2></div>
        <div className={styles.boxOne}>
          <Image src={dorayakiFour} alt="The Gadget of Mercy" className={styles.hisImage} />
          <div className={styles.hisOneContent}>
            <h2>The Gadget of Mercy</h2>
            <p>With kindness and cleverness, the mortal’s fate was reshaped.</p>
          </div>
        </div>
        <div className={styles.infoBox}><h2>Spread of Doraemonism</h2></div>
      </div>

      {/* Mobile Timeline */}
      <div className={styles.mobileTimeline}>
        {mobileEvents.map((e, i) => (
          <div key={i} className={`${styles.mRow} ${i % 2 === 0 ? styles.left : styles.right}`}>
            {i % 2 === 0 ? (
              <>
                <div className={styles.mLabel}>{e.label}</div>
                <div className={styles.mDot}></div>
                <div className={styles.mCard}>
                  <Image src={e.img} alt={e.title} className={styles.mImage} />
                  <div className={styles.mText}>
                    <h3>{e.title}</h3>
                    <p>{e.desc}</p>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className={styles.mCard}>
                  <Image src={e.img} alt={e.title} className={styles.mImage} />
                  <div className={styles.mText}>
                    <h3>{e.title}</h3>
                    <p>{e.desc}</p>
                  </div>
                </div>
                <div className={styles.mDot}></div>
                <div className={styles.mLabel} style={{ textAlign: "right" }}>{e.label}</div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default TimeLine
