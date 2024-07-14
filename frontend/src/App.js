import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Auth from './pages/Auth';
import UserProfile from './pages/UserProfile';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/auth" element={<Auth/>}/>
          <Route path="/users/:userId" element={<UserProfile/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
