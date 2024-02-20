import React, { useEffect, useState } from 'react';
import { HiArrowSmDown } from 'react-icons/hi';
import { Link } from 'react-scroll';
import ChatBox from './chatbox';
import ChatBotModal from './modal';

const AboutMilad = () => {
	const [showModal, setShowModal] = useState(true);
	useEffect(() => console.log('test', showModal), [showModal]);
	return (
		<div
			className="flex flex-col"
			id="aboutMilad"
		>
			<div className="flex flex-row">
				<div className="md:ml-[104px] md:mt-[32px] mr-[40px]">
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
					<div
						className={`relative md:min-w-[411px] bg-[url(/images/milad/milad-full.jpg)] md:min-h-[448px] min-w-[342px] min-h-[372px] rounded-[10px] hover:bg-[url(/images/milad/milad-AI-full.png)] bg-no-repeat bg-cover bg-center`}
					/>
					<ChatBox
						showModal={showModal}
						setShowModal={setShowModal}
					/>
				</div>
				{showModal && <ChatBotModal setShowModal={setShowModal} />}
			</div>
			<Link to="projects">
				<HiArrowSmDown className="bg-[#898989] m-auto text-white rounded-full w-[42px] h-[42px]" />
			</Link>
		</div>
	);
};

export default AboutMilad;
