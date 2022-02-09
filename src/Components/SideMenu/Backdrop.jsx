import React from 'react';
import './sideMenuStyle.css';

const Backdrop = (props) => (
	<div className='backdrop' onClick={props.click}></div>
);

export default Backdrop;
