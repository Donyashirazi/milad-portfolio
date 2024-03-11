import AllProjects from '@/components/data';
import Footer from '@/components/footer';
import Header from '@/components/header';
import NonTechnicalSummery from '@/components/tabs/non-technical-summery';
import Results from '@/components/tabs/results';
import TechnicalDive from '@/components/tabs/technical-dive';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs';
import React from 'react';

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
	const navbars = ['Non-Technical summary', 'Technical dive', 'Results'];
	console.log('projetc', project);

	return (
		<div className="max-w-[2200px] m-auto">
			<div
				className={`h-[662px] w-full bg-no-repeat bg-cover bg-center bg-fixed rounded-b-[100px]`}
				style={{
					backgroundImage: `url(${project[0]?.image})`,
				}}
			>
				<Header
					headerTransparent={true}
					headerLinks={false}
				/>
			</div>
			<Tabs
				defaultValue={'Non-Technical summary'}
				className="mx-0 md:mx-[64px]"
			>
				<TabsList className="">
					<div className="flex flex-row items-center justify-around text-[16px] md:text-[32px] rounded-[100px] bg-[#1648F7]/[0.22] mt-[48px] mb-[72px] mx-[10px] md:mx-[64px]">
						{navbars.map((eachTab, index) => (
							<TabsTrigger
								key={index}
								value={eachTab}
								className="px-[10px] md:px-[42px] py-[20px] my-[8px] focus:bg-[#2D51CF] aria-selected:bg-[#2D51CF] rounded-[100px]"
							>
								{eachTab}
							</TabsTrigger>
						))}
					</div>
					<TabsContent value="Non-Technical summary">
						<NonTechnicalSummery project={project} />
					</TabsContent>
					<TabsContent value="Technical dive">
						<TechnicalDive project={project} />
					</TabsContent>
					<TabsContent value="Results">
						<Results project={project} />
					</TabsContent>
				</TabsList>
			</Tabs>
		</div>
	);
};

export default Projects;
