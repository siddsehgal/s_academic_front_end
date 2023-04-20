import React, { useEffect, useState } from 'react';
import styles from './classData.module.css';
import dashStyles from '../dashboard/dashboard.module.css';
import ChapterCard from './components/chapterCard';
import Footer from '../../Component/footer/footer';
import Header from '../../Component/header/header';
import SubCard from './components/subCard';
import { useNavigate, useParams } from 'react-router-dom';
import { APICall } from '../../services/apiCall';
import { Dialog, Box, CircularProgress } from '@mui/material';
import EditTopic from './components/editTopic';
import AddTopic from './components/addTopic';
import { ArrowBack, Add } from '@mui/icons-material';
import BG_IMG_PC from '../../img/pngegg1.png';
import BG_IMG_MOBILE from '../../img/pngegg5.png';

function ClassData() {
    const { classId, subId } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [reload, setReload] = useState(false);
    const [open, setOpen] = useState(false);
    const [editOpen, setEditOpen] = useState(false);
    const [topicId, setTopicId] = useState('');
    const [subjectId, setSubjectId] = useState(subId);
    const [isAdmin, setIsAdmin] = useState(localStorage.getItem('isAdmin'));
    const navigate = useNavigate();
    const [dimensions, setDimensions] = useState({ width: '', height: '' });
    const { height, width } = dimensions;

    const [topicData, setTopicData] = useState([]);

    async function getData() {
        setIsLoading(true);
        const { status, data } = await APICall({
            method: 'get',
            url: `/topic?subject_id=${subjectId}`,
        });
        setIsLoading(false);
        if (status === 'fail') return alert.error(data.message);

        setTopicData(data.data);
    }
    useEffect(() => {
        setDimensions({ width: window.innerWidth, height: window.innerHeight });
    }, []);

    useEffect(() => {
        if (subjectId) getData();
    }, [reload, subjectId]);

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
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
                    height: '100vh',
                    backgroundSize: '100vw 90vh',
                    // border: '1px solid black',
                    zIndex: '-1',
                    backgroundRepeat: 'no-repeat',
                    objectFit: 'cover',
                }}
            ></div>
            <Header></Header>
            <div className={styles.detailSection}>
                <div className={styles.leftbar}>
                    <SubCard
                        classId={classId}
                        setSubjectId={setSubjectId}
                        isAdmin={isAdmin}
                    />
                </div>

                <div className={styles.card}>
                    {subId && (
                        <>
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    marginBottom: '1%',
                                }}
                            >
                                <h3 style={{ margin: '0' }}>Topics</h3>
                                {isAdmin === 'true' && (
                                    <Add
                                        sx={{
                                            fontSize: '40px',
                                            cursor: 'pointer',
                                        }}
                                        // className={`${dashStyles.add_button}`}
                                        // style={{
                                        //     backgroundImage: `url("/images/addIcon.png")`,
                                        // }}
                                        onClick={() => {
                                            setOpen(true);
                                        }}
                                    ></Add>
                                )}
                            </div>
                            {isLoading && (
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
                            )}
                            {topicData.map((topicItem) => {
                                return (
                                    <ChapterCard
                                        classId={classId}
                                        subjectId={subId}
                                        key={topicItem._id}
                                        data={topicItem}
                                        setEditOpen={setEditOpen}
                                        setTopicId={setTopicId}
                                        isAdmin={isAdmin}
                                    />
                                );
                            })}
                        </>
                    )}
                </div>
            </div>

            <Dialog
                open={open}
                handleClose={handleClose}
                fullWidth={true}
                maxWidth={'sm'}
            >
                <AddTopic
                    setReload={setReload}
                    setOpen={setOpen}
                    subjectId={subId}
                    classId={classId}
                />
            </Dialog>
            <Dialog
                open={editOpen}
                handleClose={handleClose}
                fullWidth={true}
                maxWidth={'sm'}
            >
                <EditTopic
                    setReload={setReload}
                    setOpen={setEditOpen}
                    classId={classId}
                    subjectId={subId}
                    topicId={topicId}
                />
            </Dialog>
            <Footer></Footer>
        </div>
    );
}

export default ClassData;
