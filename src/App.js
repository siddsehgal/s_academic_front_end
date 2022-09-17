import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from './page/login/login';
import Dashboard from './page/dashboard/dashboard';
import C1_hindi from './page/class1/class1Hindi/c1_hindi';
import C1_English from './page/class1/class1English/C1_English';
import C1_Math from './page/class1/class1Math/C1_Math';



function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/dash" exact element={<Dashboard />} />
        {/* <Route path="/class1" exact element={<Class1 />} /> */}
        <Route path="/class1/hindi" exact element={<C1_hindi />} />
        <Route path="/class1/english" exact element={<C1_English />} />
        <Route path="/class1/math" exact element={<C1_Math />} />
        </Routes>
      </Router >      
    </div >

  );
}


export default App;
