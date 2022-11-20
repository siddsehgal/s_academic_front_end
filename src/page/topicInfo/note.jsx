// import { View, Text } from 'react-native'
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './topic.module.css';
import NoteComponent from './components/noteComponent';
import { useState } from 'react';
import { Dialog, Box, CircularProgress } from '@mui/material';
import AddNoteForm from './components/addNote';
import EditNoteForm from './components/editNote';
import { APICall } from '../../services/apiCall';
import { useEffect } from 'react';
import { Add, Edit } from '@mui/icons-material';
import { useAlert } from 'react-alert';

const Note = () => {
    const [classData, setClassData] = useState([]);
    const [open, setOpen] = useState(false);
    const [reload, setReload] = useState(false);
    const [classId, setClassId] = useState('');
    const [noteId, setNoteId] = useState('');
    const [editOpen, setEditOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isAdmin, setIsAdmin] = useState(localStorage.getItem('isAdmin'));
    const navigate = useNavigate();
    const alert = useAlert();

    const { topicId } = useParams();

    useEffect(() => {
        async function getData() {
            setIsLoading(true);
            const { status, data } = await APICall({
                method: 'get',
                url: `/note?topic_id=${topicId}`,
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
        <>
            <div
                className={`${styles.Dashboard}`}
                style={{ marginBottom: '100px' }}
            >
                <div className={`${styles.title_div}`}>
                    <h3>Notes</h3>
                    {isAdmin === 'true' && (
                        <Add
                            sx={{
                                fontSize: '40px',
                                cursor: 'pointer',
                            }}
                            // className={`${styles.add_button}`}
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
                <div className={`${styles.classes_div}`}>
                    {classData.length > 0 ? (
                        classData.map((classItem) => {
                            return (
                                <NoteComponent
                                    key={classItem._id}
                                    data={classItem}
                                    setOpen={setEditOpen}
                                    setClassId={setClassId}
                                    setNoteId={setNoteId}
                                    isAdmin={isAdmin}
                                />
                            );
                        })
                    ) : (
                        <p
                            style={{
                                marginTop: '2%',
                                marginLeft: '2%',
                                fontSize: '1rem',
                            }}
                        >
                            No Notes Available for this Topic!!
                        </p>
                    )}
                </div>
            </div>

            <Dialog
                open={open}
                handleClose={handleClose}
                fullWidth={true}
                maxWidth={'sm'}
            >
                <AddNoteForm
                    setReload={setReload}
                    setOpen={setOpen}
                    topicId={topicId}
                />
            </Dialog>

            <Dialog
                open={editOpen}
                handleClose={handleClose}
                fullWidth={true}
                maxWidth={'sm'}
            >
                <EditNoteForm
                    setReload={setReload}
                    setOpen={setEditOpen}
                    classId={classId}
                    topicId={topicId}
                    noteId={noteId}
                />
            </Dialog>
        </>
    );
};

export default Note;
