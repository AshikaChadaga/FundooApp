import React, { Component } from 'react'
import Header from '../../components/header/Header'
import DisplayNotes from '../../components/displaynotes/DisplayNotes'

export class Dashboard extends Component {
  render() {
    return (
      <div>
        <Header/>
        <DisplayNotes />
      </div>
    )
  }
}

export default Dashboard
