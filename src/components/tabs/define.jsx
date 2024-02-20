import React from 'react';

const Define = ({ project }) => {
	console.log('test', project[0]?.tabs?.result);
	return (
		<div className="flex flex-col mx-[64px] text-[#FFFFFF] ">
			<div className="bg-yellow-400">{project[0]?.tabs?.result}</div>

			<h2 className="text-[32px] font-medium text-left mb-[41px]">{`project ${project[0]?.id}`}</h2>
			<p className="text-[20px] font-medium">
				{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}
			</p>
		</div>
	);
};

export default Define;
