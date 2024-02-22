export default function History({ question, onClick }) {
	return (
		<div
			className={
				'p-[20px] mb-[20px] rounded-[10px] bg-[#1b1b1d] hover:cursor-pointer hover:bg-[#323236]'
			}
			onClick={onClick}
		>
			<p>{question?.substring(0, 15)}...</p>
		</div>
	);
}
