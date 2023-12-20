import React from 'react'
import "../styles/singleProduct.scss"
import Single from '../components/Single'
import { singleProduct } from '../constants/data'
const SingleProduct = () => {

    // Fetch data and sent to single component
  return (
    <div className="singleProduct">
      <Single {...singleProduct} />
    </div>
  )
}

export default SingleProduct
