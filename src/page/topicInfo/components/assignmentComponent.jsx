import React from 'react';
import styles from '../topic.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import { Add, Edit } from '@mui/icons-material';
import { useEffect } from 'react';

export default function NoteComponent({
    data,
    setOpen,
    setAssignmentId,
    isAdmin,
}) {
    const { _id, title, link, order } = data;
    const navigate = useNavigate();
    const { subId, classId, topicId } = useParams();

    return (
        <div
            className={`${styles.class_div}`}
            onClick={(e) => {
                navigate(
                    `/class/${classId}/subject/${subId}/topic/${topicId}/assignment/${_id}`
                );
            }}
        >
            <p>{title}</p>
            {isAdmin === 'true' && (
                <Edit
                    sx={{
                        fontSize: '20px',
                        cursor: 'pointer',
                        marginLeft: '5px',
                    }}
                    // className={`${styles.edit_button}`}
                    onClick={(e) => {
                        e.stopPropagation();
                        setAssignmentId(_id);
                        setOpen((prev) => !prev);
                    }}
                ></Edit>
            )}
        </div>
    );
}
