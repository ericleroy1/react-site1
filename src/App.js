import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UnitSection from './components/UnitSection';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact />
        </Switch>
        <UnitSection></UnitSection>
      </Router>
      
      
    </>
  );
}

export default App;
