import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useNavigate,
    useLocation,
} from 'react-router-dom';
import { positions, Provider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import Login from './page/login/login';
import Dashboard from './page/dashboard/dashboard';
import C1_hindi from './page/classData/classData';
import Topic from './page/topicInfo/topic';
import Assignment from './page/assignment/assignment';
import Profile from './page/profile/profile';
import { APICall } from './services/apiCall';
import { useEffect } from 'react';

const options = {
    timeout: 5000,
    position: positions.TOP_RIGHT,
};

function App() {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        async function checkLogin() {
            let token = localStorage.getItem('jwt');
            if (!token) navigate('/');
            else {
                const { status, data } = await APICall({
                    method: 'get',
                    url: `/auth/verify-login`,
                });
                if (status === 'fail') navigate('/');
                else if (location.pathname === '/') navigate('/dash');
            }
        }

        checkLogin();
    }, [location.pathname]);
    return (
        <Provider template={AlertTemplate} {...options}>
            <div className="App">
                {/* <Router> */}
                <Routes>
                    <Route path="/" exact element={<Login />} />
                    <Route path="/dash" exact element={<Dashboard />} />
                    {/* <Route path="/class1" exact element={<Class1 />} /> */}
                    <Route
                        path="/profile"
                        // exact
                        element={<Profile />}
                    ></Route>
                    <Route
                        path="/class/:classId"
                        // exact
                        element={<C1_hindi />}
                    ></Route>
                    <Route
                        path="/class/:classId/subject/:subId"
                        exact
                        element={<C1_hindi />}
                    ></Route>
                    <Route
                        path="/class/:classId/subject/:subId/topic/:topicId"
                        exact
                        element={<Topic />}
                    ></Route>
                    <Route
                        path="/class/:classId/subject/:subId/topic/:topicId/assignment/:assignmentId"
                        exact
                        element={<Assignment />}
                    ></Route>
                </Routes>
                {/* </Router> */}
            </div>
        </Provider>
    );
}

export default App;
