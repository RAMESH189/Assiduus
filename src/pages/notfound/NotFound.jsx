import React from 'react'
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div>
      <div >
        <h1>Page Not Found - 404</h1>
        <p>Seems like you landed on wrong page</p>
        <Link to="/">Go to Home page</Link>
      </div>
    </div>
  )
}
