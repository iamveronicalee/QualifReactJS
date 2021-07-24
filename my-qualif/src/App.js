import logo from './logo.svg';
import './App.css';
import { Router, Route, Switch } from "react-router";
import HomePage from './pages/HomePage'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
