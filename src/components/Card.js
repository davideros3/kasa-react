import React from 'react'
import PropTypes from 'prop-types'
import "../styles/Card.scss";



function Card({ title, picture }) {
  return (
    <div className="card">
      <img src={picture} alt={title} />
      <h2>{title}</h2>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
}

export default Card