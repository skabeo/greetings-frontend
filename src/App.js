import './App.css';
import { Routes, Route } from 'react-router-dom';
import Greeting from './components/Greeting';
import Homepage from './components/Homepage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/greeting" element={<Greeting />} />
    </Routes>
  );
}

export default App;
