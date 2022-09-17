import React from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './subCard.module.css'

function SubCard({subject1, subject2,subject3,subject4,subject5,subject6,subject7}) {
    const navigate = useNavigate();
    return (
        <div>
            <div className={styles.leftbar}>
                <div class="container text-center">
                    <div class="row">
                        <div class="col order-last">
                            <div class="card">
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item"><strong>Subjects</strong></li>
                                    {subject1 && <li onClick={() => navigate("/class1/math")} class="list-group-item btn btn-light">{subject1}</li>}
                                    {subject2 && <li onClick={() => navigate("/class1/english")} class="list-group-item btn btn-light">{subject2}</li>}
                                    {subject3 && <li onClick={() => navigate("/class1/hindi")} class="list-group-item btn btn-light">{subject3}</li>}
                                    {subject4 && <li onClick={() => navigate("/class1/hindi")} class="list-group-item btn btn-light">{subject4}</li>}
                                    {subject5 && <li onClick={() => navigate("/class1/hindi")} class="list-group-item btn btn-light">{subject5}</li>}
                                    {subject6 && <li onClick={() => navigate("/class1/hindi")} class="list-group-item btn btn-light">{subject6}</li>}
                                    {subject7 && <li onClick={() => navigate("/class1/hindi")} class="list-group-item btn btn-light">{subject7}</li>}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubCard