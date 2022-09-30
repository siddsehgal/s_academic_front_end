import React from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './leftSectionCard.module.css'

function LeftSectionCard({ item, item1, link1, item2, item3, item4, item5, item6, item7 }) {
    const navigate = useNavigate();
    return (
        <div>
            <div className={styles.leftbar}>
                <div class="container text-center">
                    <div class="row">
                        <div class="col order-last">
                            <div class="card">
                                <ul class="list-group list-group-flush">
                                    {item && <li class="list-group-item"><strong>{item}</strong></li>}
                                    {item1 && <li onClick={() => navigate("/class1/math")} class="list-group-item btn btn-light">{item1}</li>}
                                    {item2 && <li onClick={() => navigate("/class1/english")} class="list-group-item btn btn-light">{item2}</li>}
                                    {item3 && <li onClick={() => navigate("/class1/hindi")} class="list-group-item btn btn-light">{item3}</li>}
                                    {item4 && <li onClick={() => navigate("/class1/hindi")} class="list-group-item btn btn-light">{item4}</li>}
                                    {item5 && <li onClick={() => navigate("/class1/hindi")} class="list-group-item btn btn-light">{item5}</li>}
                                    {item6 && <li onClick={() => navigate("/class1/hindi")} class="list-group-item btn btn-light">{item6}</li>}                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftSectionCard