import React from 'react';
import styles from '../../dashboard/dashboard.module.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Button, Box, CircularProgress } from '@mui/material';
import { APICall } from '../../../services/apiCall';
import { useState } from 'react';
import { useAlert } from 'react-alert';

export default function EditProfile({ setOpen, setReload }) {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState({
        name: '',
        userClass: '',
    });
    const { name, userClass } = data;

    const navigate = useNavigate();
    const alert = useAlert();

    useEffect(() => {
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
            url: `/user`,
            body: { name, userClass },
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
                <h3>Edit User Details</h3>

                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        onFormSubmit();
                    }}
                    style={{ width: '100%' }}
                >
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Your Full Name"
                            style={{ width: '100%' }}
                            required={true}
                            name="name"
                            value={name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Class</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your class"
                            style={{ width: '100%' }}
                            required={true}
                            name="userClass"
                            value={userClass}
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
