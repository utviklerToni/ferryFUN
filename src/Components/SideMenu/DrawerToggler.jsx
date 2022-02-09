import HamburgerIcon from '../../assets/svgs/HamburgerIcon';

const DrawerToggler = (props) => {
	// const clickHandler = () => {
	// 	console.log('heheheh');
	// };

	return (
		<div>
			<button className='button-color-reset display-none' onClick={props.click}>
				<HamburgerIcon />
			</button>
		</div>
	);
};

export default DrawerToggler;
