import React from 'react'
import './style.css';

const Card = ({ imgUrl, title, link }) => {

  return (
    <div className='card'>
      <img className='card-img' src="https://images.unsplash.com/photo-1507868162883-6b769c1a88c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3334&q=80" />
      <div className='title'>
        <p>Small-Group Historical Malacca Day Tour from Kuala Lumpur</p>
      </div>
    </div>
  )

}

export default Card