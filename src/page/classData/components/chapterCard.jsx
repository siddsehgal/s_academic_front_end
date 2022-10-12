import PropTypes from 'prop-types';
import React, { Component } from 'react';
// import { useNavigate } from 'react-router-dom'
import styles from './chapterCard.module.css';
import dashStyles from '../../dashboard/dashboard.module.css';
import { useNavigate } from 'react-router-dom';
import { Edit } from '@mui/icons-material';

const ClassCard = ({
    data: propData,
    setEditOpen,
    setTopicId,
    classId,
    subjectId,
    isAdmin,
}) => {
    const navigate = useNavigate();
    const { title, description, _id } = propData;

    return (
        <div className={styles.right}>
            <div className="card">
                {title && (
                    <h5
                        className="card-header"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            marginBottom: '1%',
                            justifyContent: 'space-between',
                        }}
                    >
                        {title}{' '}
                        {isAdmin === 'true' && (
                            <Edit
                                sx={{
                                    fontSize: '25px',
                                    cursor: 'pointer',
                                    marginLeft: '5px',
                                }}
                                // className={`${dashStyles.add_button}`}
                                // style={{
                                //     backgroundImage: `url("/images/editIcon.png")`,
                                // }}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setEditOpen(true);
                                    setTopicId(_id);
                                }}
                            ></Edit>
                        )}
                    </h5>
                )}

                <div className="card-body">
                    {description && <p className="card-text">{description}</p>}
                    <button
                        className={`btn btn-primary ${styles.btnmargin}`}
                        onClick={() => {
                            navigate(
                                `/class/${classId}/subject/${subjectId}/topic/${_id}`
                            );
                        }}
                    >
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;
