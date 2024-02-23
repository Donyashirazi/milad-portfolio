import Image from 'next/image';
import React from 'react';

const EachProjectContainer = ({ eachProject }) => {
	return (
		<div
			className={`relative flex flex-row min-w-[342px] h-[201px] md:flex-row md:min-w-[784px] md:h-[369px] md:rounded-[32px] mr-[100px] ${
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
					'absolute px-[20px] flex flex-col gap-[16px] justify-center items-start bg-[#FFFFFF] text-[#000000] z-[-1] rounded-[32px] md:w-[335px] h-[94px] md:h-[369px]'
				}
			>
				<h3 className="text-[24px] text-[#000000]">
					{eachProject.title}
				</h3>
				<p className="text-[20px] font-normal text-[#000000]">
					{eachProject.about}
				</p>
			</div>
			<div
				className={
					'absolute right-0 z-[-2] rounded-[32px] h-[107px] md:min-w-[474px] md:h-[369px]'
				}
			>
				<Image
					className={'rounded-r-[32px]'}
					src={eachProject.image}
					alt="Milad profile picture"
					fill
					style={{
						objectFit: 'cover',
					}}
				/>
			</div>
		</div>
	);
};

export default EachProjectContainer;
