import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from './Pages/signup';
import Dashboard from './Pages/dashboadPage';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
    <ToastContainer />
      <Router>
        <Routes>
          <Route path = "/" element = {<Signup />} />
          <Route path = "/dashboard" element = {<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
