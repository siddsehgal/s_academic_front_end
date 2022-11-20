import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './login.module.css';
import Headers from '../../Component/header/header';
import Footer from '../../Component/footer/footer';
import logo from '../../img/image 5.png';
import google from '../../img/image 3.png';
// import { GoogleLogin } from 'react-google-login';
import { GoogleLogin } from '@react-oauth/google';
import { useAlert } from 'react-alert';
import { APICall } from '../../services/apiCall';
import { Box, CircularProgress } from '@mui/material';
import BG_IMG_PC from '../../img/pngegg7.png';
import BG_IMG_MOBILE from '../../img/pngegg7.png';
const Login = () => {
    const [classData, setClassData] = useState([]);
    const [showLogin, setShowLogin] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [loginData, setLoginData] = useState({
        loginEmail: '',
        loginPassword: '',
    });
    const [signUpData, setSignUpData] = useState({
        signUpEmail: '',
        signUpName: '',
        signUpClass: '',
        signUpPassword: '',
        signUpConfirmPassword: '',
    });
    const { loginEmail, loginPassword } = loginData;
    const {
        signUpName,
        signUpEmail,
        signUpClass,
        signUpPassword,
        signUpConfirmPassword,
    } = signUpData;
    const navigate = useNavigate();
    const alert = useAlert();
    const [dimensions, setDimensions] = useState({ width: '', height: '' });
    const { height, width } = dimensions;

    useEffect(() => {
        async function getData() {
            const { status, data } = await APICall({
                method: 'get',
                url: '/class',
            });

            if (status === 'fail') return alert.error(data.message);

            setClassData(data.data);
        }
        getData();
        setDimensions({ width: window.innerWidth, height: window.innerHeight });
    }, []);

    const handelLoginChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setLoginData((prev) => {
            return { ...prev, [name]: value };
        });
    };

    const handelSignUpChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setSignUpData((prev) => {
            return { ...prev, [name]: value };
        });
    };

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const { status, data } = await APICall({
            method: 'post',
            url: `/auth/login/`,
            body: { email: loginEmail, password: loginPassword },
        });

        setIsLoading(false);
        if (status === 'fail') return alert.error(data.message);

        localStorage.setItem('jwt', data.data.token);
        localStorage.setItem('isAdmin', data.data.user.isAdmin);

        alert.success(data.message);
        navigate('/dash');
    };

    const handleSignUpSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const { status, data } = await APICall({
            method: 'post',
            url: `/auth/signup/`,
            body: {
                name: signUpName,
                email: signUpEmail,
                userClass: signUpClass,
                password: signUpPassword,
                repeatPassword: signUpConfirmPassword,
            },
        });

        setIsLoading(false);
        if (status === 'fail') return alert.error(data.message);
        localStorage.setItem('jwt', data.data.token);
        localStorage.setItem('isAdmin', data.data.user.isAdmin);
        alert.success(data.message);
        navigate('/dash');
    };

    const responseGoogle = async (response) => {
        // console.log(response);
        const { name, email, googleId, imageUrl } = response.profileObj;
        setIsLoading(true);
        const { status, data } = await APICall({
            method: 'post',
            url: `/auth/google-login/`,
            body: {
                name,
                email,
                googleId,
                googleImgUrl: imageUrl,
            },
        });

        setIsLoading(false);
        if (status === 'fail') return alert.error(data.message);
        localStorage.setItem('jwt', data.data.token);
        localStorage.setItem('isAdmin', data.data.user.isAdmin);
        alert.success(data.message);
        navigate('/dash');
    };
    return (
        <div>
            <div
                style={{
                    backgroundImage: `url(${
                        width > 650 ? BG_IMG_PC : BG_IMG_MOBILE
                    })`,
                    top: '60px',
                    position: 'fixed',
                    bottom: '100px',
                    right: '0',
                    left: '0',
                    width: '100vw',
                    height: '100vh',
                    backgroundSize: '100vw 90vh',
                    // border: '1px solid black',
                    zIndex: '-1',
                    backgroundRepeat: 'no-repeat',
                    objectFit: 'cover',
                }}
            ></div>
            <Headers />
            <div className={style.container}>
                <div className={style.left}>
                    <img src={logo} alt="" />
                    <h1>
                        <strong>SAcademic</strong>
                    </h1>
                </div>
                <div className={style.right}>
                    {showLogin ? (
                        <form onSubmit={handleLoginSubmit}>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="example@gmail.com"
                                    name="loginEmail"
                                    value={loginEmail}
                                    onChange={handelLoginChange}
                                    required={true}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Enter Password"
                                    name="loginPassword"
                                    value={loginPassword}
                                    onChange={handelLoginChange}
                                    required={true}
                                />
                            </div>
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
                            <button
                                style={{
                                    marginRight: '5px',
                                    display: 'inline-block',
                                }}
                                // onClick={() => navigate('/dash')}
                                type="submit"
                                className="btn btn-primary"
                            >
                                Login
                            </button>
                            <p
                                style={{
                                    marginRight: '5px',
                                    display: 'inline-block',
                                    cursor: 'pointer',
                                }}
                                onClick={() => {
                                    setShowLogin((prev) => !prev);
                                }}
                            >
                                Create an Account
                            </p>
                        </form>
                    ) : (
                        <form onSubmit={handleSignUpSubmit}>
                            <div className="mb-3">
                                <label className="form-label">Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Name"
                                    name="signUpName"
                                    value={signUpName}
                                    onChange={handelSignUpChange}
                                    required={true}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="example@gmail.com"
                                    name="signUpEmail"
                                    value={signUpEmail}
                                    onChange={handelSignUpChange}
                                    required={true}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Class</label>
                                <select
                                    name="signUpClass"
                                    className="form-control"
                                    onChange={handelSignUpChange}
                                    value={signUpClass}
                                    required={true}
                                >
                                    <option value="">Select Class</option>
                                    {classData.map((item) => (
                                        <option value={item._id}>
                                            {item.title}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Enter Password"
                                    name="signUpPassword"
                                    value={signUpPassword}
                                    onChange={handelSignUpChange}
                                    required={true}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">
                                    Confirm Password
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Enter Password"
                                    name="signUpConfirmPassword"
                                    value={signUpConfirmPassword}
                                    onChange={handelSignUpChange}
                                    required={true}
                                />
                            </div>
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
                            <button
                                style={{
                                    marginRight: '5px',
                                    display: 'inline-block',
                                }}
                                // onClick={() => navigate('/dash')}
                                type="submit"
                                className="btn btn-primary"
                            >
                                SignUp
                            </button>
                            <p
                                style={{
                                    marginRight: '5px',
                                    display: 'inline-block',
                                    cursor: 'pointer',
                                }}
                                onClick={() => {
                                    setShowLogin((prev) => !prev);
                                }}
                            >
                                Already have an Account? Login Here
                            </p>
                        </form>
                    )}

                    <div className="mb-3" style={{ marginTop: '10px' }}>
                        <p>Login With</p>
                        <GoogleLogin
                            useOneTap={true}
                            onSuccess={async (credentialResponse) => {
                                // console.log(credentialResponse);
                                const { credential } = credentialResponse;
                                // const { name, email, googleId, imageUrl } =
                                //     response.profileObj;
                                setIsLoading(true);
                                const { status, data } = await APICall({
                                    method: 'post',
                                    url: `/auth/google-login/`,
                                    body: {
                                        token: credential,
                                    },
                                });

                                setIsLoading(false);
                                if (status === 'fail')
                                    return alert.error(data.message);
                                localStorage.setItem('jwt', data.data.token);
                                localStorage.setItem(
                                    'isAdmin',
                                    data.data.user.isAdmin
                                );
                                alert.success(data.message);
                                navigate('/dash');
                            }}
                            onError={() => {
                                console.log('Login Failed');
                            }}
                        />
                        {/* <GoogleLogin
                            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                            buttonText="Login"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                        /> */}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Login;
