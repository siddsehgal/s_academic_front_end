import React from 'react'
import styles from './c1_hindi.module.css'
import ChapterCard from '../../../Component/chapterCard/chapterCard'
import Footer from '../../../Component/footer/footer'
import Header from '../../../Component/header/header'
import LeftSectionCard from '../../../Component/leftSectionCard/leftSectionCard'



function c1_hindi() {
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