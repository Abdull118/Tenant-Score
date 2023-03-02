import './App.css';
import {BrowserRouter as Router, Routes, Route} from  'react-router-dom'
import Home from './pages';
import SigninPage from './pages/signin';
import DownPage from './pages/down';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} exact />
        <Route path='/down' element={<DownPage />} exact />
      </Routes>
    </Router>
  );
}

export default App;