import React, { Component } from 'react';
import Header from '../../components/header/Header';
import DisplayNotes from '../../components/displaynotes/DisplayNotes';
import Archive from '../archive/Archive';
import Trash from '../trash/Trash';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router'

export class Dashboard extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/dashboard' component={DisplayNotes}></Route>
          <Route exact path='/dashboard/archive' component={Archive}></Route>
          <Route exact path='/dashboard/trash' component={Trash}></Route>
        </Switch>
      </div>
    )
  }
}

export default Dashboard
