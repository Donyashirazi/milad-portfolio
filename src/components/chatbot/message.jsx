import Image from 'next/image';
import bot from '../../components/assets/milad-AI-photo.png';
import user from '../../components/assets/message-user.svg';

export default function Message({ role, content }) {
	return (
		<div
			className={
				'mb-[20px] min-h-[60px] grid grid-cols-[90px_auto] text-[20px]'
			}
		>
			<div>
				<Image
					src={role === 'assistant' ? bot : user}
					alt="profile avatar"
					width={80}
					height={80}
				/>
			</div>
			<div className="bg-[#323232] px-[28px] py-[22px] my-auto rounded-r-[32px] rounded-bl-[32px] text-white ">
				<p>{content}</p>
			</div>
		</div>
	);
}
