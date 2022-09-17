import React from "react";
import style from './header.module.css';
import logo from '../../img/image 1.png'


const header = () => {
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default header;