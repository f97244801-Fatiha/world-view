import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className='header-contents'>
        <h2>Order your favorite desserts & beverages here</h2>
        <p>
          From freshly baked cakes and cookies to refreshing milkshakes and smoothies,
          we've got the perfect treat to satisfy your cravings.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  )
}

export default Header
