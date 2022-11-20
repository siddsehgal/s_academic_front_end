import React, { useState } from 'react';
import styles from '../assignment.module.css';

import { Button } from '@mui/material';
// import { RadioGroup, FormControlLabel, Radio } from '@mui/material';

function Exercise({
    display,
    data,
    index,
    setData,
    currentIndex,
    dataLength,
    setCurrentIndex,
}) {
    const { _id, question, option1, option2, option3, option4, userAnswer } =
        data;

    
    const [ans, setAns] = useState(userAnswer);

    function onChangeRadio(e) {
        setData((prev) => {
            const temp = prev;
            temp[index].userAnswer = e.target.value;
            return temp;
        });
        setAns(e.target.value);
    }

    return (
        <div
            className={`${styles.Exercise} card`}
            style={{
                ...(!display ? { display: 'none' } : {}),
            }}
        >
            {question && <h5 className="card-header">{question} </h5>}
            <div className="card-body">
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="radio"
                        name={_id}
                        value={'option-1'}
                        onChange={onChangeRadio}
                        checked={ans === 'option-1'}
                        // required={true}
                    />

                    <label className="form-check-label">{option1}</label>
                </div>
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="radio"
                        name={_id}
                        value={'option-2'}
                        onChange={onChangeRadio}
                        checked={ans === 'option-2'}
                    />

                    <label className="form-check-label">{option2}</label>
                </div>
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="radio"
                        name={_id}
                        value={'option-3'}
                        onChange={onChangeRadio}
                        checked={ans === 'option-3'}
                    />

                    <label className="form-check-label">{option3}</label>
                </div>
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="radio"
                        name={_id}
                        value={'option-4'}
                        onChange={onChangeRadio}
                        checked={ans === 'option-4'}
                    />

                    <label className="form-check-label">{option4}</label>
                </div>
                <div
                    style={{
                        display: 'flex',
                        width: '100%',
                        justifyContent: 'space-between',
                    }}
                >
                    <div style={{ margin: '1%' }}>
                        {index !== 0 && (
                            <Button
                                variant="contained"
                                color="success"
                                onClick={() => {
                                    setCurrentIndex(index - 1);
                                }}
                            >
                                Previous
                            </Button>
                        )}
                    </div>

                    <div style={{ margin: '1%' }}>
                        {index == dataLength - 1 ? (
                            <Button
                                variant="outlined"
                                color="error"
                                type="submit"
                            >
                                Submit
                            </Button>
                        ) : (
                            <Button
                                variant="outlined"
                                color="error"
                                onClick={() => {
                                    setCurrentIndex(index + 1);
                                }}
                            >
                                Next
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Exercise;
