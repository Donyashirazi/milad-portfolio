import Image from 'next/image';
import { Inter } from 'next/font/google';
import Header from '@/components/header';
import AboutMilad from '@/components/About';
import Projects from '@/components/projects';
import ProjectSwiper from '@/components/projects';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<div className="flex flex-col">
			<Header />
			<AboutMilad />
			<ProjectSwiper />
		</div>
	);
}
