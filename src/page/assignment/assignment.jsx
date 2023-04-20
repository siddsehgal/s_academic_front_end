import React, { useEffect } from 'react';
import styles from './assignment.module.css';
import Header from '../../Component/header/header';
import Footer from '../../Component/footer/footer';
import Exercise from './component/assignmentItem';
import { useState } from 'react';
import { APICall } from '../../services/apiCall';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Box, CircularProgress } from '@mui/material';
import BG_IMG_PC from '../../img/pngegg3.png';
import BG_IMG_MOBILE from '../../img/pngegg5.png';
import { useAlert } from 'react-alert';

function Assignment({}) {
    const [data, setData] = useState([]);
    const [title, setTitle] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const { assignmentId, subId, classId, topicId } = useParams();
    const navigate = useNavigate();
    const [dimensions, setDimensions] = useState({ width: '', height: '' });
    const { height, width } = dimensions;

    const alert = useAlert();

    useEffect(() => {
        async function getData() {
            setIsLoading(true);
            const { status, data } = await APICall({
                method: 'get',
                url: `/assignment/${assignmentId}`,
            });

            if (status === 'fail') return alert.error(data.message);

            setData(data.data.questions);
            setTitle(data.data.title);
            setIsLoading(false);
        }
        getData();
        setDimensions({ width: window.innerWidth, height: window.innerHeight });
    }, []);

    async function handelFormSubmit(e) {
        const questions = data.map((item) => {
            return { _id: item._id, userAnswer: item.userAnswer };
        });
        for (let item of questions) {
            if (!item.userAnswer)
                return alert.error('Please Complete All Questions to Submit!!');
        }
        setIsLoading(true);

        const { status, data: Data } = await APICall({
            method: 'post',
            url: `/assignment/attempt`,
            body: {
                class_id: classId,
                topic_id: topicId,
                subject_id: subId,
                assignment_id: assignmentId,
                questions,
            },
        });

        if (status === 'fail') return alert.error(Data.message);

        setIsLoading(false);
        setIsSuccess(true);
        setSuccessMessage(
            `Your Score is ${Data.data.score} out of ${Data.data.totalScore}`
        );
        // navigate(-1);
    }

    return (
        <div>
            <Header />
            <div
                style={{
                    backgroundImage: `url(${
                        width > 650 ? BG_IMG_PC : BG_IMG_MOBILE
                    })`,
                    top: '60px',
                    position: 'fixed',
                    bottom: '100px',
                    right: '0',
                    left: '0',
                    width: '100vw',
                    height: '90vh',
                    backgroundSize: '100vw 90vh',
                    // border: '1px solid black',
                    zIndex: '-1',
                    backgroundRepeat: 'no-repeat',
                    objectFit: 'cover',
                }}
            ></div>

            {!isSuccess ? (
                <div
                    className={`${styles.container}`}
                    style={{
                        marginTop: '2%',
                    }}
                >
                    {isLoading ? (
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <CircularProgress />
                        </Box>
                    ) : (
                        <>
                            <h4>{title}</h4>
                            <form
                                style={{ width: '90%' }}
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    handelFormSubmit(e);
                                }}
                            >
                                {data.map((item, index) => {
                                    return (
                                        <Exercise
                                            display={index == currentIndex}
                                            key={index}
                                            data={item}
                                            dataLength={data.length}
                                            index={index}
                                            setData={setData}
                                            currentIndex={currentIndex}
                                            setCurrentIndex={setCurrentIndex}
                                        />
                                    );
                                })}
                                <div
                                    style={{
                                        display: 'flex',
                                        width: '100%',
                                        justifyContent: 'center',
                                    }}
                                >
                                    {/* <div style={{ marginRight: '10%' }}>
                                    <Button
                                        variant="contained"
                                        type="submit"
                                        color="success"
                                        // disabled={isLoading}
                                    >
                                        Submit
                                    </Button>
                                </div>

                                <div>
                                    <Button
                                        variant="outlined"
                                        color="error"
                                        onClick={() => {
                                            // setOpen((prev) => !prev);navigate.
                                            navigate(-1);
                                        }}
                                    >
                                        Back
                                    </Button>
                                </div> */}
                                </div>
                            </form>
                        </>
                    )}
                </div>
            ) : (
                <div style={{ textAlign: 'center', width: '100%' }}>
                    <div className={`${styles.card}`}>
                        <div
                            style={{
                                border: '1px solid #9abc66',
                                borderRadius: '200px',
                                height: '200px',
                                width: '200px',
                                background: '#F8FAF5',
                                margin: '0 auto',
                            }}
                        >
                            <i className="checkmark">✓</i>
                        </div>
                        <h1> Submitted</h1>
                        <p>{successMessage}</p>
                    </div>
                </div>
            )}
            <Footer />
        </div>
    );
}

export default Assignment;
