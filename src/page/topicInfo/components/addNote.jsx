import React from 'react';
import styles from '../topic.module.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Button, Box, CircularProgress } from '@mui/material';
import { APICall } from '../../../services/apiCall';
import { useState } from 'react';
import { useAlert } from 'react-alert';

export default function AddNoteForm({ setOpen, setReload, topicId }) {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState({ title: '', link: '' });
    const { title, link } = data;

    const navigate = useNavigate();
    const alert = useAlert();

    async function onFormSubmit(e) {
        setIsLoading(true);

        const { status, data } = await APICall({
            method: 'post',
            url: '/note',
            body: { title, link, topic_id: topicId },
        });
        setIsLoading(false);
        if (status === 'fail') return alert.error(data.message);

        alert.success(data.message);
        setOpen((prev) => !prev);
        setReload((prev) => !prev);
    }
    function handleChange(e) {
        let name = e.target.name;
        let value = e.target.value;

        setData((prev) => {
            return { ...prev, [name]: value };
        });
    }

    return (
        <div
            style={{
                padding: '5%',
                width: '100%',
            }}
        >
            <div className={`${styles.add_class_div}`}>
                <h3>Add New Note</h3>

                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        onFormSubmit();
                    }}
                    style={{ width: '100%' }}
                >
                    <div className="form-group">
                        <label>Title</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Note Title"
                            style={{ width: '100%' }}
                            required={true}
                            name="title"
                            value={title}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>File Link</label>
                        <input
                            type="url"
                            className="form-control"
                            placeholder="http://example.com"
                            style={{ width: '100%' }}
                            required={true}
                            name="link"
                            value={link}
                            onChange={handleChange}
                        />
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
                    <div className={`${styles.add_class_button_div}`}>
                        <Button
                            variant="contained"
                            type="submit"
                            color="success"
                            disabled={isLoading}
                        >
                            Submit
                        </Button>
                        <Button
                            variant="outlined"
                            color="error"
                            onClick={() => {
                                setOpen((prev) => !prev);
                            }}
                        >
                            Close
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
