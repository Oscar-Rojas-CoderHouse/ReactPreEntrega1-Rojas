import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const CartWidGet = () => {
  return (
    <div className='cartList'>
        <FontAwesomeIcon icon={faCartShopping} />
        <span>2</span>
    </div>
  )
}

export default CartWidGet