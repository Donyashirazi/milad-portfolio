import React from 'react';
import Header from './header';
import AboutMilad from './About';
import ProjectSwiper from './projects';
import Footer from './footer';

const HomeComponent = () => {
	return (
		<div className="flex flex-col">
			<Header />
			<AboutMilad />
			<ProjectSwiper />
			<Footer />
		</div>
	);
};

export default HomeComponent;
