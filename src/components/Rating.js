import React from "react";
import activeStar from '../assests/active.svg';
import inActiveStart from '../assests/inactive.svg';


const Rating = ({ rate }) => {
  let content = []
  let rateValue = parseInt(rate)

  for (let i = 1; i < 6; i++) {
    if (i <= rateValue) {
      content.push(
        <img key={`rate-${i}`} src={activeStar} alt="Active star" />
      )
    } else {
      content.push(
        <img key={`rate-${i}`} src={inActiveStart} alt="Inactive star " />
      )
    }
  }

  return <div className="rate">{content}</div>
}

export default Rating