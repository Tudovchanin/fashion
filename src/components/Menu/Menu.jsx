
import './Menu.css';

const Menu = () => {
	return (
		<ul className='menu'>
			<li className='menu__item'><a className='menu__link' href="#">Home</a></li>
			<li className='menu__item'><a className='menu__link' href="#">Recipes</a></li>
			<li className='menu__item'><a className='menu__link' href="#">Article</a></li>
			<li className='menu__item'><a className='menu__link' href="#">Contact</a></li>
			<li className='menu__item'><a className='menu__link' href="#">Purchase</a></li>
		</ul>
	)
};
export default Menu;