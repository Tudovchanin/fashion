import './AsideContent.css'
import Card from '../Card/Card';
import data from '../../data/data.js'
import ListCategories from '../ListCategories/ListCategories.jsx';
import CardAuthor from '../CardAuthor/CardAuthor.jsx';
import SocialMedia from '../SocialMedia/SocialMedia.jsx';
import ContainerTags from '../ContainerTags/ContainerTags.jsx';







const AsideContent = () => {
	return (

		<div className='aside'>



			<div className='aside__content aside-author'>
				<h2 className='aside__title'>About the author</h2>
				<CardAuthor />
			</div>



			<div className='aside__content aside__featured'>
				<h2 className='aside__title featured-title'>Featured posts</h2>
				<Card
					img={data[4].image}
					title={data[4].title}
					paragraph={data[4].paragraph}
					date={data[4].date}
					name={data[4].authorName}
					className={'card-aside'}
					id={data[4].id}
				/>
				<Card
					img={data[6].image}
					title={data[6].title}
					paragraph={data[6].paragraph}
					date={data[6].date}
					name={data[6].authorName}
					className={'card-aside'}
					id={data[6].id}
				/>
				<Card
					img={data[5].image}
					title={data[5].title}
					paragraph={data[5].paragraph}
					date={data[5].date}
					name={data[5].authorName}
					className={'card-aside'}
					id={data[5].id}
				/>
			</div>


			<div className='aside__content aside__content--min-gap aside__categories'>
				<h2 className='aside__title'>Categories</h2>
				<ListCategories />
			</div>







			<div className='aside__content aside__social-media'>
				<h2 className='aside__title'>Social media</h2>
				<SocialMedia />
			</div>


			<div className='aside__content aside__tags'>
				<h2 className='aside__title'>Tags</h2>
				<ContainerTags />
			</div>
		</div>
	);
}

export default AsideContent;