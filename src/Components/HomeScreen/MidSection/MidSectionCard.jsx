import React, { Fragment } from 'react';

import './midSectionCard.style.css';
import windowViewImage from '../../../assets/pexels-dick-hoskins-6969526.jpg';
import cruiseStop from '../../../assets/pexels-christian-pfeifer-5334316.jpg';
import coupleSitting from '../../../assets/pexels-andre-furtado-1417255.jpg';

const MidSectionCard = () => {
  return (
    <Fragment>
      <div className='container'>
        {/* 1st card, cabin view */}
        <div className='d-flex'>
          <div className='para-card'>
            <div className='short-para header'>
              <h1>Exciting views</h1>
              <br />
              <div className='short-para'>
                <p style={{ color: 'white' }}>
                  Laydown as you travel across the cold ocean. Grab a coco or
                  maybe a cochie if you can afford one :-). Choose various
                  location to capture the breathtaking moments without being in
                  a crowd then brag about it in style among your peasents.
                </p>
                <br />
              </div>

              <button className='btn-blue'>
                <span className='btn-text'>Learn more</span>
              </button>
            </div>
          </div>
          <div>
            <img
              className='card-img'
              src={windowViewImage}
              alt={`windowViewImage`}
            />
          </div>
        </div>
        {/* spaces between each card, */}
        <div className='card-divider'></div>

        {/* 2nd card, cruise ship */}
        <div className='d-flex card-reverse'>
          <div className='para-card'>
            <div className='short-para header'>
              <h1>Memorable adventure</h1>
              <br />
              <div className='short-para'>
                <p style={{ color: 'white' }}>
                  Explore the world of amphibians of unspoiled water, illegal
                  drug deals gone wrong sort of explosion in the middle of
                  nowhere and much more. Seek out action, confront your captain
                  or maybe rob his gun and scare him. Go looting on the other
                  cabins or piss into the ocean from deck. Choice is yours.
                </p>
              </div>
              <br />
              <button className='btn-blue'>
                <span className='btn-text'>Learn more</span>
              </button>
            </div>
          </div>
          <div>
            <img
              className='card-img card-img-reverse'
              src={cruiseStop}
              alt={`cruiseStop`}
            />
          </div>
        </div>

        {/* spaces between each card, */}
        <div className='card-divider'></div>

        {/* 3rd card, couple */}
        <div className='d-flex'>
          <div className='s-card'>
            <div className='short-para header'>
              <h1 className='text-shadow' style={{ textAlign: 'center' }}>
                BRING ALONG SOMEONE WHO IS READY TO PAY FOR YOUR 5#!%
              </h1>
              <br />
              <div className='short-para'>
                <p className='text-shadow'>
                  ferry&FUN offers place not only for single losers but also for
                  someone who got sugar daddy or mommy, friends with benefits,
                  couple and all. Choose whoever “fills your wallet and take
                  your “Friend” on all your adventure.
                </p>
                <br />
              </div>

              <button
                className='btn-blue'
                style={{ background: '#275564', padding: '18px 45px' }}
              >
                <span className='btn-text'>FIND OUT MORE</span>
              </button>
            </div>
          </div>
          <div>
            <img
              className='s_card-img'
              src={coupleSitting}
              alt={`coupleSitting`}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MidSectionCard;
