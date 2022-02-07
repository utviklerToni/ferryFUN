import React, { Fragment } from 'react';

import './footer.style.css';
import AnchorSVG from './AnchorSVG';

const Footer = () => {
  return (
    <Fragment>
      <div className='footer-bg'>
        <div className='container'>
          <div className='footer-nav d-flex'>
            <ul className='d-flex'>
              <li className='s_text-color b_font'>ferrry&Fun</li>
              <li className='s_text-color b_font'>Gallery</li>
              <li className='s_text-color b_font'>History</li>
              <li className='s_text-color b_font'>About</li>
              <li className='s_text-color b_font'>Help</li>
            </ul>

            <div></div>
            <button
              className='lang-select btn-blue d-flex'
              style={{ alignItems: 'center' }}
            >
              <span
                className='btn-text '
                style={{ paddingRight: '.6rem', color: '#AFFFFF' }}
              >
                English(EN)
              </span>
              <AnchorSVG />
            </button>
          </div>
          <div className='footer-text'>
            <p>All trademarks, logos & copyrights of their respective owner</p>
            <p>Terms of Use | Privacy & Cookies | Trademarks</p>
            <p>© 2022 ferry&FUN Inc.</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
