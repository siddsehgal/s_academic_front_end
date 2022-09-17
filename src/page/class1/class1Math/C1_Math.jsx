import React from 'react'
import ChapterCard from '../../../Component/chapterCard/chapterCard'
import Footer from '../../../Component/footer/footer'
import Header from '../../../Component/header/header'
import SubCard from '../../../Component/subCard/subCard'
import styles from './C1_Math.module.css'



function C1_Math() {
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
                <ChapterCard heading="Math Chapter 1"
                        subheading="Special title treatment"
                        text="With supporting text below as a natural lead-in to additional content." />
                    <ChapterCard heading="Math Chapter 1"
                        subheading="Special title treatment"
                        text="With supporting text below as a natural lead-in to additional content." />
                    <ChapterCard heading="Math Chapter 1"
                        subheading="Special title treatment"
                        text="With supporting text below as a natural lead-in to additional content." />
                    <ChapterCard heading="Math Chapter 1"
                        subheading="Special title treatment"
                        text="With supporting text below as a natural lead-in to additional content." />
                    <ChapterCard heading="Math Chapter 1"
                        subheading="Special title treatment"
                        text="With supporting text below as a natural lead-in to additional content." />
                    <ChapterCard heading="Math Chapter 1"
                        subheading="Special title treatment"
                        text="With supporting text below as a natural lead-in to additional content." />
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default C1_Math