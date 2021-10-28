import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import Main from './components/Main/Main';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/home">
            <Main />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/services/:serviceId">
            <ServiceDetails />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
