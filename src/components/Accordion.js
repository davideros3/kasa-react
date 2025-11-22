import React, { useState } from 'react'
import arrow from '../assests/up-arrow.svg'

const Accordion = ({ type, title, data }) => {
 const [isOpen,setIsOpen] = useState(false)

const changeStatus = () => {
  setIsOpen(!isOpen)
}

  return (
   <div className={`accordion ${isOpen ? 'open' : ''}`}>
      <div className="accordion_label" onClick={changeStatus}>
        <h3>{title}</h3>
        <img src={arrow} alt="accordion arrow" />
      </div>
      <div className="accordion_content">
        {type === 'text' ? <p>{data}</p> : <ul>{data}</ul>}
      </div>
    </div>
  )
}

export default Accordion
