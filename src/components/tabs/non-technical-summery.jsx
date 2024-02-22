import Image from 'next/image';
import React from 'react';

const NonTechnicalSummery = ({ project }) => {
	const projectVariants = project[0].tabs?.nonTechnicalSummery;

	return (
		<div className="relative justify-center gap-[64px] mx-[64px] mb-[64px] text-[#FFFFFF] text-[20px] font-medium whitespace-pre-wrap [&>*]:whitespace-pre-wrap">
			<h2 className="text-[32px] font-medium text-left mb-[41px]">{`project ${project[0]?.id}`}</h2>

			<div
				id="eachContent"
				className="flex flex-col gap-[24px] "
			>
				<p className="text-bold text-[24px] mt-[64px]">
					{projectVariants?.content1?.title}
				</p>
				<p className="">{projectVariants?.content1?.description}</p>

				<div className="relative max-w-[1200px] left-1/2 transform -translate-x-1/2  ">
					{projectVariants?.content1?.image && (
						<Image
							src={projectVariants?.content1?.image}
							alt="test"
							width={0}
							height={0}
							sizes="100vw"
							style={{ width: '100%', height: 'auto' }}
						/>
					)}

					<p className="text-center text-[16px] mt-[16px]">
						{projectVariants?.content1?.imageDescription}
					</p>
				</div>

				<p className="">{projectVariants?.content1?.lastContent}</p>
			</div>
			<div className="flex flex-col gap-[24px] ">
				<p className="text-bold text-[24px] mt-[64px]">
					{projectVariants?.content2?.title}
				</p>
				<p className="">{projectVariants?.content2?.description}</p>

				<div className="relative max-w-[1200px] left-1/2 transform -translate-x-1/2  ">
					{projectVariants?.content2?.image && (
						<Image
							src={projectVariants?.content2?.image}
							alt="test"
							width={0}
							height={0}
							sizes="100vw"
							style={{ width: '100%', height: 'auto' }}
						/>
					)}

					<p className="text-center text-[16px] mt-[16px]">
						{projectVariants?.content2?.imageDescription}
					</p>
				</div>

				<p className="">{projectVariants?.content2?.lastContent}</p>
			</div>
			<div className="flex flex-col gap-[24px] ">
				<p className="text-bold text-[24px] mt-[64px]">
					{projectVariants?.content3?.title}
				</p>
				<p className="">{projectVariants?.content3?.description}</p>

				<div className="relative max-w-[1200px] left-1/2 transform -translate-x-1/2  ">
					{projectVariants?.content3?.image && (
						<Image
							src={projectVariants?.content3?.image}
							alt="test"
							width={0}
							height={0}
							sizes="100vw"
							style={{ width: '100%', height: 'auto' }}
						/>
					)}

					<p className="text-center text-[16px] mt-[16px]">
						{projectVariants?.content3?.imageDescription}
					</p>
				</div>

				<p className="">{projectVariants?.content3?.lastContent}</p>
			</div>
			<div className="flex flex-col gap-[24px] ">
				<p className="text-bold text-[24px] mt-[64px]">
					{projectVariants?.content4?.title}
				</p>
				<p className="">{projectVariants?.content4?.description}</p>

				<div className="relative max-w-[1200px] left-1/2 transform -translate-x-1/2  ">
					{projectVariants?.content4?.image && (
						<Image
							src={projectVariants?.content4?.image}
							alt="test"
							width={0}
							height={0}
							sizes="100vw"
							style={{ width: '100%', height: 'auto' }}
						/>
					)}

					<p className="text-center text-[16px] mt-[16px]">
						{projectVariants?.content4?.imageDescription}
					</p>
				</div>

				<p className="">{projectVariants?.content4?.lastContent}</p>
			</div>
			<div className="flex flex-col gap-[24px] ">
				<p className="text-bold text-[24px] mt-[64px]">
					{projectVariants?.content5?.title}
				</p>
				<p className="">{projectVariants?.content5?.description}</p>

				<div className="relative max-w-[1200px] left-1/2 transform -translate-x-1/2  ">
					{projectVariants?.content5?.image && (
						<Image
							src={projectVariants?.content5?.image}
							alt="test"
							width={0}
							height={0}
							sizes="100vw"
							style={{ width: '100%', height: 'auto' }}
						/>
					)}

					<p className="text-center text-[16px] mt-[16px]">
						{projectVariants?.content5?.imageDescription}
					</p>
				</div>

				<p className="">{projectVariants?.content5?.lastContent}</p>
			</div>

			{projectVariants?.content6 && (
				<div className="flex flex-col gap-[24px] ">
					<p className="text-bold text-[24px] mt-[64px]">
						{projectVariants?.content6?.title}
					</p>
					<p className="">{projectVariants?.content6?.description}</p>

					<div className="relative max-w-[1200px] left-1/2 transform -translate-x-1/2  ">
						{projectVariants?.content6?.image && (
							<Image
								src={projectVariants?.content6?.image}
								alt="test"
								width={0}
								height={0}
								sizes="100vw"
								style={{ width: '100%', height: 'auto' }}
							/>
						)}

						<p className="text-center text-[16px] mt-[16px]">
							{projectVariants?.content6?.imageDescription}
						</p>
					</div>

					<p className="">{projectVariants?.content6?.lastContent}</p>
				</div>
			)}
			{projectVariants?.content7 && (
				<div className="flex flex-col gap-[24px] ">
					<p className="text-bold text-[24px] mt-[64px]">
						{projectVariants?.content7?.title}
					</p>
					<p className="">{projectVariants?.content7?.description}</p>

					<div className="relative max-w-[1200px] left-1/2 transform -translate-x-1/2  ">
						{projectVariants?.content7?.image && (
							<Image
								src={projectVariants?.content7?.image}
								alt="test"
								width={0}
								height={0}
								sizes="100vw"
								style={{ width: '100%', height: 'auto' }}
							/>
						)}

						<p className="text-center text-[16px] mt-[16px]">
							{projectVariants?.content7?.imageDescription}
						</p>
					</div>

					<p className="">{projectVariants?.content7?.lastContent}</p>
				</div>
			)}
			{projectVariants?.content8 && (
				<div className="flex flex-col gap-[24px] ">
					<p className="text-bold text-[24px] mt-[64px]">
						{projectVariants?.content8?.title}
					</p>
					<p className="">{projectVariants?.content8?.description}</p>

					<div className="relative max-w-[1200px] left-1/2 transform -translate-x-1/2  ">
						{projectVariants?.content8?.image && (
							<Image
								src={projectVariants?.content8?.image}
								alt="test"
								width={0}
								height={0}
								sizes="100vw"
								style={{ width: '100%', height: 'auto' }}
							/>
						)}

						<p className="text-center text-[16px] mt-[16px]">
							{projectVariants?.content8?.imageDescription}
						</p>
					</div>

					<p className="">{projectVariants?.content8?.lastContent}</p>
				</div>
			)}
			{projectVariants?.content9 && (
				<div className="flex flex-col gap-[24px] ">
					<p className="text-bold text-[24px] mt-[64px]">
						{projectVariants?.content9?.title}
					</p>
					<p className="">{projectVariants?.content9?.description}</p>

					<div className="relative max-w-[1200px] left-1/2 transform -translate-x-1/2  ">
						{projectVariants?.content9?.image && (
							<Image
								src={projectVariants?.content9?.image}
								alt="test"
								width={0}
								height={0}
								sizes="100vw"
								style={{ width: '100%', height: 'auto' }}
							/>
						)}

						<p className="text-center text-[16px] mt-[16px]">
							{projectVariants?.content9?.imageDescription}
						</p>
					</div>

					<p className="">{projectVariants?.content9?.lastContent}</p>
				</div>
			)}
			{projectVariants?.content10 && (
				<div className="flex flex-col gap-[24px] ">
					<p className="text-bold text-[24px] mt-[64px]">
						{projectVariants?.content10?.title}
					</p>
					<p className="">
						{projectVariants?.content10?.description}
					</p>

					<div className="relative max-w-[1200px] left-1/2 transform -translate-x-1/2  ">
						{projectVariants?.content10?.image && (
							<Image
								src={projectVariants?.content10?.image}
								alt="test"
								width={0}
								height={0}
								sizes="100vw"
								style={{ width: '100%', height: 'auto' }}
							/>
						)}

						<p className="text-center text-[16px] mt-[16px]">
							{projectVariants?.content10?.imageDescription}
						</p>
					</div>

					<p className="">
						{projectVariants?.content10?.lastContent}
					</p>
				</div>
			)}
			{projectVariants?.content11 && (
				<div className="flex flex-col gap-[24px] ">
					<p className="text-bold text-[24px] mt-[64px]">
						{projectVariants?.content11?.title}
					</p>
					<p className="">
						{projectVariants?.content11?.description}
					</p>

					<div className="relative max-w-[1200px] left-1/2 transform -translate-x-1/2  ">
						{projectVariants?.content11?.image && (
							<Image
								src={projectVariants?.content11?.image}
								alt="test"
								width={0}
								height={0}
								sizes="100vw"
								style={{ width: '100%', height: 'auto' }}
							/>
						)}

						<p className="text-center text-[16px] mt-[16px]">
							{projectVariants?.content11?.imageDescription}
						</p>
					</div>

					<p className="">
						{projectVariants?.content11?.lastContent}
					</p>
				</div>
			)}
			{projectVariants?.content12 && (
				<div className="flex flex-col gap-[24px] ">
					<p className="text-bold text-[24px] mt-[64px]">
						{projectVariants?.content12?.title}
					</p>
					<p className="">
						{projectVariants?.content12?.description}
					</p>

					<div className="relative max-w-[1200px] left-1/2 transform -translate-x-1/2  ">
						{projectVariants?.content12?.image && (
							<Image
								src={projectVariants?.content12?.image}
								alt="test"
								width={0}
								height={0}
								sizes="100vw"
								style={{ width: '100%', height: 'auto' }}
							/>
						)}

						<p className="text-center text-[16px] mt-[16px]">
							{projectVariants?.content12?.imageDescription}
						</p>
					</div>

					<p className="">
						{projectVariants?.content12?.lastContent}
					</p>
				</div>
			)}
			{projectVariants?.content13 && (
				<div className="flex flex-col gap-[24px] ">
					<p className="text-bold text-[24px] mt-[64px]">
						{projectVariants?.content13?.title}
					</p>
					<p className="">
						{projectVariants?.content13?.description}
					</p>

					<div className="relative max-w-[1200px] left-1/2 transform -translate-x-1/2  ">
						{projectVariants?.content13?.image && (
							<Image
								src={projectVariants?.content13?.image}
								alt="test"
								width={0}
								height={0}
								sizes="100vw"
								style={{ width: '100%', height: 'auto' }}
							/>
						)}

						<p className="text-center text-[16px] mt-[16px]">
							{projectVariants?.content13?.imageDescription}
						</p>
					</div>

					<p className="">
						{projectVariants?.content13?.lastContent}
					</p>
				</div>
			)}
		</div>
	);
};

export default NonTechnicalSummery;
