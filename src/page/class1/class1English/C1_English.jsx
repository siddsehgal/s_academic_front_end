import React from 'react'
import styles from './C1_English.module.css'
import Header from '../../../Component/header/header'
import Footer from '../../../Component/footer/footer'
import ChapterCard from '../../../Component/chapterCard/chapterCard'
import LeftSectionCard from '../../../Component/leftSectionCard/leftSectionCard'
import { useNavigate } from 'react-router-dom'


function C1_English() {

  const navigate = useNavigate();

  return (
    <div>
      <Header></Header>
      <div className={styles.detailSection}>
      <LeftSectionCard item='Subject'
                    item1="Maths"
                    item2="English"
                    item3="Hindi"
                    item4="Physical Education (Minor Subject)"
                    item5="Arts and Craft (Minor Subject)"
                    item6="EVS (Minor Subject)"
                    item7="General Knowledge (Minor Subject)" />
        <div className={styles.card}>
          <ChapterCard heading="English Chapter 1"
            subheading="Special title treatment"
            text="With supporting text below as a natural lead-in to additional content."
            LinkForLearnMore="#" 
            LinkForExercise="/class1/ExcasieClass1"
            LinkForDownload_pdf="#"/>
          <ChapterCard heading="English Chapter 1"
            subheading="Special title treatment"
            text="With supporting text below as a natural lead-in to additional content." 
            LinkForLearnMore="#" 
            LinkForExercise="/class1/ExcasieClass1"
            LinkForDownload_pdf="#"/>
          <ChapterCard heading="English Chapter 1"
            subheading="Special title treatment"
            text="With supporting text below as a natural lead-in to additional content." 
            LinkForLearnMore="#" 
            LinkForExercise="/class1/ExcasieClass1"
            LinkForDownload_pdf="#"/>
          <ChapterCard heading="English Chapter 1"
            subheading="Special title treatment"
            text="With supporting text below as a natural lead-in to additional content." 
            LinkForLearnMore="#" 
            LinkForExercise="/class1/ExcasieClass1"
            LinkForDownload_pdf="#"/>
          <ChapterCard heading="English Chapter 1"
            subheading="Special title treatment"
            text="With supporting text below as a natural lead-in to additional content." 
            LinkForLearnMore="#" 
            LinkForExercise="/class1/ExcasieClass1"
            LinkForDownload_pdf="#"/>
          <ChapterCard heading="English Chapter 1"
            subheading="Special title treatment"
            text="With supporting text below as a natural lead-in to additional content." 
            LinkForLearnMore="#" 
            LinkForExercise="/class1/ExcasieClass1"
            LinkForDownload_pdf="#"/>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}
//onClick={()=>navigate("/dash")}
export default C1_English