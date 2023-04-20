import PropTypes from 'prop-types';
import React, { Component, useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom'
import styles from './chapterCard.module.css';
import dashStyles from '../../dashboard/dashboard.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { Edit } from '@mui/icons-material';
import { APICall } from '../../../services/apiCall';

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
    const [data, setData] = useState([]);

    useEffect(() => {
        async function getData() {
            // setIsLoading(true);
            const { status, data } = await APICall({
                method: 'get',
                url: `/assignment?topic_id=${_id}`,
            });

            if (status === 'fail') return alert.error(data.message);

            setData(data.data);
            // setIsLoading(false);
        }
        getData();
    }, []);

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
                    <button
                        className="btn btn-primary"
                        type="button"
                        data-toggle="collapse"
                        data-target={'#' + _id}
                        aria-expanded="false"
                        aria-controls="collapseExample"
                    >
                        Exercise
                    </button>

                    <div
                        className="collapse"
                        id={_id}
                        style={{ margin: '1% 0' }}
                    >
                        <div className="card card-body">
                            {data.length > 0 ? (
                                data.map((item, index) => {
                                    return (
                                        <Link
                                            to={`/class/${classId}/subject/${subjectId}/topic/${_id}/assignment/${item._id}`}
                                            key={index}
                                        >
                                            {item.title}
                                        </Link>
                                    );
                                })
                            ) : (
                                <p style={{ fontSize: '1rem' }}>
                                    {'No Exercise Available for this Topic!!'}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;
