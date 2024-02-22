import Image from 'next/image';
import React from 'react';

const TechnicalDive = ({ project }) => {
	const projectVariants = project[0].tabs?.technicalDive;
	return (
		<div className="relative justify-center gap-[64px] mx-[64px] mb-[64px] text-[#FFFFFF] text-[20px] font-medium whitespace-pre-wrap [&>*]:whitespace-pre-wrap">
			<h2 className="text-[32px] font-medium text-left mb-[41px]">{`project ${project[0]?.id}`}</h2>
			<p className="text-[28px] font-medium">{projectVariants}</p>
		</div>
	);
};

export default TechnicalDive;
