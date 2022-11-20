import React, { useCallback, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import styles from './subCard.module.css';
import { Dialog, Box, CircularProgress } from '@mui/material';
import AddSubjectForm from './addSubject';
import EditSubjectForm from './editSubject';
import { useEffect } from 'react';
import { APICall } from '../../../services/apiCall';
import { useAlert } from 'react-alert';
import { ArrowBack, Add, Edit } from '@mui/icons-material';

function SubCard({ classId, setSubjectId: setSubId, isAdmin }) {
    const [data, setData] = useState([]);
    const [open, setOpen] = useState(false);
    const [reload, setReload] = useState(false);
    const [subjectId, setSubjectId] = useState('');
    // const [subId, setSubIdSelected] = useState(useParams().subId);
    const [editOpen, setEditOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const alert = useAlert();
    const { subId } = useParams();

    const getData = useCallback(async () => {
        if (isLoading) return;
        setIsLoading(true);
        const { status, data } = await APICall({
            method: 'get',
            url: `/subject?class_id=${classId}`,
        });
        setIsLoading(false);
        if (status === 'fail') return alert.error(data.message);

        setData(data.data);
        if (data.data && data.data.length > 0) {
            setSubId(data.data[0]._id);
            navigate(`/class/${classId}/subject/${data.data[0]._id}`);
        }
    }, []);
    useEffect(() => {
        getData();
        return () => {};
    }, [reload]);

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className={`card ${styles.sub_div}`}>
            <ul className="list-group list-group-flush">
                <li
                    className=" card-header"
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <h4 style={{ margin: '0' }}>Subjects</h4>
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
                </li>
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
                {data.map((subject, index) => {
                    return (
                        <li
                            key={subject._id}
                            onClick={() => {
                                setSubId(subject._id);
                                navigate(
                                    `/class/${classId}/subject/${subject._id}`
                                );
                            }}
                            className="list-group-item btn btn-light"
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor:
                                    subject._id === subId ? '#d2cfcf' : 'white',
                            }}
                        >
                            {subject.title}
                            {isAdmin === 'true' && (
                                <Edit
                                    sx={{
                                        fontSize: '25px',
                                        cursor: 'pointer',
                                        marginLeft: '5px',
                                    }}
                                    // className={`${styles.add_button}`}
                                    // style={{
                                    //     backgroundImage: `url("/images/editIcon.png")`,
                                    // }}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setSubjectId(subject._id);
                                        setEditOpen(true);
                                    }}
                                ></Edit>
                            )}
                        </li>
                    );
                })}
            </ul>
            <Dialog
                open={open}
                handleClose={handleClose}
                fullWidth={true}
                maxWidth={'sm'}
            >
                <AddSubjectForm
                    setReload={setReload}
                    setOpen={setOpen}
                    classId={classId}
                />
            </Dialog>
            <Dialog
                open={editOpen}
                handleClose={handleClose}
                fullWidth={true}
                maxWidth={'sm'}
            >
                <EditSubjectForm
                    setReload={setReload}
                    setOpen={setEditOpen}
                    classId={classId}
                    subjectId={subjectId}
                />
            </Dialog>
        </div>
    );
}

export default SubCard;
