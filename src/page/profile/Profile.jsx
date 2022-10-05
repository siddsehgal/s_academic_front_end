import React from 'react'
import style from './Profile.module.css'
import Header from '../../Component/header/header'
import Profile_pic from '../../img/profile-pic.jpg'

function Profile() {
    return (
        <div>
            <Header></Header>
            <div className={style.profile}>
                <div className={style.details}>
                    <div className={style.left}>
                        <img src={Profile_pic} alt="" />
                    </div>
                    <div className="right">
                        <h6>Name: <strong>Vikash Sharma</strong></h6>
                        <p>Class: <strong>6th</strong></p>
                        <p>Email: <strong>Example@.com</strong></p>
                        <p>Joine Date: <strong>10-sep-2022</strong></p>
                    </div>
                </div>
                <div className={style.Score_table}>
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td colspan="2">Larry the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Profile