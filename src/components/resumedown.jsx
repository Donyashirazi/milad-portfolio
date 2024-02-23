import Link from 'next/link';
import React from 'react';

const ResumeDown = () => {
	return (
		<div>
			<Link
				href={'/milad-shirazi.pdf'}
				className="hover:drop-shadow-[0_0_20px_rgba(255,255,255,1)] transition-all duration-100"
			>
				{`Resume`}
			</Link>
		</div>
	);
};

export default ResumeDown;
