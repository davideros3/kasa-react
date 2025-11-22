import React, { useState } from 'react'
import sliderPrev from '../assests/slider_prev.svg'
import sliderNext from '../assests/slider_next.svg'

const Carousel = ({ images }) => {
  const [current, setCurrent] = useState(0)
  const length = images.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  if (!Array.isArray(images) || images.length <= 0) {
    return null
  }

  return (
    <section className="slider">
      {length > 1 && (
      <img
        src={sliderPrev}
        alt="Prev"
        className="left-arrow slider-arrow"
        onClick={prevSlide}
      />
      )}
      {length > 1 && (
      <img
        src={sliderNext}
        alt="Next"
        className="right-arrow slider-arrow"
        onClick={nextSlide}
      />
      )}
      <span className="slider-counter">
        {current + 1} / {length}
      </span>
      {images.map((image, index) => {
        return (
          <div
            className={'slide'}
            key={index}
          >
            {index === current && (
              <img src={image} alt={`photography-${index}`} className="image" />
            )}
          </div>
        )
      })}
    </section>
  )
}

export default Carousel
