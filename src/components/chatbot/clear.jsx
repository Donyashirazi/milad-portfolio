export default function Clear({ onClick }) {
	return (
		<button
			className={
				'w-1/5 p-[10px] border-none rounded-[10px] text-[16px] font-bold hover:cursor-pointer hover:bg-gray-300 mr-0'
			}
			onClick={onClick}
		>
			{`Clear`}
		</button>
	);
}
