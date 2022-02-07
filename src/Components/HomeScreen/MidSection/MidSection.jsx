import React, { Fragment } from 'react';

import './midsection.style.css';

const MidSection = () => {
  return (
    <Fragment>
      <div className='float-text-container'>
        <div className='float-header'>
          <h1>Let's float together</h1>
        </div>
        <p className='float-sm-para'>
          Leave the land behind, explore the unkown water, or become a gay fish
        </p>
      </div>
    </Fragment>
  );
};

export default MidSection;
