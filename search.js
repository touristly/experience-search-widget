import React, { useState, useEffect } from 'react'
import { Chip, Card, Tile } from './components'
import './style.css'

const Panel = () => {
  return (
    <div className='panel'>
      <div>
        <p className='panel-title'>All Activities</p>
        <p className='panel-desc'>Browse all activities and experiences</p>
        <div className='panel-comp'>
          <Chip />
          <Chip />
          <Chip />
          <Chip />
        </div>
      </div>
      <div>
        <p className='panel-title'>Explore more location</p>
        <p className='panel-desc'>Check out the best locations for your next vacation</p>
        <div className='panel-comp'>
          <Tile />
          <Tile />
          <Tile />
          <Tile />
        </div>
      </div>
      <div>
        <p className='panel-title'>Best Activities near you</p>
        <p className='panel-desc'>Most popular activities booked by travelers</p>
        <div className='panel-comp'>
          <Card />
          <Card />
          <Card />
          <Card />

        </div>
      </div>
    </div>
  )
}

const Search = () => {
  const [searchActive, setSearchActive] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const searchQueryEntered = e => {
    const { value } = e.target
    if (value.length) {
      setSearchActive(false)
      setSearchQuery(value);
    }
  }

  const searchClicked = () => {
    setSearchActive(true)
  }

  document.body.addEventListener("click", () => setSearchActive(false))

  return (
    <div className='search-box'>
      <div className="search-wrapper">
        <input spellcheck onClick={() => searchClicked()} onChange={(e) => searchQueryEntered(e)} type='search' placeholder='Search by activity or attraction' className='input-box' />
        <button className='search-btn'>Search</button>
        {searchActive && <Panel />}
      </div>
    </div>
  )
}

export default Search