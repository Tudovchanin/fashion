import './Follow.css'



const Follow = () => {
	return (
		<div className='follower margin-center'>
			<h2 className='follower__title'>Follow our @GitHub</h2>
			<div className='follower__container-img'>
				<div className='follower__wrapper-img'>
					<img className='follower__img' src={`${process.env.PUBLIC_URL}/content-img/image-6.jpeg`} alt="image" />
				</div>
				<div className='follower__wrapper-img'>
					<img className='follower__img' src={`${process.env.PUBLIC_URL}/content-img/image-6.jpeg`} alt="image" />
				</div>
				<div className='follower__wrapper-img'>
					<img className='follower__img' src={`${process.env.PUBLIC_URL}/content-img/image-6.jpeg`} alt="image" />
				</div>
				<div className='follower__wrapper-img'>
					<img className='follower__img' src={`${process.env.PUBLIC_URL}/content-img/image-6.jpeg`} alt="image" />
				</div>
				<div className='follower__wrapper-img'>
					<img className='follower__img' src={`${process.env.PUBLIC_URL}/content-img/image-6.jpeg`} alt="image" />
				</div>
				<div className='follower__wrapper-img'>
					<img className='follower__img' src={`${process.env.PUBLIC_URL}/content-img/image-6.jpeg`} alt="image" />
				</div>
			</div>
		</div>
	);
}

export default Follow;

