import React from 'react'
import ChapterCard from '../../../Component/chapterCard/chapterCard'
import Footer from '../../../Component/footer/footer'
import Header from '../../../Component/header/header'
import LeftSectionCard from '../../../Component/leftSectionCard/leftSectionCard'
import styles from './C1_Math.module.css'



function C1_Math() {
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