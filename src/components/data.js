const AllProjects = [
	{
		id: '1',
		image: '/images/Rigid.jpg',
		title: 'ML Development at RIGID ROBOTICS',
		about: 'Detecting complex behavioral states of the excavator machines by training customized Machine-Learning models on Signal datasets',
		tabs: {
			nonTechnicalSummery: {
				beginning:
					'At RIGID ROBOTICS, we provided software and AI services as products. There are big excavator machines that are very costly and require precise monitoring in various stages for multiple reasons such as answering the following questions:\n-Were enough explosive materials used beforehand on site?\n- Are there enough trucks available to minimize the waiting time of these machines?\n-Do operators know what they are doing?\n- Are business KPIs such as productive time, mechanical availability and asset utilization being met? -Do machines get damaged due to lack of skills, difficult terrain, or insufficient explosives?\nIn order to address these questions, few separate Machine-Learning pipelines were developed.',

				content1: {
					title: 'Digging-Condition-Index (DCI) detector:',
					description:
						'The DCI pipeline assesses the hardness or softness of each dig. It utilizes the HP-State model to extract and process vibration data associated with each dig. This process generates a score that indicates the degree of hardness for each dig within a specific mine.\nThe calibration of this pipeline is done locally, tailoring it to the specific ore characteristics of the mine. We then cross-reference this output with the location data(GPS) and get the full picture:',
					image: '/images/project1/milad.png',
					imageDescription: '',
					lastContent:
						'Which helps analyze the shovel operation and the amount of explosive used.\nNote: Two separate models were developed for this, one of which was normalized based on the local calibration(DCI), while the other was not localized(DI).',
				},
				content2: {
					title: 'Digging-Condition-Index (DCI) detector:',
					description:
						'The DCI pipeline assesses the hardness or softness of each dig. It utilizes the HP-State model to extract and process vibration data associated with each dig. This process generates a score that indicates the degree of hardness for each dig within a specific mine.\nThe calibration of this pipeline is done locally, tailoring it to the specific ore characteristics of the mine. We then cross-reference this output with the location data(GPS) and get the full picture:',
					image: '/images/project1/milad.png',
					imageDescription: '',
					lastContent:
						'Which helps analyze the shovel operation and the amount of explosive used.\nNote: Two separate models were developed for this, one of which was normalized based on the local calibration(DCI), while the other was not localized(DI).',
				},
			},

			technicalDive: '',
			result: 'testttttt',
		},
	},
	{
		id: '2',
		image: '/images/AI.jpg',
		title: 'Design, Development, Deployment, and monitoring entire ML pipeline at RIGID ROBOTICS',
		about: 'Python Integration and Real-Time prediction of the developed AI models on Azure cloud services',
		description: '',
		tabs: {
			summary: '',
			result: 'testttttt',
		},
	},
	{
		id: '3',
		image: '/images/ATM.jpg',
		title: 'ATM Allocation',
		about: 'Application of Machine Learning in recommending the most optimized locations across the country',
		description: '',
		tabs: {
			summary: '',
			result: 'testttttt',
		},
	},
	{
		id: '4',
		image: '/images/Futsal.jpg',
		title: 'Futsal score prediction',
		about: 'Predicting the local futsal matches I played in, as a side fun project',
		description: '',
		tabs: {
			summary: '',
			result: 'testttttt',
		},
	},
];
export default AllProjects;
