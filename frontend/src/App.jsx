import { AuthProvider } from "./contexts/AuthContext";
import Authentication from "./pages/authentication";
import LandingPage from "./pages/landingPage";
import HomeComponent from "./pages/HomeComponent";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import VideoMeet from "./pages/videoMeet";
import History from './pages/history';
function App() {


  return (
    <>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/auth' element={<Authentication />} />
            <Route path='/:url' element={<VideoMeet/>} />
            <Route path='/history' element={<History />} />
            <Route path='/home' element={<HomeComponent/>} />
             
          </Routes>
        </AuthProvider>
      </Router>
    </>
  )
}

export default App
