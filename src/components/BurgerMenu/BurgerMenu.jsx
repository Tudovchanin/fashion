

import './BurgerMenu.css'
import { useState, useEffect } from 'react';





const BurgerMenu = ({ className, onClick }) => {
	const [isActive, setIsActive] = useState(false);



	function click() {
		setIsActive(!isActive);
		onClick();
	}

	return (
		<div onClick={click} className={className ? `${className} burger-menu` : 'burger-menu'}>
			<span className={`burger-menu__line-1${isActive ? ` ${'rotate-line-1'}` : ''}`}></span>
			<span className={`burger-menu__line-2${isActive ? ` ${'display-none'}` : ''}`}></span>
			<span className={`burger-menu__line-3${isActive ? ` ${'rotate-line-3'}` : ''}`}></span>
		</div>
	);
}




export default BurgerMenu;