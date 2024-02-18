import AllProjects from '@/components/data';
import Header from '@/components/header';
import Define from '@/components/tabs/define';
import Empathize from '@/components/tabs/empathize';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs';
import React, { useEffect, useState } from 'react';

export const getStaticPaths = () => {
	const paths = AllProjects.map((eachProject) => ({
		params: { id: eachProject?.id.toString() },
	}));
	return {
		paths,
		fallback: false,
	};
};
export const getStaticProps = (context) => {
	const id = context.params.id;
	const project = AllProjects.filter((project) => {
		return project.id === id;
	});
	return {
		props: { project },
	};
};

const Projects = ({ project }) => {
	const navbars = ['Empathize', 'Define', 'Design', 'Deliver', 'Impact'];

	return (
		<div>
			<div
				className={`h-[662px] w-full bg-no-repeat bg-cover bg-center bg-fixed rounded-b-[100px]`}
				style={{
					backgroundImage: `url(${project[0]?.image})`,
				}}
			>
				<Header />
			</div>
			<Tabs
				defaultValue="Empathize"
				className="mx-[64px] "
			>
				<TabsList className="">
					<div className="flex flex-row items-center justify-around text-[32px] rounded-[100px] bg-[#1648F7]/[0.22] mt-[48px] mb-[72px] mx-[64px]">
						{navbars.map((eachTab) => (
							<TabsTrigger
								value={eachTab}
								className="px-[42px] py-[20px] my-[8px] focus:bg-[#2D51CF] rounded-[100px]"
							>
								{eachTab}
							</TabsTrigger>
						))}
					</div>
					<TabsContent value="Empathize">
						<Empathize project={project} />
					</TabsContent>
					<TabsContent value="Define">
						<Define project={project} />
					</TabsContent>
				</TabsList>
			</Tabs>
		</div>
	);
};

export default Projects;
