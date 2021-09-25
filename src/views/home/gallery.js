/** @format */

import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import JsonData from "./gallery.json";

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className=''>
        <div className=''>
          <div className='new__carousel'>
            {JsonData.length && (
              <div className='gallery'>
                {JsonData.map((bs, index) => {
                  console.log(bs, "po");
                  return (
                    <div className='home__gallery'>
                      <div className='gallery__wrap'>
                        <div className='img__wrap'>
                          <img src={bs.image} alt='bed' />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
