import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Landing from './LandingPage/Landing'
import Card from './Components/Card/Card';

function App() {
  return (
    <div className="App">
      
      <Route exact path='/' component={Landing} />
      <Route exact path='/home' component={Card} />

    </div>
  );
}

export default App;
