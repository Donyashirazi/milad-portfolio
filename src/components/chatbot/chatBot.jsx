import { useEffect, useState } from 'react';
import Input from './input';
import History from './history';
import Clear from './clear';
import Message from './message';
import axios from 'axios';
import { headers } from '../../../next.config';
import { HiOutlineX } from 'react-icons/hi';
import { InitialPrompt } from './promptData';

const ChatBot = ({ setShowModal }) => {
	const [input, setInput] = useState('');
	const [messages, setMessages] = useState(InitialPrompt);
	const [history, setHistory] = useState([]);

	const handleSubmit = async () => {
		const prompt = {
			role: 'user',
			content: input,
		};

		console.log('test time');
		setMessages([...messages, prompt]);

		await fetch('https://api.openai.com/v1/chat/completions', {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				model: 'gpt-4-0125-preview',
				messages: [...messages, prompt],
			}),
			max_tokens: 150,
		})
			.then((data) => data.json())
			.then((data) => {
				console.log('data', data);
				const res = data.choices[0]?.message?.content;
				setMessages((messages) => [
					...messages,
					{
						role: 'assistant',
						content: res,
					},
				]);
				setHistory((history) => [
					...history,
					{ role: 'user', content: input },
					{ role: 'assistant', content: res },
				]);
				setInput('');
			});
		console.log('history', history);
		console.log('messages', messages);
	};

	// try {
	// 	const response = axios.post(
	// 		'https://api.openai.com/v1/chat/completions',
	// 		{
	// 			headers: {
	// 				'content-type': 'application/json',
	// 				Authorization:
	// 					'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',
	// 			},
	// 			body: JSON.stringify({
	// 				model: 'gpt-4-0125-preview',
	// 				messages: [...messages, prompt],
	// 			}),
	// 			max_tokens: 15,
	// 		}
	// 	);
	// } catch (error) {
	// 	console.error('Error sending message:', error);
	// }

	const clear = () => {
		setMessages([]);
		setHistory([]);
	};
	// useEffect(() => {
	// 	const listener = (event) => {
	// 		if (event.code === 'Enter' || event.code === 'NumpadEnter') {
	// 			event.preventDefault();
	// 			handleSubmit();
	// 		}
	// 	};
	// 	document.addEventListener('keydown', listener);
	// 	return () => {
	// 		document.removeEventListener('keydown', listener);
	// 	};
	// }, []);

	return (
		<div className="fixed top-0 right-10 gap-[20px] max-w-[1000px] my-0 mx-auto min-h-[100vh] p-[20px] bg-[#FFF]  z-50 rounded-l-[32px] min-w-[925px] !opacity-100">
			<HiOutlineX
				className="text-[#616475] cursor-pointer"
				size={40}
				onClick={() => setShowModal(false)}
			/>
			<div className="text-black mx-[54px] ">
				<div className="h-[80vh] overflow-y-auto mb-[20px]">
					{messages
						.filter((data) => data?.role !== 'system' ?? data)
						.map((el, i) => {
							return (
								<Message
									key={i}
									role={el.role}
									content={el.content}
								/>
							);
						})}
				</div>
				<Input
					handleSubmit={handleSubmit}
					value={input}
					onChange={(e) => setInput(e.target.value)}
					onClick={input ? handleSubmit : undefined}
				/>
				{/* <Clear
					onClick={clear}
					className={'bg-slate-600'}
				/> */}
			</div>
			{/* <div className="Column">
				<div className="Content bg-black">
					{history.map((el, i) => {
						return (
							<History
								key={i}
								question={el.question}
								onClick={() =>
									setMessages([
										{
											role: 'user',
											content: history[i].question,
										},
										{
											role: 'assistant',
											content: history[i].answer,
										},
									])
								}
							/>
						);
					})}
				</div>
			</div> */}
		</div>
	);
};
export default ChatBot;
