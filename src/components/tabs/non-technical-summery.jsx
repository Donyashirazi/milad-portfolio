import Image from 'next/image';
import React from 'react';

const NonTechnicalSummery = ({ project }) => {
	const projectVariants = project[0].tabs?.nonTechnicalSummery;
	return (
		<div className="relative justify-center gap-[64px] mx-[64px] text-[#FFFFFF] text-[20px] font-medium whitespace-pre-wrap [&>*]:whitespace-pre-wrap">
			<h2 className="text-[32px] font-medium text-left mb-[41px]">{`project ${project[0]?.id}`}</h2>
			<p className="text-[20px] font-medium">
				{projectVariants?.content}
			</p>
			<div className="flex flex-col gap-[24px] ">
				<p className="text-bold text-[24px] mt-[64px]">
					{projectVariants?.content1?.title}
				</p>
				<p className="">{projectVariants?.content1?.description}</p>

				<div className="relative max-w-[1200px] left-1/2 transform -translate-x-1/2  ">
					<Image
						src={projectVariants?.content1?.image}
						alt="test"
						width={0}
						height={0}
						sizes="100vw"
						style={{ width: '100%', height: 'auto' }}
					/>{' '}
					<p className="text-center text-[16px] mt-[16px]">
						{projectVariants?.content1?.imageDescription}test time
					</p>
				</div>

				<p className="">{projectVariants?.content1?.lastContent}</p>
			</div>
			<div className="flex flex-row gap-[39px] w-full my-[64px] ">
				<div className="h-[369px] w-1/3 bg-blue-500 rounded-[32px]"></div>
				<div className="h-[369px] w-2/3 bg-green-500  rounded-[32px]"></div>
			</div>
			<p className="text-[20px] font-medium">
				{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}
			</p>
			<div className="flex flex-row gap-[39px] w-full my-[64px]">
				<div className="h-[369px] w-2/3 bg-blue-500 rounded-[32px]"></div>
				<div className="h-[369px] w-1/3 bg-green-500 rounded-[32px]"></div>
			</div>
		</div>
	);
};

export default NonTechnicalSummery;
