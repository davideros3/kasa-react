import React from "react";
import Card from "../components/Card";
import HeroBan from "../components/Hero";
import heroImage from "../assests/header.png";
import Hook from "../utilities/hook";
import { Link } from "react-router-dom";

export const Home = () => {
  const { wohnungen } = Hook();

  return (
    <div>
      <HeroBan text="Home anywhere and everywhere" image={heroImage} />
      <div className="container">
        <section className="wohnung">
          {wohnungen?.map((wohnung) => (
            <Link to={`/appartement/${wohnung.id}`} key={wohnung.id}>
              <Card title={wohnung.title} picture={wohnung.cover} />
            </Link>
          ))}
        </section>
      </div>
    </div>
  );
};
