import Image from 'next/image';
import React from 'react';
import miladPic from '../components/assets/milad-photo.jpg';
import miladAIPic from '../components/assets/milad-AI-photo.png';
import { HiOutlineArrowCircleRight } from 'react-icons/hi';
import { HiMiniArrowRightCircle, HiMiniArrowDownCircle } from 'react-icons/hi2';
import { HiArrowSmDown } from 'react-icons/hi';
import { Link } from 'react-scroll';

const AboutMilad = () => {
	return (
		<div
			className="flex flex-col"
			id="aboutMilad"
		>
			<div className="flex flex-row">
				<div className="md:ml-[104px] md:mt-[32px]">
					<h2 className="md:text-[64px]">Milad Shirazi</h2>
					<h3 className="md:text-[32px]">
						I apply AI to solve problems!
					</h3>
					<br />
					<p className="md:text-[20px]">
						I am a veteran Data Scientist and Machine-Learning
						Engineer who is passionate about machine-learning
						applications and staying up-to-date with latest
						technology advancements. I have over 5 years of
						experience in design, development, deployment,
						maintaining, monitoring, and scaling data and AI
						pipelines as well as collaborating with various
						technical and non-technical teams and individuals.
					</p>
					<br />
					<p className="md:text-[20px]">
						Hands-on Experience in:
						<br />- Design, Development and Deployment of Machine
						Learning pipelines on cloud and on-premise platforms
						<br /> - Time Series data & forecasting using customized
						state-of-the-art models
						<br /> - Natural Learning Processing (NLP) and LLMs
						fine-tuning and prompt engineering
						<br /> - Creating dashboards for monitoring and
						providing reports and documentations
						<br /> - Analysis and prediction of signal-processing
						data
					</p>
					<br />
					<p className="md:text-[20px]">
						I am also familiar with Recommender systems
						(content-based, Item/user-based, collaborative
						filtering), Reinforcement Learning, Computer Vision and
						Image Processing, and Data Engineering and Software
						Engineering common practices
					</p>
				</div>
				<div className="flex flex-col justify-center items-center gap-[43px] mt-[62px] mr-[64px]">
					<div className="relative md:min-w-[411px] md:min-h-[448px] min-w-[342px] min-h-[372px] rounded-[10px] ">
						<Image
							src={miladPic}
							alt="Milad profile picture"
							fill
							className={'rounded-[32px]'}
							style={{
								objectFit: 'cover',
							}}
						/>
					</div>
					<div className="fixed z-50 bottom-0">
						<div className="absolute z-0 bottom-[22px] left-[18px] md:w-[373px] md:h-[202px] bg-[#FFFFFF]/[0.96] rounded-[32px] "></div>
						<div className="relative z-50 md:w-[411px] md:h-[208px] bg-[#FFFFFF]/[0.98] rounded-[32px]">
							<div className="flex flex-col gap-[8px] px-[24px] py-[16px] text-[#000000]">
								<div className="relative w-[56px] h-[56px] rounded-full">
									<Image
										src={miladAIPic}
										className="rounded-full"
										alt="Milad profile picture"
										fill
										style={{
											objectFit: 'cover',
										}}
									/>
								</div>
								<p className="font-normal text-[16px] text-[#000000]">
									I am Virtual Milad. I have been trained to
									replicate him. Ask me anything!
								</p>
								<button className="w-full flex flex-row items-center justify-between md:text-[20px] rounded-[32px] hover:bg-[#2D51CF]/[0.20]">
									<p className="text-[#000000] ">
										Click here to start!
									</p>
									<HiMiniArrowRightCircle className="text-[#2D51CF] w-[42px] h-[42px]" />
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Link to="projects">
				<HiArrowSmDown className="bg-[#898989] m-auto text-white rounded-full w-[42px] h-[42px]" />
			</Link>
		</div>
	);
};

export default AboutMilad;
