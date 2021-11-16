import React, { Component } from 'react';
import Header from '../../components/header/Header';
import DisplayNotes from '../../components/displaynotes/DisplayNotes';
import Archive from '../archive/Archive';
import Trash from '../trash/Trash';

export class Dashboard extends Component {
  render() {
    return (
      <div>
        <Header/>
        <DisplayNotes />
        <Switch>
          <ProtectedRoute path='/dashboard' component={Dashboard}></ProtectedRoute>
          <Route exact path='/dashboard/archive' component={Archive}></Route>
          <Route exact path='/dashboard/trash' component={Trash}></Route>
          <Route exact path='*' component={()=> "404 Not Found"}></Route>
        </Switch>
      </div>
    )
  }
}

export default Dashboard
