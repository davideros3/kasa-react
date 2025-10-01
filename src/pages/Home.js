import React from 'react'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Header from '../components/Header'
import HeroBan from '../components/Hero'
import heroImage from '../assests/header.png'
// import {useFetch } from '../utils/Hooks'
import { useEffect, useState } from "react";
import "../styles/CardBody.scss";



 export  const Home = () => {

  const [wohnungen, setWohnungen] = useState([]);

useEffect(() => {
  fetch("/api/wohnungen")
    .then((res) => res.json())
    .then((data) => {
      console.log("Fetched list of flats:", data); 
      setWohnungen(data);
    });
}, []);
  
  return (
    <div>
      <div id="content">
        <Header />
        <HeroBan text="Home anywhere and everywhere" image={heroImage} />
        <div className="container">
         
          <section className="wohnung">
            {wohnungen?.map((wohnung) => (
                <Card title={wohnung.title} picture={wohnung.cover} />
            ))}
          </section>
       
    
         
        </div>
      </div>
      <Footer />
    </div>
  )
}




