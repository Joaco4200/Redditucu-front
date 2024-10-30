import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import CreatePostPage from './pages/CreatePostPage';

function App() {

  return (
    <Router>
      <Routes>
          <Route path= "/" element={<HomePage/>}/>
          <Route path="/home-page" element={<HomePage />} />
          <Route path= "/create-post-page" element={<CreatePostPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
