import React from 'react'

const ItemListContainer = ({greeting}) => {
  return (
    <div className='itemList'>
      <p>{greeting}</p>
    </div>
  )
}

export default ItemListContainer