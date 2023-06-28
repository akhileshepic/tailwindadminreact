import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>Dashboard <Link to="/products" className='underline'>Got to About page</Link></div>
  )
}

export default Dashboard