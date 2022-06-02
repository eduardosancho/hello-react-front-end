import './App.css';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Greeting from './components/Greeting';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Greeting />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
