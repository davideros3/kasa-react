import React from 'react'
import { NavLink } from 'react-router-dom'

const ErrorMessage = ({ message, textAlert, link }) => (
  <section className="error">
    <h1>404</h1>
    <p>{message}</p>
    <NavLink to={link}>{textAlert}</NavLink>
  </section>
)

export default ErrorMessage