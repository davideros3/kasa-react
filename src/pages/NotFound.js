import React from 'react'
import ErrorMessage from '../components/ErrorMessage'

const Error = () => {
  return (
    <div id="content">
      <div className="container">
       
        <ErrorMessage
          message="Oops! It looks like this page doesn’t exist."
          textAlert="Go back to home page"
          link="/"
        />
      </div>
      
    </div>
  )
}

export default Error