import React from "react";
import {useNavigate} from "react-router-dom"
import style from "./login.module.css"
import Headers from "../../Component/header/header";
import Footer from "../../Component/footer/footer";
import logo from "../../img/image 5.png"
import google from "../../img/image 3.png"

const Login = () => {

     const navigate = useNavigate();
    
    return (       
        <div>
            <Headers />
            <div className={style.container}>
                <div className={style.left}>
                    <img src={logo} alt="" />
                    <h1><strong>SAcedmic</strong></h1>
                </div>
                <div className={style.Right}>
                    <form>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Login Id</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <button style={{ marginRight: "5px" }} onClick={()=>navigate("/dash")} type="submit" class="btn btn-primary">Login</button>
                        <button type="link" class="btn btn-primary" onClick={()=>navigate("/createAccount")}>Create an Account</button>
                        <div className="mb-3" style={{ marginTop: "10px" }}>
                            <p>Login With</p>
                            <div>
                                <a href="#"><img src={google} alt="" /></a>
                                
                            </div>createAccount
                        </div>
                    </form>
                </div>
            </div>
            <Footer/>
        </div>

    )
}

export default Login;