import React, { useState } from 'react';
import style from './profile.module.css';
import Header from '../../Component/header/header';
import { Dialog, Box, CircularProgress, Button } from '@mui/material';
import { useEffect } from 'react';
import { APICall } from '../../services/apiCall.js';
import EditProfile from './components/editProfile';
import Profile_pic from '../../img/profile.webp';
import BG_IMG_PC from '../../img/pngegg7.png';
import Footer from '../../Component/footer/footer';

function Profile() {
    const [data, setData] = useState({
        name: '',
        email: '',
        userClass: '',
        joinDate: '',
        googleImgUrl: '',
    });
    const { name, email, userClass, joinDate, googleImgUrl } = data;
    const [attemptData, setAttemptData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [reload, setReload] = useState(false);
    const [dimensions, setDimensions] = useState({ width: '', height: '' });
    const { height, width } = dimensions;

    async function getData() {
        setIsLoading(true);
        const { status, data } = await APICall({
            method: 'get',
            url: `/user`,
        });
        setIsLoading(false);
        if (status === 'fail') return alert.error(data.message);

        setData(data.data);
    }

    async function getAttemptData() {
        setIsLoading(true);
        const { status, data } = await APICall({
            method: 'get',
            url: `/assignment/attempt/all`,
        });
        setIsLoading(false);
        if (status === 'fail') return alert.error(data.message);

        setAttemptData(data.data);
    }

    useEffect(() => {
        getData();
    }, [reload]);

    useEffect(() => {
        getAttemptData();
        setDimensions({ width: window.innerWidth, height: window.innerHeight });
    }, []);

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div>
            <div
                style={{
                    backgroundImage: `url(${width > 650 ? BG_IMG_PC : ''})`,
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
            <Header></Header>
            <div className={style.profile}>
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
                <div className={style.details}>
                    <div className={style.left}>
                        <img
                            src={googleImgUrl ? googleImgUrl : Profile_pic}
                            alt=""
                        />
                    </div>
                    <div className="right">
                        <p>
                            Name: <strong>{name}</strong>
                        </p>
                        <p>
                            Class:{' '}
                            <strong>
                                {userClass ? userClass : 'Not Available'}
                            </strong>
                        </p>
                        <p>
                            Email: <strong>{email}</strong>
                        </p>
                        <p>
                            Join Date:{' '}
                            <strong>
                                {joinDate ? joinDate : 'Not Available'}
                            </strong>
                        </p>
                        <Button
                            variant="contained"
                            type="submit"
                            color="success"
                            disabled={isLoading}
                            onClick={() => {
                                setOpen(true);
                            }}
                        >
                            Edit
                        </Button>
                    </div>
                </div>
                <div className={style.Score_table}>
                    <h5>
                        <b>Assignments Attempted Report:</b>
                    </h5>
                    <table
                        className="table table-bordered"
                        style={{ backgroundColor: 'white' }}
                    >
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Class</th>
                                <th scope="col">Subject</th>
                                <th scope="col">Topic</th>
                                <th scope="col">Assignment</th>
                                <th scope="col">Total Score</th>
                                <th scope="col">Your Score</th>
                            </tr>
                        </thead>
                        <tbody>
                            {attemptData.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.classTitle}</td>
                                        <td>{item.subjectTitle}</td>
                                        <td>{item.topicTitle}</td>
                                        <td>{item.assignmentTitle}</td>
                                        <td>{item.totalScore}</td>
                                        <td>{item.yourScore}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            <Dialog
                open={open}
                handleClose={handleClose}
                fullWidth={true}
                maxWidth={'sm'}
            >
                <EditProfile setReload={setReload} setOpen={setOpen} />
            </Dialog>
            <Footer />
        </div>
    );
}

export default Profile;
