import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Link from 'react-scroll/modules/components/Link';
import ResumeDown from './resumedown';

const Header = ({ headerTransparent }) => {
	const [scrollValue, setScrollValue] = useState(0);
	const router = useRouter();
	useEffect(() => {
		const onScroll = (e) => {
			setScrollValue(e.target.documentElement.scrollTop);
		};

		window.addEventListener('scroll', onScroll);

		return () => window.removeEventListener('scroll', onScroll);
	}, [scrollValue]);

	useEffect(() => {
		const onScroll = (e) => {
			setScrollValue(e.target.documentElement.scrollTop);
		};

		window.addEventListener('scroll', onScroll);

		return () => window.removeEventListener('scroll', onScroll);
	}, [scrollValue]);
	return (
		<div
			className={`sticky top-0 md:min-h-[100px] min-h-[72px] flex flex-row md:gap-[24px] justify-between items-center md:py-[64px] md:px-[32px] py-[16px] px-[24px] font-medium z-50 ${
				headerTransparent ? 'bg-transparent' : 'bg-[#1a1a1a]'
			}`}
		>
			<button onClick={() => router.push('/')}>
				<h2 className="md:text-[24px] text-[20px] hover:drop-shadow-[0_0_20px_rgba(255,255,255,1)] transition-all duration-100">
					Milad’s
					<span className="md:text-[16px] text-[14px]">
						{' '}
						Portfolio
					</span>
				</h2>
			</button>

			<div className="flex md:flex-row md:gap-[24px] text-[20px] cursor-pointer ">
				<Link
					to="projects"
					smooth={true}
					offset={-240}
					duration={500}
					className="hover:drop-shadow-[0_0_20px_rgba(255,255,255,1)] transition-all duration-100"
				>
					{`Projects`}
				</Link>
				<Link
					to="aboutMilad"
					smooth={true}
					duration={1000}
					offset={-200}
					className="hover:drop-shadow-[0_0_20px_rgba(255,255,255,1)] transition-all duration-100"
				>
					{`About`}
				</Link>
				<Link
					to="contactPage"
					smooth={true}
					offset={1000}
					duration={1000}
					className="hover:drop-shadow-[0_0_20px_rgba(255,255,255,1)] transition-all duration-100"
				>
					{`Contact`}
				</Link>
				<ResumeDown />
			</div>
		</div>
	);
};

export default Header;
