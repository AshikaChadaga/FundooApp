import React from 'react'
import { searchContext } from '../../context/searchContext';
import { useContext, useState } from 'react';
import '../../components/notes/Notes.scss';
import DisplayNotes from '../../components/displaynotes/DisplayNotes';

function SearchPage() {
  const [searchWord, setSearchWord] = useContext(searchContext);
  return (
    <div>
      <DisplayNotes mode="search" searchWord={searchWord} />
    </div>
  )
}

export default SearchPage
