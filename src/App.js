import Header from "./components/Header/Header";
import Hero from './components/Hero/Hero';
import Main from './components/Main/Main';
import Follow from './components/Follow/Follow';
import Footer from './components/Footer/Footer';
function App() {
	return (
		<>
			<Header />
			<div className='wrapper-indentation'>
				<Hero />
				<Main />
				<Follow />
				<Footer />
			</div>
		</>
	);
}

export default App;
