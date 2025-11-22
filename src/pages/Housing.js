import React from "react";
import { useParams } from "react-router-dom";
import Tag from "../components/TagList";
import HeaderAccommodation from "../components/HeaderAccomodation";
import Accordion from "../components/Accordion";
import Carousel from "../components/Carousel";
import useGetOne from "../utilities/useGetOne";



const Housing = () => {
  const { id } = useParams();
  const { wohnung } = useGetOne(id); 

  if (!wohnung) {
    return null;
  }

  const { 
    title, 
    Location, 
    host, 
    tags, 
    rating,
    pictures, 
    Amenities, 
    description 
  } = wohnung;
  
  // const tags = wohnung.tags?.map((tag, index) => (
  //   <Tag key={index} value={tag} />
  // )) || [];


  const equipments = Amenities?.map((amenity, index) => (
    <li key={index}>{amenity}</li>
  )) || [];

  return (
    <div id="content">
      <div className="container">
        <article className="accommodation">
          <Carousel images={pictures} />
          
          <HeaderAccommodation
            title={title}
            location={Location}
            host={host}
            tags={tags}
            rating={rating}
          />

          <section className="accommodation__description">
            <Accordion
              type="text"
              title="Description"
              data={description}
            />
            <Accordion
              type="list"
              title="Equipements"
              data={equipments}
            />
          </section>
        </article>
      </div>
    </div>
  );
};

export default Housing;