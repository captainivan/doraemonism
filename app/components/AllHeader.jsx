import React from 'react'
import Bell from "@/app/images/bell.webp"
import styles from "@/app/styles/AllHeader.module.css"
import Image from "next/image"

const AllHeader = ({ Title, Desc }) => {
    return (
        <>
            <div className={styles.Allcontainer}>
                <h1>{Title}</h1>
                <p className="text-center font-['Arial,Helvetica,sans-serif'] italic font-light">{Desc}</p>
                <div className={styles.designTimeLineHeader}>
                    <div className={styles.design}></div>
                    <Image src={Bell} height={50} width={50} alt='bell' draggable="false" />
                    <div className={styles.design}></div>
                </div>
            </div>
        </>

    )
}

export default AllHeader