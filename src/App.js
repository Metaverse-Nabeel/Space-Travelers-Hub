import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import ProfileRoute from './routes/ProfileRoute';

const App = () => (
  <>
    <Navigation />
    <Routes>
      <Route path="/" element={<Rockets />} />
      <Route path="/missions" element={<Missions />} />
      <Route path="/profile" element={<ProfileRoute />} />
    </Routes>

  </>
);

export default App;
