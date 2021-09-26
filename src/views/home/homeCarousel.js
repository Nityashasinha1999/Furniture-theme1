/** @format */

import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import data from "./carouselData";

class HomeCarousel extends React.Component {
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
          <div className='home__carousel'>
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
                  console.log(bs, "po");
                  return (
                    <div className='home__bannerWrap'>
                      <div className=''>
                        <div className='home__banner'>
                          <div className='home__sec custom__container'>
                            <div className='carousel__info'>
                              <p className='c__desc'>{bs.description}</p>
                              <p className='c__price'>{bs.price}</p>
                              <div className='c__info_blk'>
                                <p className='c__info'>
                                  Dimension- {bs.dimension}
                                </p>
                                <p className='c__info'>Weight- {bs.weight}</p>
                                <p className='c__info'>Wax- {bs.wax}</p>
                                <p className='c__info'>Color- {bs.color}</p>
                                <p className='c__info'>
                                  Category- {bs.category}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className='home__sec'>
                            <img src={bs.image} alt='book' className='c__Img' />
                          </div>
                        </div>
                      </div>
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

export default HomeCarousel;
