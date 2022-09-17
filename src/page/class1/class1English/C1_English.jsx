import React from 'react'
import styles from './C1_English.module.css'
import Header from '../../../Component/header/header'
import Footer from '../../../Component/footer/footer'
import ChapterCard from '../../../Component/chapterCard/chapterCard'
import SubCard from '../../../Component/subCard/subCard'

function C1_English() {
  return (
    <div>
      <Header></Header>
      <div className={styles.detailSection}>
        <SubCard subject1="Maths"
          subject2="English" subject3="Hindi"
          subject4="Physical Education (Minor Subject)"
          subject5="Arts and Craft (Minor Subject)"
          subject6="EVS (Minor Subject)"
          subject7="General Knowledge (Minor Subject)" />
        <div className={styles.card}>
          <ChapterCard heading="English Chapter 1"
            subheading="Special title treatment"
            text="With supporting text below as a natural lead-in to additional content." />
          <ChapterCard heading="English Chapter 1"
            subheading="Special title treatment"
            text="With supporting text below as a natural lead-in to additional content." />
          <ChapterCard heading="English Chapter 1"
            subheading="Special title treatment"
            text="With supporting text below as a natural lead-in to additional content." />
          <ChapterCard heading="English Chapter 1"
            subheading="Special title treatment"
            text="With supporting text below as a natural lead-in to additional content." />
          <ChapterCard heading="English Chapter 1"
            subheading="Special title treatment"
            text="With supporting text below as a natural lead-in to additional content." />
          <ChapterCard heading="English Chapter 1"
            subheading="Special title treatment"
            text="With supporting text below as a natural lead-in to additional content." />
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default C1_English