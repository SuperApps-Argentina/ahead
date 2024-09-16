import React from 'react'
import Styles from './Header.module.css'
import { TfiCup } from 'react-icons/tfi'
import { IoIosArrowBack } from 'react-icons/io'

export const Header = () => {
  return (
    <div className={Styles.container}>
        <div className={Styles.arrow}> <IoIosArrowBack /> </div>
        <div className={Styles.containerTitle}><TfiCup /> Ranking</div>
        <div></div>
    </div>
  )
}
