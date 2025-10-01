import React from "react";



const HeroImage = ({text, image}) => {
    return (
        <section className="hero=image">
              <img src={image} alt="Hero visual" />
                {text !== 'undefined' && <p>{text}</p>}

        </section>
    )
}

export default HeroImage