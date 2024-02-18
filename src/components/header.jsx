import React, { useEffect, useState } from 'react';
import Link from 'react-scroll/modules/components/Link';

const Header = () => {
	const [scrollValue, setScrollValue] = useState(0);

	useEffect(() => {
		const onScroll = (e) => {
			setScrollValue(e.target.documentElement.scrollTop);
		};

		window.addEventListener('scroll', onScroll);

		return () => window.removeEventListener('scroll', onScroll);
	}, [scrollValue]);
	return (
		<div className="sticky top-0 md:min-h-[100px] min-h-[72px] flex flex-row md:gap-[24px] justify-between items-center md:py-[64px] md:px-[32px] py-[16px] px-[24px] font-medium z-50">
			<h2 className="md:text-[24px] text-[20px]">
				Milad’s
				<span className="md:text-[16px] text-[14px]"> Portfolio</span>
			</h2>

			<div className="flex md:flex-row md:gap-[24px] text-[20px]">
				<Link
					to="projects"
					smooth={true}
					offset={0}
					duration={500}
				>
					{`Projects`}
				</Link>
				<Link
					to="aboutMilad"
					smooth={true}
					duration={1000}
					offset={-200}
				>
					{`About`}
				</Link>
				<Link
					to="/"
					smooth={true}
					offset={0}
					duration={1000}
				>
					{`Contact`}
				</Link>
			</div>
		</div>
	);
};

export default Header;
