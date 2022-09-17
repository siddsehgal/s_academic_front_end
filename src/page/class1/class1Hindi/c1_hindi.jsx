import React from 'react'
import styles from './c1_hindi.module.css'
import ChapterCard from '../../../Component/chapterCard/chapterCard'
import Footer from '../../../Component/footer/footer'
import Header from '../../../Component/header/header'
import SubCard from '../../../Component/subCard/subCard'



function c1_hindi() {
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
                    <ChapterCard heading="Hindi Chapter 1"
                        subheading="Special title treatment"
                        text="With supporting text below as a natural lead-in to additional content." />
                    <ChapterCard heading="Hindi Chapter 1"
                        subheading="Special title treatment"
                        text="With supporting text below as a natural lead-in to additional content." />
                    <ChapterCard heading="Hindi Chapter 1"
                        subheading="Special title treatment"
                        text="With supporting text below as a natural lead-in to additional content." />
                    <ChapterCard heading="Hindi Chapter 1"
                        subheading="Special title treatment"
                        text="With supporting text below as a natural lead-in to additional content." />
                    <ChapterCard heading="Hindi Chapter 1"
                        subheading="Special title treatment"
                        text="With supporting text below as a natural lead-in to additional content." />
                    <ChapterCard heading="Hindi Chapter 1"
                        subheading="Special title treatment"
                        text="With supporting text below as a natural lead-in to additional content." />
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default c1_hindi