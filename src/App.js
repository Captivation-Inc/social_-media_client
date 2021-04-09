import './App.css';
import Login from './components/pages/Login'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";




const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Login}/>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
