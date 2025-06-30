import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from './Component/Header';

function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/" element = {<signup/>} />
        <Route path = "/dashboard" element = {<dashboardPage />} />
      </Routes>
    </Router>
  );
}

export default App;
