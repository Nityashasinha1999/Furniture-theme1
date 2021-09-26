/** @format */

import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import data from "./newCollectionData";

class NewCollection extends React.Component {
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
          items: 2,
          margin: 0,

          nav: false,
          dots: true,
          smartSpeed: 1500,
          animateIn: "linear",
          animateOut: "linear",
        },
        1199: {
          center: true,
          nav: false,
          autoHeight: false,
          smartSpeed: 1500,
          animateIn: "linear",
          animateOut: "linear",
          items: 2,
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
          <div className='new__carousel'>
            {data.length && (
              <OwlCarousel
                className='owl-theme'
                loop={true}
                center={false}
                // margin={30}
                margin={60}
                startPosition={1}
                items={3}
                dots={true}
                responsive={this.state.responsive}>
                {data.map((bs, index) => {
                  console.log(bs, "po");
                  return (
                    <div className='new__collection'>
                      <div className='card__new'>
                        <div className='card__sq'>
                          <img src={bs.image} alt='book' />
                        </div>
                        <div className=''>
                          <div className=''>
                            <p className='card__name'>{bs.name}</p>
                            <p className='card__price'>{bs.price}</p>
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

export default NewCollection;
