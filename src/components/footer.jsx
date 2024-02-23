import Link from 'next/link';
import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
	return (
		<div
			className=""
			id="contactPage"
		>
			<h2 className="text-[20px] font-normal mt-[8px] mx-[32px]">
				Contact me at:
			</h2>
			<div className="flex flex-col items-start justify-around gap-[10px] mb-[32px] mt-[10px] mx-[32px]">
				<div className="flex flex-row items-center gap-[18px]">
					<MdEmail size={32} />
					<h2 className="text-[20px] hover:text-gray-300">
						milad.shirazi@gmail.com
					</h2>
				</div>

				<div className="flex flex-row items-center gap-[18px]">
					<FaLinkedin
						className=""
						size={32}
					/>
					<Link
						className="text-[20px] hover:text-gray-300"
						href={'https://www.linkedin.com/in/milad-r-shirazi/'}
					>
						https://www.linkedin.com/in/milad-r-shirazi/
					</Link>
				</div>
				<div className="flex flex-row items-center gap-[18px]">
					<FaGithub size={32} />
					<Link
						className="text-[20px] hover:text-gray-300"
						href={'https://github.com/miladrezae'}
					>
						https://github.com/miladrezae
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Footer;
