import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Missions from './components/Missions';
import ProfileRoute from './routes/ProfileRoute';
import RocketsRoute from './routes/RocketsRoute';

const App = () => (
  <>
    <Navigation />
    <Routes>
      <Route path="/" element={<RocketsRoute />} />
      <Route path="/missions" element={<Missions />} />
      <Route path="/profile" element={<ProfileRoute />} />
    </Routes>
  </>
);

export default App;
