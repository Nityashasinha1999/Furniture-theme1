/** @format */

import React from "react";

import mail from "../../assets/images/icons/mail.png";
import phone from "../../assets/images/icons/phone.png";
import address from "../../assets/images/icons/address.png";

// ....

// className "owl-theme" is optional
class ContactUs extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='home works'>
        <div className='banner__contact'>
          <div className='banner__bg'></div>
        </div>

        {/* //about us */}
        <div className='container'>
          <div className='contact-heading'>
            <p className='big'>Better yet, see us in person!</p>
            <p className='small'>
              We love our customers, so feel free to visit during normal
              business hours.
            </p>
          </div>
          <div className='flexMap'>
            <div className='mapSecWrap'>
              <div className='google-map-code'>
                <iframe
                  src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15546.996466263798!2d80.203829!3d13.051635!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xac970688beb204f0!2sCraft+32+Dental+Care+-+Dentist+in+Vadapalani!5e0!3m2!1sen!2sin!4v1509544131179'
                  width='100%'
                  height='300'
                  width='500'
                  height='450'
                  frameborder='0'
                  style={{ border: 0 }}
                  className='mapIframe'
                  allowfullscreen=''></iframe>
              </div>
            </div>
            <div className='contactUsDetail'>
              <div className='sec1'>
                <img src={mail} className='mail-icon' alt='mail' />
                <p className='mailText'>+91 7000799601</p>
              </div>
              <div className='sec1'>
                <img src={phone} className='mail-icon' alt='mail' />
                <p className='mailText'>11:00 am – 09:00 pm (Daily)</p>
              </div>
              <div className='sec1'>
                <img src={address} className='mail-icon' alt='mail' />
                <p className='mailText'>
                  Shobhapur Road, Tiraha, Pipariya, M.P
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ContactUs;
