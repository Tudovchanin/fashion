
import './Header.css'
import logoImg from './../../fashion-images/images/Logotype.svg'
import Menu from '../Menu/Menu'
import BurgerMenu from '../BurgerMenu/BurgerMenu'
import { useRef } from 'react';


function Header() {
	const navRef = useRef(null);
	const toggleNavVisibility = () => {
		navRef.current.classList.toggle('header__nav--active');
		document.body.classList.toggle('stop');
};

	return (
		<header className='header'>
			<div className='header__row'>
				<a href='#' className='logo header__logo'>
					<img src={logoImg} alt='logo' />
				</a>
				<nav ref={navRef} className='header__nav'>
					<Menu />
				</nav>
				<BurgerMenu className={'header__burger-menu'} onClick={toggleNavVisibility} />
			</div>

		</header>
	)
}
export default Header

