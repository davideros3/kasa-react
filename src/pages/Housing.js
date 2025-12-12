import React from "react";
import { useParams, Navigate } from "react-router-dom";
import HeaderAccommodation from "../components/HeaderAccomodation";
import Accordion from "../components/Accordion";
import Carousel from "../components/Carousel";
import useGetOne from "../utilities/useGetOne";

const Housing = () => {
  const { id } = useParams();
  const { wohnung, loading, notFound } = useGetOne(id);

  if (loading) return null;

  if (notFound) {
    return <Navigate to="/404" replace />;
  }

  const {
    title,
    location,
    host,
    tags,
    rating,
    pictures,
    Amenities,
    description,
  } = wohnung;

  const equipments =
    Amenities?.map((amenity, index) => <li key={index}>{amenity}</li>) || [];

  return (
    <div id="content">
      <div className="container">
        <article className="accommodation">
          <Carousel images={pictures} />

          <HeaderAccommodation
            title={title}
            location={location}
            host={host}
            tags={tags}
            rating={rating}
          />

          <section className="accommodation__description">
            <Accordion type="text" title="Description" data={description} />
            <Accordion type="list" title="Equipements" data={equipments} />
          </section>
        </article>
      </div>
    </div>
  );
};

export default Housing;