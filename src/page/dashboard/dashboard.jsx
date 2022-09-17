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
import { APICall } from '../../services/apiCall';
import { useEffect } from 'react';

const Dashboard = () => {
    const [classData, setClassData] = useState([]);
    const [open, setOpen] = useState(false);
    const [reload, setReload] = useState(false);
    const [classId, setClassId] = useState('');
    const [editOpen, setEditOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        async function getData() {
            setIsLoading(true);
            const { status, data } = await APICall({
                method: 'get',
                url: '/class',
            });

            if (status === 'fail') return alert.error(data.message);
            console.log(data);
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

            <div className={`${styles.Dashboard}`}>
                <div className={`${styles.title_div}`}>
                    <h3>Classes</h3>
                    <button
                        className={`${styles.add_button}`}
                        style={{
                            backgroundImage: `url("/images/addIcon.png")`,
                        }}
                        onClick={() => {
                            setOpen(true);
                        }}
                    >
                        {/* <img
                            src="/images/addIcon.png"
                            style={{ height: '10px', width: '10px' }}
                        /> */}
                    </button>
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
            <Footer />
        </div>
    );
};

export default Dashboard;
