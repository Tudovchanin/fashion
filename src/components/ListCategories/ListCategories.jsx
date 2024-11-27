import './ListCategories.css'


const ListCategories = () => {
	return ( 
		<ul className='list-categories'>
		<li className='list-categories__item item'>
			<a href="#" className='list-categories__link'><span className='item__name'>Fashion</span> <span className='item__quantity'>(24)</span></a></li>
		<li className='list-categories__item item'>
			<a href="#" className='list-categories__link'><span className='item__name'>Fashion</span> <span className='item__quantity'>(24)</span></a></li>
		<li className='list-categories__item item'>
			<a href="#" className='list-categories__link'><span className='item__name'>Fashion</span> <span className='item__quantity'>(24)</span></a></li>
		<li className='list-categories__item item'>
			<a href="#" className='list-categories__link'><span className='item__name'>Fashion</span> <span className='item__quantity'>(24)</span></a></li>
		<li className='list-categories__item item'>
			<a href="#" className='list-categories__link'><span className='item__name'>Fashion</span> <span className='item__quantity'>(24)</span></a></li>
	</ul>
	);
}

export default ListCategories;