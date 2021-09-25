/** @format */

import React from "react";
import fb from "../../assets/images/icons/fb.png";
import insta from "../../assets/images/icons/insta.png";

class Footer extends React.Component {
  render() {
    return (
      <div className='footer__wrap'>
        <div className='container'>
          <div className='footer__blk'>
            <div className='sec-1'>
              <div className='about'>
                <p className='about__heading'>About</p>
                <p className='about__text'>
                  Madhuri Furniture's was established in the year 1983 based in
                  Pipariya (m.p) specialising in the design, manufacturer and
                  installation of furniture.
                </p>
                <div className='follow mob'>
                  <p className='follow__heading'>Follow Us</p>
                  <div className='follow__wrap'>
                    <img src={fb} alt='fb' />
                    <img src={insta} alt='insta' />
                  </div>
                  <div className='copyright'>
                    <p className='copyright__text'>
                      © 2021 Madhuri furnitures . All rights reserved.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='sec-1'>
              <div className='about f_category'>
                <p className='about__heading'>Category</p>
                <div className='category_footer'>
                  <ul>
                    <li>Sofa</li>
                    <li>Bed</li>
                    <li>Idol</li>
                    <li>Sculpture</li>
                    <li>Door</li>
                  </ul>
                  <ul>
                    <li>Dining Set</li>
                    <li>Chairs</li>
                    <li>Tables</li>
                    <li>Almira</li>
                    {/* <li>Wood</li> */}
                  </ul>
                </div>
              </div>
            </div>
            <div className='sec-1' style={{ width: 334 }}>
              <div className='about'>
                <p className='about__heading'>Contact Us</p>
                <p className='add_sec1'>Address-</p>
                <p className='add_details'>
                  shobhapur road tiraha, near Axix Bank pipariya, m.p
                </p>
                <p className='add_sec1'>Contact no:-</p>
                <p className='add_details'>7000799601</p>
                <p className='add_sec1'>Hours-</p>
                <p className='add_details'>11:00 am – 09:00 pm (Daily)</p>
              </div>
            </div>
            <div className='follow desk'>
              <p className='follow__heading'>Follow Us</p>
              <div className='follow__wrap'>
                <img src={fb} alt='fb' />
                <img src={insta} alt='insta' />
              </div>
              <div className='copyright'>
                <p className='copyright__text'>
                  © 2021 Madhuri furnitures . All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
