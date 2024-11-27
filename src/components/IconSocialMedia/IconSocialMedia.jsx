




import './IconSocialMedia.css'

const IconSocialMedia = ({id, icon, textArr}) => {
	return ( 
		<a href='#' className='social-media'>
			<img className={`social-media__icon${id ? ` icon-${id}` : ''}`} src={icon} alt="facebookIcon" />
			<div className='social-media__text'>{textArr[0]}</div>
			<div className='social-media__text'>{textArr[1]}</div>
		</a> );
}

export default IconSocialMedia;