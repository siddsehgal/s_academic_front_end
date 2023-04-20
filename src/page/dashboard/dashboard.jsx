// import { View, Text } from 'react-native'
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './dashboard.module.css';
import Header from '../../Component/header/header';
import Footer from '../../Component/footer/footer';
import ClassComponent from './components/classComponent';
import { useState } from 'react';
import { Dialog, Box, CircularProgress } from '@mui/material';
import AddClassForm from './components/addClass';
import EditClassForm from './components/editClass';
import EditProfile from './components/editProfile';
import { APICall } from '../../services/apiCall';
import { useEffect } from 'react';
import { Edit, Add } from '@mui/icons-material';
import AssignmentShortcut from './components/assignmentShortcut';
import BG_IMG_PC from '../../img/pngegg3.png';
import BG_IMG_MOBILE from '../../img/pngegg4.png';

const Dashboard = () => {
    const [classData, setClassData] = useState([]);
    const [userData, setUserData] = useState({});
    const [open, setOpen] = useState(false);
    const [reload, setReload] = useState(false);
    const [classId, setClassId] = useState('');
    const [editOpen, setEditOpen] = useState(false);
    const [editProfileOpen, setEditProfileOpen] = useState(false);
    const [assignmentShortcutOpen, setAssignmentShortcutOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const [isAdmin, setIsAdmin] = useState(localStorage.getItem('isAdmin'));
    const [dimensions, setDimensions] = useState({ width: '', height: '' });
    const { height, width } = dimensions;
    useEffect(() => {
        async function getData() {
            const { status, data } = await APICall({
                method: 'get',
                url: '/user',
            });

            if (status === 'fail') return alert.error(data.message);

            setUserData(data.data);

            if (!data.data.userClass) setEditProfileOpen(true);
            else setAssignmentShortcutOpen(true);
        }
        getData();
        setDimensions({ width: window.innerWidth, height: window.innerHeight });
    }, []);

    useEffect(() => {
        async function getData() {
            setIsLoading(true);
            const { status, data } = await APICall({
                method: 'get',
                url: '/class',
            });

            if (status === 'fail') return alert.error(data.message);

            setClassData(data.data);
            setIsLoading(false);
        }
        getData();
    }, [reload]);

    const handleClose = () => {
        setOpen(false);
    };

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
            <div className={`${styles.Dashboard}`}>
                <div className={`${styles.title_div}`}>
                    <h3>Classes</h3>
                    {isAdmin === 'true' && (
                        <Add
                            sx={{ fontSize: '40px', cursor: 'pointer' }}
                            // className={`${styles.add_button}`}
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
                <div className={`${styles.classes_div}`}>
                    {classData.map((classItem) => {
                        return (
                            <ClassComponent
                                key={classItem._id}
                                data={classItem}
                                setOpen={setEditOpen}
                                setClassId={setClassId}
                                isAdmin={isAdmin}
                            />
                        );
                    })}
                </div>
            </div>

            <Dialog
                open={open}
                handleClose={handleClose}
                fullWidth={true}
                maxWidth={'sm'}
            >
                <AddClassForm setReload={setReload} setOpen={setOpen} />
            </Dialog>

            <Dialog
                open={editOpen}
                handleClose={handleClose}
                fullWidth={true}
                maxWidth={'sm'}
            >
                <EditClassForm
                    setReload={setReload}
                    setOpen={setEditOpen}
                    classId={classId}
                />
            </Dialog>

            <Dialog
                open={editProfileOpen}
                handleClose={handleClose}
                fullWidth={true}
                maxWidth={'sm'}
            >
                <EditProfile
                    setReload={setReload}
                    setOpen={setEditProfileOpen}
                />
            </Dialog>

            <Dialog
                open={assignmentShortcutOpen}
                handleClose={handleClose}
                fullWidth={true}
                maxWidth={'sm'}
            >
                <AssignmentShortcut
                    setReload={setReload}
                    setOpen={setAssignmentShortcutOpen}
                />
            </Dialog>

            <Footer />
        </div>
    );
};

export default Dashboard;
