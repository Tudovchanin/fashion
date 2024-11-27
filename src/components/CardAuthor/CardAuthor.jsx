

import './CardAuthor.css'

const CardAuthor = () => {
	return (

		<div className='card-author'>
			<div className='container-author-img'>
			<img src={`${process.env.PUBLIC_URL}/content-img/image-9.jpeg`} alt="author image" />
			</div>
			<div className='author-info'>
				<h3 className='author-info__title'>Kate Willems</h3>
				<p className='author-info__description'>Food & cooking bloger</p>
				<p className='author-info__bio'>Hi, I'm Sonia. Cooking is the way I express my creative side to the world. Welcome to my Kitchen Corner on…</p>
			</div>
			<a href="#" className='link-author'>
				CONTINUE READING
			</a>
		</div>

	);
}

export default CardAuthor;