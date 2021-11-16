import './App.css';
import SignUp from './pages/signup/SignUp';
import SignIn from './pages/signin/SignIn';
import ForgotEmail from './pages/forgotemail/ForgotEmail';
import ResetPassword from './pages/resetpassword/ResetPassword';
import Dashboard from './pages/dashboard/Dashboard';
import { BrowserRouter, Route } from 'react-router-dom';
import { Switch } from 'react-router'
import { ProtectedRoute } from './components/protectedroute/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/' component={SignUp}></Route>
          <Route exact path='/signin' component={SignIn}></Route>
          <Route exact path='/forgotemail' component={ForgotEmail}></Route>
          <ProtectedRoute path='/resetpassword' component={ResetPassword}></ProtectedRoute>
          <ProtectedRoute exact path='/dashboard' component={Dashboard}></ProtectedRoute>
          <Route exact path='*' component={() => "404 Not Found"}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
