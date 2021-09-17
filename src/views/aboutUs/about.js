/** @format */

import React from "react";
import quality from "../../assets/images/icons/quality.png";
import affordability from "../../assets/images/icons/affordability.png";
import worries from "../../assets/images/icons/worries.png";
import smile from "../../assets/images/icons/smile.png";
import friendship from "../../assets/images/icons/friendship.png";
import design from "../../assets/images/icons/design.png";

class About extends React.Component {
  render() {
    return (
      <div className='about__wrap'>
        <div class='container'>
          <div class='a__about'>
            <p className='about__heading'>About Madhuri Furnitures</p>
            <p>
              * Madhuri Furniture's was established in the year 1983 based in
              Pipariya (m.p) specialising in the design, manufacturer and
              installation of furniture.
            </p>

            <p>
              {" "}
              * We combine a synergy of over 36 years’ experience within the
              industry giving us an unrivalled reputation of being able to offer
              you tailored furniture solutions, from craftsmen to customer care
              we take great care of you every step of the way turning your dream
              into reality. Our designs range from traditional to contemporary
              and as we use vast range of suppliers we can offer a solution to
              fit any space in your home and fulfil major of your requirements.
            </p>
          </div>
        </div>
        <div class='a__profile'>
          <div className='container'>
            <p className='a__profile__heading'>Company Profile</p>
            <p className='a__profile__details'>
              Every piece of art is made at our local factory, we create jobs
              for local citizens, holiday bonuses, extra funds are just some of
              the perks we gladly make them available all to ensure that we have
              happy and willing staff that helps to build furniture of fine
              quality for our customers. Compared to other cheaper/imported
              products, our prices are very competitive and the standard of work
              much higher. We only use high grade raw materials and by paying
              attention to all our customers’ specific needs, we strive to make
              every piece a masterpiece.By purchasing from us, you not only get
              furniture that is durable, strong, good looking and manufactured
              especially for you, but you can have peace of mind that you will
              walk away as a satisfied customer.
            </p>

            <p className='a__profile__details'>
              {" "}
              With a working area of 6000 sq.ft. and a well equipped task force
              of 40 members
            </p>
          </div>
        </div>
        <div class='a__buy'>
          <p className='heading'>Why Buy From Us</p>
          <div class='container'>
            <div className='a__cardWrap'>
              <div className='card__about'>
                <img src={quality} alt='quality' />
                <p className='quality__heading'>Quality furniture</p>
                <p className='quality__details'>
                  You get the best quality furniture, locally manufactured.
                </p>
              </div>
              <div className='card__about'>
                <img src={affordability} alt='quality' />
                <p className='quality__heading'>Affordability </p>
                <p className='quality__details'>
                  We sell directly to YOU no middle man.
                </p>
              </div>
              <div className='card__about'>
                <img src={worries} alt='quality' />
                <p className='quality__heading'>No worries</p>
                <p className='quality__details'>
                  Giving YOU piece of mind by supplying you a 2-year factory
                  warranty.
                </p>
              </div>
              <div className='card__about'>
                <img src={smile} alt='quality' />
                <p className='quality__heading'>Smile</p>
                <p className='quality__details'>
                  YOU get what you want as we do custom designing around
                  standard furniture and handicrafts.
                </p>
              </div>
              <div className='card__about'>
                <img src={friendship} alt='quality' />
                <p className='quality__heading'>Frienship</p>
                <p className='quality__details'>
                  We are a small family owned business,YOU can communicate with
                  our friendly staff or directly to the owners.
                </p>
              </div>
              <div className='card__about'>
                <img src={design} alt='quality' />
                <p className='quality__heading'>Design</p>
                <p className='quality__details'>
                  YOU can choose the design or supply your own design,choose the
                  wood colour and fabrics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
