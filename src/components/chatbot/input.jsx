import { HiArrowRightCircle } from 'react-icons/hi2';

export default function Input({
	setInput,
	value,
	onChange,
	onClick,
	handleSubmit,
}) {
	const handleKeyboard = (event) => {
		if (event.keyCode === 13) {
			handleSubmit();

			setInput('');
		} else return;
	};

	return (
		<div
			className={
				'flex flex-row items-center justify-between pl-[24px] h-[60px] w-full bg-[#EBECF2] text-black rounded-r-[100px] rounded-l-[8px] mb-[72px]'
			}
		>
			<input
				className={
					'placeholder:text-left border-none  text-left outline-none bg-transparent text-black rounded-r-[100px] rounded-l-[8px] text-[16px] w-full'
				}
				placeholder="Ask me anything..."
				value={value}
				onChange={onChange}
				onKeyDown={(e) => handleKeyboard(e)}
			/>
			<button
				className={
					'border-none text-[16px] font-bold hover:cursor-pointer '
				}
				onClick={onClick}
			>
				<HiArrowRightCircle
					className="text-[#898989] hover:text-gray-600"
					size={56}
				/>
			</button>
		</div>
	);
}
