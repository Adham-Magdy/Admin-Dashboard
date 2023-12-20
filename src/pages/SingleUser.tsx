import React from 'react'
import "../styles/singleUser.scss"
import Single from '../components/Single'
import { singleUser } from '../constants/data'

const SingleUser = () => {

    // Fetch data and sent to single component
  return (
    <div className="singleUser">
      <Single {...singleUser} />
    </div>
  )
}

export default SingleUser
