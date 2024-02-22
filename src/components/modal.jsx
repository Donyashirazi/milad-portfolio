'use client';

import React from 'react';
import ChatBot from './chatbot/chatBot';

const ChatBotModal = ({ setShowModal }) => {
	return (
		<>
			<div className="fixed inset-0 bg-black opacity-20 z-50"></div>
			<ChatBot setShowModal={setShowModal} />
		</>
	);
};

export default ChatBotModal;
