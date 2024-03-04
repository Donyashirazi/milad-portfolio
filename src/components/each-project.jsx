import Image from 'next/image';
import React from 'react';

const EachProjectContainer = ({ eachProject }) => {
	return (
		<div
			className={`md:relative flex flex-col h-[201px] md:flex-row md:min-w-[784px] min-w-[324px] md:h-[369px] md:rounded-[32px] md:mr-[100px] mr-0 ${
				eachProject.status === 'coming soon' &&
				'bg-black/60 cursor-default'
			}`}
		>
			{eachProject.status === 'coming soon' && (
				<h2 className="m-auto text-[38px] font-medium">
					{`Coming soon...`}
				</h2>
			)}
			<div
				className={
					'md:absolute px-[20px] flex flex-col md:gap-[16px] gap-[8px] w-[300px] justify-center items-start bg-[#FFFFFF] text-[#000000] z-[-1] rounded-[32px] md:w-[335px] md:h-[369px]'
				}
			>
				<h3 className="md:text-[24px] text-[18px] text-[#000000]">
					{eachProject.title}
				</h3>
				<p className="md:text-[20px] text-[16px] font-normal text-[#000000]">
					{eachProject.about}
				</p>
			</div>
			<div
				className={
					'md:absolute h-[110px] md:right-0 bottom-0 z-[-2] rounded-r-[32px] bg-no-repeat bg-cover bg-center bg-fixed  md:min-w-[474px] md:h-[369px]'
				}
				style={{
					backgroundImage: `url(${eachProject.image})`,
				}}
			/>
		</div>
	);
};

export default EachProjectContainer;
