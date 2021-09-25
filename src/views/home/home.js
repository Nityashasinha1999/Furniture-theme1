/** @format */

import React from "react";
import HomeCarousel from "./homeCarousel";
import NewCollection from "./newCollection";
import bed from "../../assets/images/bed/1.png";
import JsonCarousel from "./gallery.json";
import Gallery from "./gallery";

function Home() {
  return (
    <div className=''>
      <HomeCarousel />
      <div className='new__collection'>
        <p className='heading'>New Collection</p>
        <div className='container'>
          <NewCollection />
          {/* {JsonCarousel.length && (
            <div>
              {JsonCarousel.map((bs, index) => {
                <div className='home__gallery'>
                  <div className='gallery__wrap'>
                    <div className='img__wrap'>
                      <img src={bs.image} alt='bed' />
                    </div>
                    <div className='img__wrap'>
                      <img src={bed} alt='bed' />
                    </div>
                    <div className='img__wrap'>
                      <img src={bed} alt='bed' />
                    </div>
                  </div>
                  <div className='gallery__wrap full__img'>
                    <div className='img__wrap'>
                      <img src={bed} alt='bed' />
                    </div>
                    <div className='img__wrap'>
                      <img src={bed} alt='bed' />
                    </div>
                  </div>
                </div>;
              })}
            </div>
          )} */}
          <Gallery />
        </div>
      </div>
    </div>
  );
}

export default Home;
