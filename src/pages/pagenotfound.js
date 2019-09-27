import React from 'react'
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className="container">
      <h2>Hello, React</h2>
      <p>The page you are looking for either does not exist or may have been removed. Please try again later</p>
      <Link to="/">Back to home page</Link>
    </div>
  )
}

export default PageNotFound;
