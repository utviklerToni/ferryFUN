import { Link } from 'react-router-dom';
import './sideMenuStyle.css';

const SideDrawer = (props) => {
	let drawerClass = 'side-drawer';

	if (props.show) {
		drawerClass = 'side-drawer open';
	}

	return (
		<div>
			<nav className={drawerClass} onClick={props.click}>
				<ul>
					<div className='side-menu-logo-style'>
						<h1>Kim's Klub Kragerø</h1>
					</div>
					<div className='side-menu-item'>
						<h2>
							<Link to='/'>Home</Link>
						</h2>
						<h2>
							<Link to='/'>Services</Link>
						</h2>
						<h2>
							<Link to='/'>About Us</Link>
						</h2>
						<h2>
							<Link to='/'>Sign Up</Link>
						</h2>
					</div>
				</ul>
			</nav>
		</div>
	);
};

export default SideDrawer;
