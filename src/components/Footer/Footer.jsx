import './Footer.css'
import logoImg from './../../fashion-images/images/Logotype.svg'
import Menu from '../Menu/Menu';
import IconSocialMedia from '../IconSocialMedia/IconSocialMedia';


import facebookIcon from './../../fashion-images/social/facebook.svg'
import icon5 from './../../fashion-images/social/icon5.svg'
import icon4 from './../../fashion-images/social/icon4.svg'
import dribble from './../../fashion-images/social/dribble.svg'
import twitter from './../../fashion-images/social/twitter.svg'
import behance from './../../fashion-images/social/behance.svg'

const socialMediaData = [
	{ id: 1, icon: facebookIcon, textArr: ['32k', 'likes'] },
	{ id: 2, icon: icon5, textArr: ['814', 'followers'] },
	{ id: 3, icon: icon4, textArr: ['165', 'followers'] },
	{ id: 4, icon: dribble, textArr: ['6k', 'followers'] },
	{ id: 5, icon: twitter, textArr: ['130k', 'followers'] },
	{ id: 6, icon: behance, textArr: ['37k', 'followers'] },
];

const Footer = () => {
	return (
		<div className='footer margin-center'>

			<div className='footer__header-content'>
				<a href='#' className='logo footer__logo'>
					<img src={logoImg} alt='logo' />
				</a>
			</div>
			<div className='footer__main-content'>
				<div className='footer__menu'>
					<Menu />
				</div>
				<div className='footer__social'>
					{socialMediaData.map(item => (
						<IconSocialMedia
							key={item.id}
							icon={item.icon}
							textArr={item.textArr}
							id={item.id}
						/>)
					)}
				</div>
				<div className='footer__copyright'>
					<h3>@2019 Logwork. All Right Reserved</h3>
				</div>
			</div>


		</div>
	);
}

export default Footer;