/** @format */

import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import data from "./doorData";

class DoorCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nav: true,
      dots: false,
      pagination: true,
      popularBooks: [],
      navText: [
        "<div class='nav-button owl-prev'>next</div>",
        "<div class='nav-button owl-next'>prev</div>",
      ],
      navContainer: ".custom-nav",
      responsive: {
        0: {
          items: 1,
          nav: false,
          dots: true,
          margin: 0,
          smartSpeed: 700,
          animateIn: "linear",
          animateOut: "linear",
          stagePadding: 0,
        },
        450: {
          items: 1,
          nav: false,
          dots: true,
          smartSpeed: 700,
          animateIn: "linear",
          animateOut: "linear",
        },
        600: {
          items: 1,
          margin: 0,
          nav: false,
          dots: true,
          smartSpeed: 700,
          animateIn: "linear",
          animateOut: "linear",
        },
        1000: {
          items: 1,
          margin: 0,

          nav: false,
          dots: true,
          smartSpeed: 1500,
          animateIn: "linear",
          animateOut: "linear",
        },
        1399: {
          center: true,
          nav: false,
          autoHeight: false,
          smartSpeed: 1500,
          animateIn: "linear",
          animateOut: "linear",
          items: 1,
          lazyLoad: true,
          dots: true,
          dots: true,
        },
      },
    };
  }

  render() {
    return (
      <div className=''>
        <div className=''>
          <div className='homeOPBlkCarousel'>
            {data.length && (
              <OwlCarousel
                className='owl-theme'
                loop={true}
                center={true}
                // margin={30}
                margin={0}
                startPosition={1}
                items={1}
                dots={true}
                responsive={this.state.responsive}>
                {data.map((bs, index) => {
                  console.log(bs.image, "po");
                  return (
                    <div className='homeCBlk'>
                      {console.log(bs.image, "data")}
                      {bs.image.map((k, index) => {
                        return (
                          <div className='homeCImg'>
                            {console.log(k.image, "poss")}
                            <img src={k.image} alt='book' className='bookImg' />
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </OwlCarousel>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default DoorCarousel;
