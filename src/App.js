import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { GlobalStateProvider } from './GlobalState';

import LoginEmployeeForm from './components/LoginEmployeeForm';
import RegisterEmployeeForm from './components/RegisterEmployeeForm';
import UpdateInformationForm from './components/UpdateInformationForm';
import LoginAdministrador from "./components/LoginAdministrador";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <GlobalStateProvider>
      <Router>
        <Navbar />
        <div className="container">
          <Switch>
            <Route path="/login/administrador">
              <LoginAdministrador />
            </Route>

            <Route path="/login/empleados">
              <LoginEmployeeForm />
            </Route>

            <Route path="/administrador/dashboard">
              <RegisterEmployeeForm />
            </Route>

            <Route path="/empleados">
              <UpdateInformationForm />
            </Route>

            <Route path="/">
              <Home />
            </Route>
          </Switch>



        </div>
      </Router>
    </GlobalStateProvider>
  );
}

export default App;
