import PropTypes from 'prop-types'
import React, { Component } from 'react'
// import { useNavigate } from 'react-router-dom'
import styles from './chapterCard.module.css'


const ClassCard = ({subheading, heading, text}) => {

    // const navigate = useNavigate();


    return (
        <div className={styles.right}>
            <div class="card">
                {heading && <h5 class="card-header">{heading}</h5>}
                <div class="card-body">
                    {subheading && <h5 class="card-title">{subheading}</h5>}
                    {text && <p class="card-text">{text}</p>}
                    <a href="#" className={`btn btn-primary ${styles.btnmargin}`}>Learn More</a>
                    <a href="#" className={`btn btn-primary ${styles.btnmargin}`}>Exercise</a>
                    <a href="#" class="btn btn-primary">Download pdf</a>
                </div>
            </div>
        </div>
    )

}

export default ClassCard