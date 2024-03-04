import React from 'react';
import { HiMiniArrowRightCircle } from 'react-icons/hi2';

const ChatBox = ({ setShowModal }) => {
	return (
		<div className="fixed z-50 bottom-0 ">
			<div className="absolute z-0 bottom-[22px] left-[18px] md:w-[373px] md:h-[202px] bg-[#FFFFFF]/[0.96] rounded-[32px] " />
			<div className="relative z-50 md:w-[411px] md:h-[208px] bg-[#FFFFFF]/[0.98] rounded-[32px]">
				<div className="flex flex-col gap-[8px] px-[24px] py-[16px] text-[#000000]">
					<div className="relativ bg-no-repeat bg-cover bg-center w-[56px] h-[56px] rounded-full bg-[url(/images/milad/milad-AI-photo.png)]" />
					<p className="font-normal text-[16px] text-[#000000]">
						{`I am Virtual Milad. I have been trained to replicate
						him. Ask me anything!`}
					</p>
					<button
						onClick={() => setShowModal(true)}
						className="w-full flex flex-row items-center justify-between md:text-[20px] rounded-[32px] hover:bg-[#2D51CF]/[0.20]"
					>
						<p className="text-[#000000] ">{`Click here to start!`}</p>
						<HiMiniArrowRightCircle className="text-[#2D51CF] w-[42px] h-[42px]" />
					</button>
				</div>
			</div>
		</div>
	);
};

export default ChatBox;
