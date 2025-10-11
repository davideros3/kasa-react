import React, { useState } from 'react'
import arrow from '../assests/up-arrow.png'

const Dropdowns = ({ type, title, data }) => {
  const [isOpen, setIsOpen] = useState(false)

  const changeStatus = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <div className="dropdown_label" onClick={changeStatus}>
        <h3>{title}</h3>
        <img src={arrow} alt="dropdown arrow" />
      </div>
      <div className="dropdown_content">
        {type === 'text' ? <p>{data}</p> : <ul>{data}</ul>}
      </div>
    </div>
  )
}

export default Dropdowns
