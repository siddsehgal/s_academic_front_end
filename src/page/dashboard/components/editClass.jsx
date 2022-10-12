import React from 'react';
import styles from '../dashboard.module.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Button, Box, CircularProgress } from '@mui/material';
import { APICall } from '../../../services/apiCall';
import { useState } from 'react';
import { useAlert } from 'react-alert';

export default function EditClassForm({ setOpen, classId, setReload }) {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState({ title: '' });
    const { title } = data;

    const navigate = useNavigate();
    const alert = useAlert();

    useEffect(() => {
        async function getData() {
            setIsLoading(true);

            const { status, data } = await APICall({
                method: 'get',
                url: `/class/${classId}`,
            });
            setIsLoading(false);
            if (status === 'fail') return alert.error(data.message);
            setData(data.data);
        }
        getData();
    }, []);

    function handleChange(e) {
        let name = e.target.name;
        let value = e.target.value;

        setData((prev) => {
            return { ...prev, [name]: value };
        });
    }

    async function onFormSubmit(e) {
        setIsLoading(true);

        const { status, data } = await APICall({
            method: 'patch',
            url: `/class/${classId}`,
            body: { title },
        });
        setIsLoading(false);
        if (status === 'fail') return alert.error(data.message);

        alert.success(data.message);
        setOpen((prev) => !prev);
        setReload((prev) => !prev);
        // window.location.reload();
    }

    async function handelDeleteClick() {
        setIsLoading(true);
        const { status, data } = await APICall({
            method: 'delete',
            url: `/class/${classId}`,
            body: { title },
        });

        setIsLoading(false);
        if (status === 'fail') return alert.error(data.message);

        alert.success(data.message);
        setOpen((prev) => !prev);
        setReload((prev) => !prev);
        // window.location.reload();
    }
    return (
        <div
            style={{
                padding: '5%',
                width: '100%',
            }}
        >
            <div className={`${styles.add_class_div}`}>
                <h3>Add New Class</h3>

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
                            placeholder="Class Title"
                            style={{ width: '100%' }}
                            required={true}
                            name="title"
                            value={title}
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
                            variant="contained"
                            color="error"
                            disabled={isLoading}
                            onClick={() => {
                                handelDeleteClick();
                            }}
                        >
                            Delete
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
