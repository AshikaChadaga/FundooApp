import React, { useState } from 'react'
import Header from '../../components/header/Header';
import DisplayNotes from '../../components/displaynotes/DisplayNotes';
import Archive from '../archive/Archive';
import Trash from '../trash/Trash';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router';
import SearchPage from '../searchpage/SearchPage';
import { searchContext } from '../../context/searchContext';

export function Dashboard() {

  const [searchWord, setSearchWord] = useState("");
  return (

    <div>
      <searchContext.Provider value={[searchWord, setSearchWord]}>
        <Header />
          <Switch>
            <Route exact path='/dashboard' component={DisplayNotes}></Route>
            <Route exact path='/dashboard/archive' component={Archive}></Route>
            <Route exact path='/dashboard/trash' component={Trash}></Route>
            <Route exact path='/dashboard/search' component={SearchPage}></Route>
          </Switch>
      </searchContext.Provider>
    </div>
  )
}

export default Dashboard
