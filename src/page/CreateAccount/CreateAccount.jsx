import React from 'react'
import {useNavigate} from "react-router-dom"
import Header from '../../Component/header/header'
import Styles from './CreateAccount.module.css'
import logo from '../../img/image 5.png'
import Footer from '../../Component/footer/footer'

function CreateAccount() {

    const navigate = useNavigate();

    return (
        <div>
            <Header></Header>
            <div className={Styles.container}>
                <div className={Styles.left}>
                    <img src={logo} alt="" />
                    <h1><strong>SAcedmic</strong></h1>
                </div>
                <div className={Styles.Right}>
                    <form>
                        <div className="mb-3">
                            <label for="Name" className="form-label">Enter Your Name</label>
                            <input type="text" className="form-control" id="Name" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label for="Class" className="form-label">Enter Your Class</label>
                            <input type="text" className="form-control" id="Class" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email Id</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Re Enter Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" />
                        </div>                        
                        <button type="submit" class="btn btn-primary" onClick={()=>navigate("/dash")}>Submit</button>
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default CreateAccount