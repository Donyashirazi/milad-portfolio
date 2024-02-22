import Image from 'next/image';
import React from 'react';

const Results = ({ project }) => {
	const projectVariants = project[0].tabs?.result;
	return (
		<div className="relative justify-center gap-[64px] mx-[64px] text-[#FFFFFF] text-[20px] font-medium whitespace-pre-wrap [&>*]:whitespace-pre-wrap">
			<h2 className="text-[32px] font-medium text-left mb-[41px]">{`project ${project[0]?.id}`}</h2>

			<div
				id="eachContent"
				className="flex flex-col gap-[24px] "
			>
				<p className="text-bold text-[24px] mt-[64px]">
					{projectVariants?.content1r?.title}
				</p>
				<p className="">{projectVariants?.content1r?.description}</p>

				<div className="relative max-w-[1200px] left-1/2 transform -translate-x-1/2  ">
					{projectVariants?.content1r?.image && (
						<Image
							src={projectVariants?.content1r?.image}
							alt="test"
							width={0}
							height={0}
							sizes="100vw"
							style={{ width: '100%', height: 'auto' }}
						/>
					)}

					<p className="text-center text-[16px] mt-[16px]">
						{projectVariants?.content1r?.imageDescription}
					</p>
				</div>

				<p className="">{projectVariants?.content1r?.lastContent}</p>
			</div>
			<div className="flex flex-col gap-[24px] ">
				<p className="text-bold text-[24px] mt-[64px]">
					{projectVariants?.content2r?.title}
				</p>
				<p className="">{projectVariants?.content2r?.description}</p>

				<div className="relative max-w-[1200px] left-1/2 transform -translate-x-1/2  ">
					{projectVariants?.content2r?.image && (
						<Image
							src={projectVariants?.content2r?.image}
							alt="test"
							width={0}
							height={0}
							sizes="100vw"
							style={{ width: '100%', height: 'auto' }}
						/>
					)}

					<p className="text-center text-[16px] mt-[16px]">
						{projectVariants?.content2r?.imageDescription}
					</p>
				</div>

				<p className="">{projectVariants?.content2r?.lastContent}</p>
			</div>
			<div className="flex flex-col gap-[24px] ">
				<p className="text-bold text-[24px] mt-[64px]">
					{projectVariants?.content2r?.title}
				</p>
				<p className="">{projectVariants?.content2r?.description}</p>

				<div className="relative max-w-[1200px] left-1/2 transform -translate-x-1/2  ">
					{projectVariants?.content2r?.image && (
						<Image
							src={projectVariants?.content2r?.image}
							alt="test"
							width={0}
							height={0}
							sizes="100vw"
							style={{ width: '100%', height: 'auto' }}
						/>
					)}

					<p className="text-center text-[16px] mt-[16px]">
						{projectVariants?.content2r?.imageDescription}
					</p>
				</div>

				<p className="">{projectVariants?.content2r?.lastContent}</p>
			</div>
			<div className="flex flex-col gap-[24px] ">
				<p className="text-bold text-[24px] mt-[64px]">
					{projectVariants?.content2r?.title}
				</p>
				<p className="">{projectVariants?.content2r?.description}</p>

				<div className="relative max-w-[1200px] left-1/2 transform -translate-x-1/2  ">
					{projectVariants?.content2r?.image && (
						<Image
							src={projectVariants?.content2r?.image}
							alt="test"
							width={0}
							height={0}
							sizes="100vw"
							style={{ width: '100%', height: 'auto' }}
						/>
					)}

					<p className="text-center text-[16px] mt-[16px]">
						{projectVariants?.content2r?.imageDescription}
					</p>
				</div>

				<p className="">{projectVariants?.content2r?.lastContent}</p>
			</div>
			<div className="flex flex-col gap-[24px] ">
				<p className="text-bold text-[24px] mt-[64px]">
					{projectVariants?.content3r?.title}
				</p>
				<p className="">{projectVariants?.content3r?.description}</p>

				<div className="relative max-w-[1200px] left-1/2 transform -translate-x-1/2  ">
					{projectVariants?.content3r?.image && (
						<Image
							src={projectVariants?.content3r?.image}
							alt="test"
							width={0}
							height={0}
							sizes="100vw"
							style={{ width: '100%', height: 'auto' }}
						/>
					)}

					<p className="text-center text-[16px] mt-[16px]">
						{projectVariants?.content3r?.imageDescription}
					</p>
				</div>

				<p className="">{projectVariants?.content3r?.lastContent}</p>
			</div>
			{projectVariants?.content4r && (
				<div className="flex flex-col gap-[24px] ">
					<p className="text-bold text-[24px] mt-[64px]">
						{projectVariants?.content4r?.title}
					</p>
					<p className="">
						{projectVariants?.content4r?.description}
					</p>

					<div className="relative max-w-[1200px] left-1/2 transform -translate-x-1/2  ">
						{projectVariants?.content4r?.image && (
							<Image
								src={projectVariants?.content4r?.image}
								alt="test"
								width={0}
								height={0}
								sizes="100vw"
								style={{ width: '100%', height: 'auto' }}
							/>
						)}

						<p className="text-center text-[16px] mt-[16px]">
							{projectVariants?.content4r?.imageDescription}
						</p>
					</div>

					<p className="">
						{projectVariants?.content4r?.lastContent}
					</p>
				</div>
			)}
			{projectVariants?.content5r && (
				<div className="flex flex-col gap-[24px] ">
					<p className="text-bold text-[24px] mt-[64px]">
						{projectVariants?.content5r?.title}
					</p>
					<p className="">
						{projectVariants?.content5r?.description}
					</p>

					<div className="relative max-w-[1200px] left-1/2 transform -translate-x-1/2  ">
						{projectVariants?.content5r?.image && (
							<Image
								src={projectVariants?.content5r?.image}
								alt="test"
								width={0}
								height={0}
								sizes="100vw"
								style={{ width: '100%', height: 'auto' }}
							/>
						)}

						<p className="text-center text-[16px] mt-[16px]">
							{projectVariants?.content5r?.imageDescription}
						</p>
					</div>

					<p className="">
						{projectVariants?.content5r?.lastContent}
					</p>
				</div>
			)}

			{projectVariants?.content6r && (
				<div className="flex flex-col gap-[24px] ">
					<p className="text-bold text-[24px] mt-[64px]">
						{projectVariants?.content6r?.title}
					</p>
					<p className="">
						{projectVariants?.content6r?.description}
					</p>

					<div className="relative max-w-[1200px] left-1/2 transform -translate-x-1/2  ">
						{projectVariants?.content6r?.image && (
							<Image
								src={projectVariants?.content6r?.image}
								alt="test"
								width={0}
								height={0}
								sizes="100vw"
								style={{ width: '100%', height: 'auto' }}
							/>
						)}

						<p className="text-center text-[16px] mt-[16px]">
							{projectVariants?.content6r?.imageDescription}
						</p>
					</div>

					<p className="">
						{projectVariants?.content6r?.lastContent}
					</p>
				</div>
			)}
			{projectVariants?.content7r && (
				<div className="flex flex-col gap-[24px] ">
					<p className="text-bold text-[24px] mt-[64px]">
						{projectVariants?.content7r?.title}
					</p>
					<p className="">
						{projectVariants?.content7r?.description}
					</p>

					<div className="relative max-w-[1200px] left-1/2 transform -translate-x-1/2  ">
						{projectVariants?.content7r?.image && (
							<Image
								src={projectVariants?.content7r?.image}
								alt="test"
								width={0}
								height={0}
								sizes="100vw"
								style={{ width: '100%', height: 'auto' }}
							/>
						)}

						<p className="text-center text-[16px] mt-[16px]">
							{projectVariants?.content7r?.imageDescription}
						</p>
					</div>

					<p className="">
						{projectVariants?.content7r?.lastContent}
					</p>
				</div>
			)}
			{projectVariants?.content8r && (
				<div className="flex flex-col gap-[24px] ">
					<p className="text-bold text-[24px] mt-[64px]">
						{projectVariants?.content8r?.title}
					</p>
					<p className="">
						{projectVariants?.content8r?.description}
					</p>

					<div className="relative max-w-[1200px] left-1/2 transform -translate-x-1/2  ">
						{projectVariants?.content8r?.image && (
							<Image
								src={projectVariants?.content8r?.image}
								alt="test"
								width={0}
								height={0}
								sizes="100vw"
								style={{ width: '100%', height: 'auto' }}
							/>
						)}

						<p className="text-center text-[16px] mt-[16px]">
							{projectVariants?.content8r?.imageDescription}
						</p>
					</div>

					<p className="">
						{projectVariants?.content8r?.lastContent}
					</p>
				</div>
			)}
		</div>
	);
};

export default Results;
