import React from 'react'
import styles from "@/app/styles/NavBar.module.css"
import Logo from "@/app/images/logo.webp"
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const NavBar = () => {
  return (
    <div className={styles.container}>
        <Image className={styles.logo} src={Logo} width={50} height={50} alt='logo' draggable="false" />
    </div>
  )
}

export default NavBar