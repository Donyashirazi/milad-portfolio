import Image from 'next/image';
import { Inter } from 'next/font/google';
import HomeComponent from '@/components/home';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<div className="flex flex-col justify-center items-center m-auto max-w-[2200px]">
			<HomeComponent />
		</div>
	);
}
