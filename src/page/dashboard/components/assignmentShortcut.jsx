import React from 'react';
import styles from '../../dashboard/dashboard.module.css';
import { useNavigate, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { Button, Box, CircularProgress } from '@mui/material';
import { APICall } from '../../../services/apiCall';
import { useState } from 'react';
import { useAlert } from 'react-alert';

export default function AssignmentShortcut({ setOpen, setReload }) {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);

    const navigate = useNavigate();
    const alert = useAlert();

    useEffect(() => {
        async function getData() {
            setIsLoading(true);
            const { status, data } = await APICall({
                method: 'get',
                url: `/assignment/dashboard/list`,
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

    return (
        <div
            style={{
                padding: '5%',
                width: '100%',
            }}
        >
            <div className={`${styles.add_class_div}`}>
                <h3>Quickly Attempt an Assignment</h3>

                <table
                    className="table table-bordered"
                    style={{ margin: '2%' }}
                >
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Subject</th>
                            <th scope="col">Topic</th>
                            <th scope="col">Assignment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.subject_title}</td>
                                    <td>{item.topic_title}</td>
                                    <td>
                                        <Link
                                            to={`/class/${item.class_id}/subject/${item.subject_id}/topic/${item.topic_id}/assignment/${item.assignment_id}`}
                                        >
                                            {item.assignment_title}
                                        </Link>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>

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

                <div className={``}>
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
            </div>
        </div>
    );
}
