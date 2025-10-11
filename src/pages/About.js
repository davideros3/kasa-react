import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Dropdowns from '../components/Dropdowns'
import imageHero from '../assests/about.png'
import Hero from '../components/Hero'

const About = () => {
  const datas = [
    {
      title: 'Reliability',
      description:
        'The ads posted on Kasa guarantee total reliability of the place. The photos are consistent with the accommodations, and all information is regularly checked by our teams.',
    },
    {
      title: 'Respect',
      description:
        'Caring is one of the founding values of Kasa. Any discriminatory behavior or disruptive behavior in the neighborhood will result in exclusion from our platform.',
    },
    {
      title: 'Service',
      description:
        "Our teams are at your disposal to provide you with the best experience. Please do not hesitate to contact us if you have any questions.",
    },
    {
      title: 'Safety',
      description:
        "Safety is Kasa's priority. Both for our guests and for travelers, each accommodation is compliant with the safety criteria established by our services. By leaving a note for both the host and the tenant, our teams can verify that the standards are respected. We also organize workshops on home security for our guests.",
    },
  ]

  return (
    <div id="content">
      <div className="container">
        <Header />
        <Hero image={imageHero} />
        <div className="about-wrapper">
          {datas.map((data, index) => {
            return (
              <Dropdowns
                key={index}
                type="text"
                title={data.title}
                data={data.description}
              />
            )
          })}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About