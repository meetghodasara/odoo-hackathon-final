import './App.css';
import Login from "./pages/Login";
import Register from "./pages/Register";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import UserProfile from './pages/UserProfile';
import UserHomePage from './pages/UserHomePage';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/users/:userId" element={<UserProfile />} />
          <Route path="/userHomePage" element={<UserHomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
