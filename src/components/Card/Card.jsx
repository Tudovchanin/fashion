
import './Card.css';
import { useState, useEffect } from 'react';

const Card = ({ img, title, paragraph, date, name, className, footerText, id }) => {
	const [isVisible, setIsVisible] = useState(false);
	useEffect(() => {
		setTimeout(() => {
			setIsVisible(true);
		}, 100);
	}, []);
	return (
		<div className={`${isVisible ? 'card-visible' : 'card-hidden'}`}>

			<article className={`card${id} ${className ? `${className}` : 'card'}`}>
				<a className={`${className ? `${className}__link` : 'card__link'}`} href='#'>
					<div className={`${className ? `${className}__container-img` : 'card__container-img'}`}>
						<img className='img-card' src={`${process.env.PUBLIC_URL}/content-img/${img}`} />
					</div>
			
					<div className={`${className ? `${className}__container-text` : 'card__container-text'}`}>
						<h2 className={`${className ? `${className}__title` : 'card__title'}`}>{title}</h2>
						<p className={`${className ? `${className}__paragraph` : 'card__paragraph'}`}>{paragraph}</p>
						<p className={`${className ? `${className}__container-date-name` : 'card__container-date-name'}`}>
							<time dateTime='2019-01-06' className='date'>{date}</time> By
							<span className='author-name'> {name}</span></p>
						<p className={`${className ? `${className}__footer` : ''}`}>{footerText}</p>
					</div>
				</a>

			</article>
		</div>
	);
}

export default Card;