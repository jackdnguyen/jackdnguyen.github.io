import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './pages'

function App() {
  return (
    <html>
      <body>
        <Router>
          <Home />
        </Router>
      </body>
    </html>
  );
}

export default App;
