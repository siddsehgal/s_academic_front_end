import React, { useEffect } from 'react';
import styles from './assignment.module.css';
import Header from '../../Component/header/header';
import Footer from '../../Component/footer/footer';
import Exercise from './component/assignmentItem';
import { useState } from 'react';
import { APICall } from '../../services/apiCall';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Box, CircularProgress } from '@mui/material';

function Assignment({}) {
    const [data, setData] = useState([]);
    const [title, setTitle] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { assignmentId, subId, classId, topicId } = useParams();
    const navigate = useNavigate();

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
    }, []);

    async function handelFormSubmit(e) {
        const questions = data.map((item) => {
            return { _id: item._id, userAnswer: item.userAnswer };
        });
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
        window.alert(
            `Your Score is ${Data.data.score} out of ${Data.data.totalScore}`
        );
        navigate(-1);
    }

    return (
        <div>
            <Header />
            <div className={`${styles.container}`}>
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
                                        key={index}
                                        data={item}
                                        index={index}
                                        setData={setData}
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
                                <div style={{ marginRight: '10%' }}>
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
                                </div>
                            </div>
                        </form>
                    </>
                )}
            </div>
            <Footer />
        </div>
    );
}

export default Assignment;
