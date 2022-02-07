import React from 'react';

import './JoinUsCard.style.css';
import ferryIllustration from '../../../assets/transportation _ ship, cruise.png';

const JoinUsCard = () => {
  return (
    <div className='container d-flex'>
      <div className='join-us-container d-flex'>
        <h1 className='join-us-header'>
          Join us in our adventure among the beautiful Fjord
        </h1>
        <br />
        <button
          className='btn-blue d-flex'
          style={{
            background: '#275564',
            padding: '1.2rem 3.6rem',
            alignItems: 'center',
          }}
        >
          <span className='btn-text'>EXPLORE WHAT WE OFFER</span>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            aria-hidden='true'
            role='img'
            width='2em'
            height='2em'
            preserveAspectRatio='xMidYMid meet'
            viewBox='0 0 32 32'
            style={{ marginLeft: '.63rem' }}
          >
            <g fill='white'>
              <path d='M0 16c0 8.822 7.178 16 16 16s16-7.178 16-16S24.822 0 16 0S0 7.178 0 16zM16 1c8.271 0 15 6.729 15 15s-6.729 15-15 15S1 24.271 1 16S7.729 1 16 1z' />
              <path d='M16 29c7.168 0 13-5.832 13-13S23.168 3 16 3S3 8.832 3 16s5.832 13 13 13zM15 4.051v1.526a.5.5 0 0 0 1 0V4c6.279 0 11.438 4.85 11.949 11h-1.527a.5.5 0 0 0 0 1H28c0 6.617-5.383 12-12 12v-1.577a.5.5 0 0 0-1 0v1.526C8.851 27.438 4 22.28 4 16h1.578a.5.5 0 0 0 0-1H4.051C4.534 9.181 9.181 4.534 15 4.051z' />
              <path d='M9.386 23.041a.5.5 0 0 0 .292-.094l5.614-4.036c.228.056.463.093.708.093c1.654 0 3-1.346 3-3a3 3 0 0 0-.087-.687l4.106-5.712a.501.501 0 0 0-.698-.699l-5.778 4.153a2.96 2.96 0 0 0-.544-.055c-1.654 0-3 1.346-3 3c0 .195.022.386.058.571L8.98 22.249a.501.501 0 0 0 .406.792zM14 16.005c0-1.103.897-2 2-2s2 .897 2 2s-.897 2-2 2s-2-.898-2-2zm6.424-4.502l-1.987 2.765a3.025 3.025 0 0 0-.792-.767l2.779-1.998zm-6.919 6.164c.199.298.454.553.743.763l-2.672 1.921l1.929-2.684z' />
            </g>
          </svg>
        </button>
      </div>
      <div className='d-flex ferry-image'>
        <img src={ferryIllustration} alt={`A ferry in the ocean`} />
      </div>
    </div>
  );
};

export default JoinUsCard;
