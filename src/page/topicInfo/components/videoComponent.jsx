import React from 'react';
import styles from '../topic.module.css';
import { useNavigate } from 'react-router-dom';
import { Add, Edit } from '@mui/icons-material';
import { useEffect } from 'react';

export default function VideoComponent({ data, setOpen, setVideoId, isAdmin }) {
    const { _id, title, link, order } = data;
    const navigate = useNavigate();

    useEffect(() => {}, []);

    return (
        <div
            className={`${styles.class_div}`}
            onClick={(e) => {
                window.open(link, '_blank');
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
                        setVideoId(data._id);
                        setOpen((prev) => !prev);
                    }}
                ></Edit>
            )}
        </div>
    );
}
