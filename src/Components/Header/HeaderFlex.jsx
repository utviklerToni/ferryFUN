import React from 'react';

import DrawerToggler from '../SideMenu/DrawerToggler';
import './HeaderFlex.style.css';

const HeaderFlex = ({ drawerClickHandler }) => {
	return (
		<div className='page-container'>
			<div className='header-container'>
			<div className="d-none">
        <DrawerToggler click={drawerClickHandler} />
      </div>
				<h1 className='ferry-logo'>ferry&FUN</h1>

			
					<div className='header-flex-items sm-screen'>Home</div>
					<div className='header-flex-items sm-screen'>Services</div>
					<div className='header-flex-items sm-screen'>About Us</div>
					<div className='header-flex-items__empty'></div>
					<div className='header-flex-items sm-screen'>
						<button className=' btn-blue'>
							<span className='btn-text'>sign up</span>
						</button>
					</div>
				</div>
	
		</div>
	);
};

export default HeaderFlex;
