import React from 'react';
import Header from './header';
import AboutMilad from './About';
import ProjectSwiper from './projects';

const HomeComponent = () => {
	return (
		<div className="flex flex-col">
			<Header />
			<AboutMilad />
			<ProjectSwiper />
		</div>
	);
};

export default HomeComponent;
