import React from 'react';

import DrawerToggler from '../SideMenu/DrawerToggler';
import './HeaderFlex.style.css';

const HeaderFlex = ({ drawerClickHandler }) => {
	return (
		<div className='page-container'>
			<div className='header-container'>
				<DrawerToggler click={drawerClickHandler} />
				<h1 className='ferry-logo'>ferry&FUN</h1>

				<div className='sm-screen'>
					<div className='header-flex-items'>Home</div>
					<div className='header-flex-items'>Services</div>
					<div className='header-flex-items'>About Us</div>
					<div className='header-flex-items__empty'></div>
					<div className='header-flex-items'>
						<button className=' btn-blue'>
							<span className='btn-text'>sign up</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeaderFlex;
