

import facebookIcon from './../../fashion-images/social/facebook.svg'
import icon5 from './../../fashion-images/social/icon5.svg'
import icon4 from './../../fashion-images/social/icon4.svg'
import dribble from './../../fashion-images/social/dribble.svg'
import twitter from './../../fashion-images/social/twitter.svg'
import behance from './../../fashion-images/social/behance.svg'
import instagram from './../../fashion-images/social/instagram.svg'
import youtube from './../../fashion-images/social/youtube.svg'
import icon2 from './../../fashion-images/social/icon2.svg'


import './SocialMedia.css'
import IconSocialMedia from '../IconSocialMedia/IconSocialMedia';



const socialMediaData = [
	{ id: 1, icon: facebookIcon, textArr: ['32k', 'likes'] },
	{ id: 2, icon: icon5, textArr: ['814', 'followers'] },
	{ id: 3, icon: icon4, textArr: ['165', 'followers'] },
	{ id: 4, icon: dribble, textArr: ['6k', 'followers'] },
	{ id: 5, icon: twitter, textArr: ['130k', 'followers'] },
	{ id: 6, icon: behance, textArr: ['37k', 'followers'] },
	{ id: 7, icon: instagram, textArr: ['854k', 'followers'] },
	{ id: 8, icon: youtube, textArr: ['52k', 'subscribers'] },
	{ id: 9, icon: icon2, textArr: ['642', 'followers'] },
];

const SocialMedia = () => {
	return (

		<div className='container-social-media'>
			{socialMediaData.map(item => (
				<IconSocialMedia
					key={item.id}
					icon={item.icon}
					textArr={item.textArr}
					id={item.id}
				/>)
			)}
		</div>
	);
}

export default SocialMedia;