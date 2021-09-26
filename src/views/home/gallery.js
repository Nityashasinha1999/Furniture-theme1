/** @format */

import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import data from "./galleryData";
import { Link } from "react-router-dom";

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  scrollTop() {
    window.scrollTo(
      {
        top: 0,
        behavior: "smooth",
      },
      50
    );
  }

  render() {
    return (
      <div className=''>
        <div className=''>
          <div className='new__carousel'>
            {data.length && (
              <div className='gallery'>
                {data.map((bs, index) => {
                  console.log(bs, "po");
                  return (
                    <div className='home__gallery'>
                      <div className='gallery__wrap'>
                        <div className='img__wrap'>
                          <img src={bs.image} alt='bed' />
                          <Link to={bs.link} onClick={this.scrollTop}>
                            <div className='title'>
                              <p>{bs.name}</p>
                            </div>
                          </Link>
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
