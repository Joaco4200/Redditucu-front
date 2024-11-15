import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import CreatePostPage from './pages/CreatePostPage';
import ProfilePage from './pages/ProfilePage';
import SinglePostPage from './pages/SinglePostPage';

function App() {

  return (
    <Router>
      <Routes>
          <Route path= "/" element={<HomePage/>}/>
          <Route path="/home-page" element={<HomePage />} />
          <Route path= "/create-post-page" element={<CreatePostPage/>}/>
          <Route path= "/profile-page" element={<ProfilePage/>}/>
          <Route path= "/single-post-page/:postid" element={<SinglePostPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
