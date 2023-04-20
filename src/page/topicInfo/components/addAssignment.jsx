import React from 'react';
import styles from '../topic.module.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Button, Box, CircularProgress } from '@mui/material';
import { APICall } from '../../../services/apiCall';
import { useState } from 'react';
import { useAlert } from 'react-alert';

export default function AddAssignmentForm({ setOpen, setReload, topicId }) {
    const [isLoading, setIsLoading] = useState(false);
    const [questions, setQuestions] = useState([
        {
            question: '',
            option1: '',
            option2: '',
            option3: '',
            option4: '',
            answer: '',
        },
    ]);

    const [questionLength, setQuestionsLength] = useState(1);
    const [data, setData] = useState({ title: '', link: '' });
    const { title, link } = data;

    const navigate = useNavigate();
    const alert = useAlert();

    async function onFormSubmit(e) {
        setIsLoading(true);

        const { status, data } = await APICall({
            method: 'post',
            url: '/assignment',
            body: { title, topic_id: topicId, questions },
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

    function handleQuestionChange(e, index) {
        let name = e.target.name;
        let value = e.target.value;
        setQuestions((prev) => {
            prev[index] = {
                ...prev[index],
                [name]: value,
            };
            return [...prev];
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
                <h3>Add New Assignment</h3>

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

                    {questions.map((item, index) => {
                        return (
                            <div key={index}>
                                <div className="form-group">
                                    <div
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                        }}
                                    >
                                        <label>{index + 1}. Question</label>
                                        <div
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                width: '70px',
                                            }}
                                        >
                                            <button
                                                style={{
                                                    backgroundImage: `url("/images/deleteIcon.jpeg")`,
                                                }}
                                                className={`${styles.add_button}`}
                                                type="button"
                                                onClick={() => {
                                                    if (questions.length > 1) {
                                                        setQuestions((prev) => {
                                                            prev.splice(
                                                                index,
                                                                1
                                                            );

                                                            return [...prev];
                                                        });
                                                    } else {
                                                        alert.error(
                                                            'At least One Question is Required!!'
                                                        );
                                                    }
                                                }}
                                            ></button>
                                            <button
                                                className={`${styles.add_button}`}
                                                type="button"
                                                style={{
                                                    backgroundImage: `url("/images/addIcon.png")`,
                                                }}
                                                onClick={() => {
                                                    setQuestions((prev) => {
                                                        prev.splice(
                                                            index + 1,
                                                            0,
                                                            {
                                                                question: '',
                                                                option1: '',
                                                                option2: '',
                                                                option3: '',
                                                                option4: '',
                                                                answer: '',
                                                            }
                                                        );
                                                        return [...prev];
                                                    });
                                                }}
                                            ></button>
                                        </div>
                                    </div>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Question "
                                        style={{ width: '100%' }}
                                        required={true}
                                        name="question"
                                        value={item.question}
                                        onChange={(e) => {
                                            handleQuestionChange(e, index);
                                        }}
                                    />
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-2 col-form-label">
                                        Option 1
                                    </label>
                                    <div className="col-sm-10">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Option 1"
                                            required={true}
                                            value={item.option1}
                                            name="option1"
                                            onChange={(e) => {
                                                handleQuestionChange(e, index);
                                            }}
                                        />
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label className="col-sm-2 col-form-label">
                                        Option 2
                                    </label>
                                    <div className="col-sm-10">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Option 2"
                                            required={true}
                                            value={item.option2}
                                            name="option2"
                                            onChange={(e) => {
                                                handleQuestionChange(e, index);
                                            }}
                                        />
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label className="col-sm-2 col-form-label">
                                        Option 3
                                    </label>
                                    <div className="col-sm-10">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Option 3"
                                            required={true}
                                            value={item.option3}
                                            name="option3"
                                            onChange={(e) => {
                                                handleQuestionChange(e, index);
                                            }}
                                        />
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label className="col-sm-2 col-form-label">
                                        Option 4
                                    </label>
                                    <div className="col-sm-10">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Option 4"
                                            required={true}
                                            value={item.option4}
                                            name="option4"
                                            onChange={(e) => {
                                                handleQuestionChange(e, index);
                                            }}
                                        />
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label className="col-sm-2 col-form-label">
                                        Answer
                                    </label>
                                    <div className="col-sm-10">
                                        <select
                                            id="inputState"
                                            className="form-control"
                                            required={true}
                                            value={item.answer}
                                            name="answer"
                                            onChange={(e) => {
                                                handleQuestionChange(e, index);
                                            }}
                                        >
                                            <option value="">
                                                Select Answer
                                            </option>
                                            <option value="option-1">
                                                Option 1
                                            </option>
                                            <option value="option-2">
                                                Option 2
                                            </option>
                                            <option value="option-3">
                                                Option 3
                                            </option>
                                            <option value="option-4">
                                                Option 4
                                            </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        );
                    })}

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
