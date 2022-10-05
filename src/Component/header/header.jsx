import React from "react";
import style from './header.module.css';
import logo from '../../img/image 1.png'
import profile from '../../img/id-card-clip-solid.svg'
import { useNavigate } from "react-router-dom";



const Header = () => {
    const navigate = useNavigate();
    return (
        <div >
            <div className={`position-sticky ${style.z}`}>
                <div className={style.head}>
                    <div className={style.left}>
                        <img src={logo} alt="" />
                        <h2><strong>SAcedmic</strong></h2>
                    </div>
                    <div className={style.right}>
                        <strong>Demo...</strong>
                        <input type="text" placeholder="Search" />
                        <img onClick={() => navigate("/profile")} className={style.profile} src={profile} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;