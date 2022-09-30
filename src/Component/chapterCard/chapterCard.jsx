import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './chapterCard.module.css'


const ClassCard = ({ subheading, heading, text, LinkForLearnMore, LinkForExercise, LinkForDownload_pdf}) => {

    const navigate = useNavigate();


    return (
        <div className={styles.right}>
            <div class="card">
                {heading && <h5 class="card-header">{heading}</h5>}
                <div class="card-body">
                    {subheading && <h5 class="card-title">{subheading}</h5>}
                    {text && <p class="card-text">{text}</p>}
                    {LinkForLearnMore && <button onClick={()=>navigate(`${LinkForLearnMore}`)}  className={`btn btn-primary ${styles.btnmargin}`}>Learn More</button>}
                    {LinkForExercise && <button onClick={()=>navigate(`${LinkForExercise}`)} className={`btn btn-primary ${styles.btnmargin}`}>Exercise</button>}
                    {LinkForDownload_pdf && <button onClick={()=>navigate(`${LinkForDownload_pdf}`)} class="btn btn-primary">Download pdf</button>}
                </div>
            </div>
        </div>
    )

}

export default ClassCard