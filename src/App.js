import './App.css';
import SignUp from './pages/signup/SignUp';
import SignIn from './pages/signin/SignIn';
import ForgotEmail from './pages/forgotemail/ForgotEmail';
import ResetPassword from './pages/resetpassword/ResetPassword';
import Dashboard from './pages/dashboard/Dashboard';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import {Switch} from 'react-router'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/' component={SignUp}></Route>
          <Route exact path='/signin' component={SignIn}></Route>
          <Route exact path='/forgotemail' component={ForgotEmail}></Route>
          <Route exact path='/resetpassword' component={ResetPassword}></Route>
          <Route exact path='/Dashboard' component={Dashboard}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
