const AllProjects = [
	{
		id: '1',
		image: '/images/Rigid.jpg',
		title: 'ML Development at RIGID ROBOTICS',
		about: 'Detecting complex behavioral states of the excavator machines by training customized Machine-Learning models on Signal datasets',
		tabs: {
			nonTechnicalSummery: {
				content1: {
					title: 'Project Overview',
					description:
						'At RIGID ROBOTICS, we provided software and AI services as products. Clients own big excavator machines that are very costly and require precise monitoring in various stages for multiple reasons such as answering the following questions:\n\
						- Were enough explosive materials used beforehand on site?\n\
						- Are there enough trucks available to minimize the waiting time of these machines?\n\
						- Do operators know what they are doing?\n\
						- Are business KPIs such as productive time, mechanical availability and asset utilization being met?\n\
						- Do machines get damaged due to lack of skills, difficult terrain, or insufficient explosives?\n\
						In order to address these questions, few separate Machine-Learning pipelines were developed.',
					image: '',
					imageDescription: '',
					lastContent: '',
				},
				content2: {
					title: 'Digging-Condition-Index (DCI) detector:',
					description:
						'The DCI pipeline assesses the hardness or softness of each dig. It utilizes the HP-State model to extract and process vibration data associated with each dig. This process generates a score that indicates the degree of hardness for each dig within a specific mine.\nThe calibration of this pipeline is done locally, tailoring it to the specific ore characteristics of the mine. We then cross-reference this output with the location data(GPS) and get the full picture:',
					image: '/images/project1/dci1.png',
					imageDescription:
						'Image from the DCI dashboard that shows the number of hard/soft digs in an area',
					lastContent:
						'Which helps analyze the shovel operation and the amount of explosive used.\nNote: Two separate models were developed for this, one of which was normalized based on the local calibration(DCI), while the other was not localized(DI).',
				},
				content3: {
					title: 'Boom-Jack detector',
					description:
						'A ML pipeline that can score performed digs based on specific features that are sensitive to fluctuations, rapid movements, and reactions in the shovel using sensor data. If the score exceeds predefined thresholds, it is categorized as a Boom-Jack. These thresholds serve as indicators to identify instances where the shovel experiences significant and potentially hazardous behavior. Boom-Jack detection pipeline outputs 3 states (Hard/Medium/Soft) and Hard Boom-Jacks were heavily correlated with unscheduled maintenance.',
					image: '/images/project1/bj1.png',
					imageDescription:
						'Image from Boom-Jack dashboard that shows the number of boomjacks and its correlation with dig hardness',
					lastContent: '',
				},
				content4: {
					title: 'High-Precision State (HP-State) detector',
					description:
						'A sequential ML pipeline that detects the current state of the shovel. The pipelines mentioned earlier are developed for every “dig” instance, which is first detected by this pipeline and then fed into the others. There are 8 defined states, most of which are not easily separable from each other. That, combined with the sequential and high frequency type of signal data, made this the most challenging pipeline.\n\
						Here you can see the output of the models along with their labeled state:',
					image: '/images/project1/video.png',
					imageDescription:
						'This image is a screenshot from a video with model outputs as subtitles',
					lastContent:
						'Note: Two separate models were developed for this, one of which was for real-time detection while the other used delayed batch processing with a peek into the future (hence higher accuracy).',
				},
				content5: {
					title: '',
					description:
						'The output of this model helps us analyze the shovel performance using business KPIs that were provided to us. for example:',
					image: '/images/project1/kpi1.png',
					imageDescription: '',
					lastContent: '',
				},
				content6: {
					title: '',
					description: '',
					image: '/images/project1/kpi2.png',
					imageDescription: '',
					lastContent: '',
				},
				content7: {
					title: 'Kinematic State detector',
					description:
						'Same as the HP-State Real-Time Detector, but limited to only 4 outputs: Dig, Dump, Swing, Still. This output was used in the “Unity” app that demonstrated the current state of the shovel in a 3D visualized app.',
					image: '/images/project1/unity.png',
					imageDescription: '',
					lastContent: '',
				},
			},

			technicalDive:
				'Due to NDA reasons, I can not share this information publicly. Also, the last time I tried to write a technical summary it proved to be way too long. Feel free to contact me for a more in-depth chat either online or in-person',
			result: {
				content1r: {
					title: 'HP-State',
					description:
						'After training multiple stacked customized models on GPU, a weighted accuracy of around 93% was achieved. Due to the complexity of the problem, numerous metrics and evaluation standards were developed. Below are some of the reports of the Delayed Batch prediction pipeline on the test dataset:',
					image: '/images/project1/result1.png',
					imageDescription:
						'Record-Based accuracy, middle-10 means the accuracy of every state without the first/last 10 records (1 second) at start/end of every state',
					lastContent: '',
				},
				content2r: {
					title: '',
					description: '',
					image: '/images/project1/result2.png',
					imageDescription:
						'Some evaluation metrics with radius of 10 - with and without the first/last 10 records (1 second) at start/end of every state',
					lastContent: '',
				},
				content3r: {
					title: '',
					description:
						'HP-State pipeline was monitored in real-time on the PowerBI dashboard. This gave us insights such as how much time was wasted waiting for trucks and how long the specific states took which helped us optimize the operations. Below is the monitoring dashboard for HP-State pipeline:',
					image: '/images/project1/hpdashboard.png',
					imageDescription:
						'Note: This is just an image, the actual dashboard was completely interactive.',
					lastContent: '',
				},
				content4r: {
					title: 'Dig Condition Index',
					description:
						'After utilizing the HP-State pipeline outputs and finding the “dig” states, the DCI pipeline predicted scores for the degree of hardness which was then combined with GPS data. These outputs were used in “Unity”, while being monitored in real-time. The following image is a screenshot of the DCI dashboard provided in PowerBI:',
					image: '/images/project1/dcidashboard.png',
					imageDescription: '',
					lastContent: '',
				},
				content5r: {
					title: 'Boom-Jack',
					description:
						'Boom-Jack detection pipeline detects Boom-Jacks and If the number of hard Boom-Jack occurrences exceed a certain amount, the shovel is most likely to undergo maintenance much earlier than anticipated. This was was also reflected when the new operator joined at 2022-08-01 and the occurrence significantly increased in soft digs(meaning, the digs weren’t even that hard):',
					image: '/images/project1/bj2.png',
					imageDescription:
						'Boom-Jack occurences in soft digs, indicating possible fault of operator',
					lastContent: '',
				},
				content6r: {
					title: 'Business KPIs',
					description:
						'Utilizing the HP-State pipeline, we managed to fit the business KPIs into our evaluations and provided the following dashboard to the business team using PowerBI:',
					image: '/images/project1/kpidashboard.png',
					imageDescription:
						'KPI dashboard provided for the business team',
					lastContent: '',
				},
				content7r: {
					title: 'All-in-one report',
					description:
						'After using the HP-State detector pipeline, we have an overview of the states the shovel has been in. We then run Digging-Index and Boom-Jack pipelines and normalize the data based on Z-Score (which shows how abnormal a value is, 0 means average, +3 means really high, -3 means really low). This way we can easily find abnormalities without having to know the actual values. The image below is the concatenated normalized values for each pipeline (hp: High-Precision State, bj: Boom-Jack, di: Digging-Index, dci: Digging-Condition-Index, metric: business KPIs)',
					image: '/images/project1/all1.png',
					imageDescription:
						'Normalized Z-score values of every pipeline output',
					lastContent: '',
				},
				content8r: {
					title: '',
					description:
						'For detailed monitoring, the big table below is provided where you can explore every output of every pipeline.',
					image: '/images/project1/all2.png',
					imageDescription:
						'Normalized Z-score values of every pipeline output in detail',
					lastContent: 'You can click here to see the full report',
				},
			},
		},
	},

	{
		id: '2',
		image: '/images/Futsal.jpg',
		title: 'Futsal score prediction',
		about: 'Application of Machine Learning in daily life',
		description: '',
		tabs: {
			nonTechnicalSummery: {
				content1: {
					title: 'Project Overview',
					description:
						'A group of friends recorded the data for their futsal friendly matches on weekends. Here you will see me casually explaining how I made use of that data and slowly took over the manual efforts of the group, using AI. I also used Machine Learning to settle the arguments over player rankings which was crucial for our lineup selection for tournaments.',
					image: '/images/project2/futsal.png',
					imageDescription:
						'Futsal is a Five-a-side indoors version of football',
					lastContent: '',
				},
				content2: {
					title: 'How things worked',
					description:
						"After players submit their attendance for the weekend match and a list of available players is ready, the voted council members will try to make 2 teams as balanced as possible. Eventually, the lineup is announced and players are informed about what team they will play with/against.\n\
						Then a poll would be made on the group's telegram channel for everyone to vote which team they think is going to win. In special cases where the majority think one side is stronger (above 75%), changes to lineups would be arranged by the council.",
					image: '/images/project2/lineup.png',
					imageDescription: 'Match details after every game',
					lastContent: '',
				},
				content3: {
					title: '',
					description:
						'Statistics such as the final scores, goals, assists, fouls, penalties, saves, etc. are recorded during the game, or are extracted later from the game footage. The council also assigned score points to every player. these statistics along with the highlight video of the game are available in the telegram channel:',
					image: '/images/project2/matchreport.png',
					imageDescription: '',
					lastContent: '',
				},
				content4: {
					title: '',
					description:
						'Council also plays a role in other areas. For example, there are player cards for every player in the group which are updated at the end of every season. The council has its own metrics of performance and they vote for the best player of every season and announce the winners.',
					image: '/images/project2/playercards.png',
					imageDescription: '',
					lastContent: '',
				},
				content5: {
					title: 'Data Mining and statistics',
					description:
						'I used the data provided to see if I can extract anything meaningful. I managed to find the effectiveness of every player and their contribution to the team win.',
					image: '/images/project2/wincontribution.png',
					imageDescription: 'Players win contribution',
					lastContent: '',
				},
				content6: {
					title: '',
					description:
						"I also found out the best/worst pairs of the season(players who play well/badly when together), best pair for every player, their reliability on their pairs (in other words, their robustness towards any lineup they're placed in) and their synergy towards their team.",
					image: '/images/project2/pair1.png',
					imageDescription: 'top pairs',
					lastContent: '',
				},
				content7: {
					title: '',
					description: '',
					image: '/images/project2/pair2.png',
					imageDescription: '',
					lastContent: '',
				},
				content8: {
					title: '',
					description: '',
					image: '/images/project2/pair3.png',
					imageDescription: 'Every players best and worst pairs',
					lastContent: '',
				},
				content9: {
					title: '',
					description: '',
					image: '/images/project2/pair4.png',
					imageDescription:
						'Player versatility (low reliant factor means good robustness to lineup)',
					lastContent: '',
				},
				content10: {
					title: 'Enter - Machine Learning',
					description:
						'I took the recorded data over the past 2-3 seasons and tried to see if I could predict the outcome of every match. I stayed away from the input data that was provided by human metrics and aimed to create a completely fresh and out of the box model with its own unique perspective on the matter. For example, the player scores based on their cards, or the number of awards per player were not used. This way the model had no bias towards any players and was solely based on the win contribution of every player.\n\
						In short, after cleaning data and performing some small preprocessing on them, I created feature vectors from players and fed that into both neural networks and regression models. I designed and trained the models based on the data for the past 2-3 seasons. I also made sure the neural network model was regularized in order to avoid overfitting. For a more in-depth technical knowledge of my work, feel free to visit my github page.\n\
						One of the advantages of classical non-neural-network models is their explainability. After training the models, below is what the model thought of every player .The mean value is subtracted from the values, so positive is good(means above mean). The Random Forest model that was used here assigned high importance to some of our worst players, indicating they have high influence over the result of the game in a negative manner.',
					image: '/images/project2/AIopinion.png',
					imageDescription:
						'AIs opinion of every player, the higher the value, the better the player',
					lastContent: '',
				},
				content11: {
					title: '',
					description:
						"Once the model was completed, we announced the model's win probability prediction right after the group voting was concluded. After the game, the results and stats would be announced along with the Human and AI prediction of the game:",
					image: '/images/project2/announce.png',
					imageDescription:
						'Result of a match, with AI and Human predictions',
					lastContent:
						'At first everyone was skeptical about the AI predictions, However over time the model proved to be an oracle of futsal and shocked everyone including myself. The AI was able to predict 83% of the games correctly, while the group participants only managed to have an accuracy of 50%.\n\
						As Time went by, the influence of AI prediction in our group grew, to the point that whenever the AI prediction was more than 60%, players of the other team would ask for rearranging the lineups (claiming that lineup was biased) which caused a lot of extra work for the council. At one point, there was a discussion about the effect of the AI prediction on the teams mentality, and it affecting the outcome of the games (players would lose confidence when they were predicted to lose). AI at this point was causing more problems than solving. A while later, I was asked to not announce the AI prediction until after the game was over, which made my AI almost pointless.',
				},
				content12: {
					title: 'Adapting AI',
					description:
						"Since there was no point in the model's predictions anymore, I tried to apply ML to address other problems. I came up with a Lineup recommendation using the developed model. This way, I would check all the variations of lineups and suggest 5 that are most likely to draw. Therefore, the council would just have to pick one and announce it which saved a lot of time and arguments in the group.",
					image: '/images/project2/recommended.png',
					imageDescription:
						'5 Lineups recommended by AI, with their predicted win chance',
					lastContent:
						'I also tried to tackle the heated arguments over who was the best player in the team, and how everyone ranked. This was important as we were approaching a tournament and needed to pick our main lineup.',
				},
				content13: {
					title: '',
					description:
						"As I mentioned above, the neural network models don't have great explainability, so it was difficult to see how highly the model thinks of every individual player. Instead, I made a 10 player list of our best players, split them into two teams with all the possible lineup variations and asked the model to predict every game's outcome. I then used that outcome as the base score table and extracted players' win rate and statistics.",
					image: '/images/project2/bests.png',
					imageDescription:
						'Top 10 players of the season ranked by AI',
					lastContent:
						'This finally settled the disputes among the players over the top players.',
				},
			},

			technicalDive:
				'For a more technical and in-depth overview of my work, check out my python notebook files on github at https://github.com/miladrezae/Futsal_project . If you have any other questions, feel free to contact me.',

			result: {
				content1r: {
					title: 'Score Prediction',
					description:
						'As mentioned above, there were few stages of Machine-Learning application involved. First I aimed to predict the score of every match based on the line-ups that were arranged by the council. Over time, after 11 matches, The developed model managed to predict 9 correct outcomes which indicates a 81% accuracy. This accuracy sounds more astonishing after considering the humans prediction accuracy of just 50%.',
					image: '/images/project2/results1.png',
					imageDescription:
						'This image was cropped from the teams channel and was then translated.',
				},
				content2r: {
					title: 'Line-up recommendation',
					description:
						'After the successful score prediction, we then strived to take advantage of this AI to improve the quality of our line-ups and make the matches closer and more equal. I developed an AI that would recommend line-ups(based on the available players) to the council with the highest chance of a draw:',
					image: '/images/project2/recommended.png',
					imageDescription:
						'5 Lineups recommended by AI, with their predicted win chance',
				},
				content3r: {
					title: 'Ranking players',
					description:
						"As mentioned earlier, I made a 10 player list of our best players, split them into two teams with all the possible lineup variations and asked the score-predictor model to predict every game's outcome. I then treated that outcome as the league table and extracted information about players statistics and win rates.",
					image: '/images/project2/bests.png',
					imageDescription:
						'Image of the location where google map showed a bank, but our data did not.',
				},
			},
		},
	},

	{
		id: '3',
		image: '/images/ATM.jpg',
		title: 'ATM Allocation',
		about: 'Application of Machine Learning in recommending the most optimized locations across the country',
		description: '',
		tabs: {
			nonTechnicalSummery: {
				content1: {
					title: 'Project Overview',
					description:
						'Our team was tasked to recommend the best locations for placing the new ATM machines of Mellat Bank. We had access to transaction data of the customers, and had the location of the Mellat Bank ATMs',
					image: '',
					imageDescription: '',
					lastContent: '',
				},
				content2: {
					title: 'Prerequisite',
					description:
						'Banks pay each other a transaction fee every time their customers use other banks ATM. The simplified fee report format provided by the 3rd party gateway is:',
					image: '/images/project3/schema.png',
					imageDescription: '',
					lastContent:
						'The problem, however, lies in lack of knowledge about the ATM IDs, as there is no available information about their whereabouts. In other words, the rival company’s ATMs with the highest fees could\
						 be located anywhere in the country.',
				},
				content3: {
					title: 'The problem',
					description:
						'We’re asked to find an efficient method to recommend the best location to place new ATMs.m In order to decide where the “Best” locations for ATMs are, we needed metrics which could be defined by\
						 the experts in the bank who unfortunately proved to be reluctant to help us. Based on what we gathered, they routinely chose the ATM locations based on following factors: \
						\n-Geographical features\n-Safety features\n-Political features\n-Campaigning features\n-Special requests',
					image: '',
					imageDescription: '',
					lastContent:
						'Gathering information about these features proved to be too costly, so we had to find other solutions, preferably a data-driven one.',
				},
				content4: {
					title: 'Data-Driven solution',
					description:
						'What if we had the location and ID of all of the rival banks’ ATMs? then we can extract many good features such as area population, wealth,\
						 and even neighborhood safety. We could also find out which parts of the map are lacking ATMs using the transaction data, and which areas are imposing heavy transaction fees on us.\
						 This way instead of having information about just 7000 ATMs, we could have much more information (100,000 ATMs), especially in the areas where we don’t have an ATM installed (and obviously need).',
					image: '',
					imageDescription: '',
					lastContent: '',
				},
				content5: {
					title: 'a) Locating ATMs in vicinity of our own ATMs',
					description:
						"Our objective here was to find out the location and ID of every other ATM located in the country. Since we had the transaction data, we hoped to find the closest rival Banks's ATM terminals close to our own terminals. \n\
						For example, a user does a transaction at a Mellat Bank ATM terminal, then for whatever reason (maybe failed transaction?) they do another transaction using another ATM machine, within 2 minutes of the first transaction. It would be safe to conclude that those 2 ATMs are within a 2 minute vicinity of each other. So all it takes for us to learn that, is one customer using two ATMs in sequence, within the past year.\n\
						After cleaning data and filtering outliers using Neural Networks, We managed to locate around 9000 ATMs within a few minutes of our own machines (total of 16,000 known ATMs so far). We evaluated the results using some of the known ATMs from Mellat Bank and had a 100% accuracy.",
					image: '/images/project3/credibility.png',
					imageDescription:
						'Here you can see how ATMs that are less than 100 seconds apart, are indeed next to each other based on our location database.',
					lastContent:
						'This method only worked really well on very closely located ATMs (up to 5 minutes). However, with the increase in time-difference, the noisy data became a problem and affected the accuracy (more on the noisy data problems in technical dive-in tab). And we still did not have enough information to solve our problem.',
				},
				content6: {
					title: 'b) Locating all ATMs in the country using collaborative filtering scores',
					description:
						'We had accurate data of about 16,000 ATMs (of which, 7000 were our own) out of the 100,000 in the country. We decided to use a method called “Collaborative Filtering” that is very common in recommender systems, and mapped our problem into that schema.\n\
						In simple terms, We look at every customer as a user, and every ATM as an item. If two ATMs are close to each other, then they are very likely to have similar users. The more similar users they share, the smaller their distance. So we gave every ATM a “Similarity Score” to the other ATMs (this took lots of computational power).',

					image: '/images/project3/collaborative.png',
					imageDescription:
						'Overview of how Collaborative Filtering works',
					lastContent: '',
				},
				content7: {
					title: 'c) Clustering near ATMs using DBScan algorithm',
					description:
						'We then used something called “DBScan” to find clusters of closely located ATMs. In order to know the location of the entire cluster, all we needed was one known ATM in that cluster (which had already been done previously).\n\
						This way we managed to label the location of over 50,000 ATM machines, making our total known ATM location/ID count around 65,000.',
					image: '/images/project3/dbscan.png',
					imageDescription:
						'Overview of clustering data using Density-Based Spatial Clustering of Applications with Noise',
					lastContent: '',
				},
				content8: {
					title: 'd) Classifying the clusters using K-NN algorithm',
					description:
						"We still didn’t have the location of all the ATM machines, as some of these big clusters didn't have a single known ATM in them. The next idea came from a classifying algorithm called K-NN (K-Nearest Neighbour). In simple terms, the KNN algorithm tells us which class (known location/cluster) every ATM is the nearest to.",
					image: '/images/project3/knn.png',
					imageDescription: '',
					lastContent:
						'Finally we achieved the location of over 80,000 ATM machines and therefore had access to:\n\
						-Total number of transactions in each area (Population)\n\
						-The amount of money people in each area use (wealth)\n\
						-The areas we don’t have any ATMs in\n\
						-Many other features extractable from transactions (such as safety)\n\
						Note: We also cross-referenced our results with the google map data to see if we could find the exact locations of some of the competitors ATMs.',
				},
				content9: {
					title: '',
					description:
						'We provided a dashboard to the experts with various features mentioned above along with the exact location of the competitors most used ATMs, making their job much easier to find the blindspots\
						 and enabled them to make data-driven decisions. They could now have access to a total transaction fee for every area of the map and make informed choices.',
					image: '/images/project3/map.png',
					imageDescription:
						'The map with exact locations of the competitors ATMs, after cross referencing our results with google map data',
					lastContent: '',
				},
				content10: {
					title: '',
					description: '',
					image: '/images/project3/map1.png',
					imageDescription: '',
					lastContent: '',
				},
				content11: {
					title: '',
					description: '',
					image: '/images/project3/map2.png',
					imageDescription:
						'A table in dashboard with all the mentioned features in every area/city',
					lastContent: '',
				},
			},

			technicalDive:
				'Due to NDA that I signed, and the fact that it was a banking company, I neither have full access nor am allowed to share the in-depth technical knowledge publicly.\n\
			However, feel free to contact me and ask me about it in-person/online',

			result: {
				content1r: {
					title: '',
					description:
						'We used field tests to evaluate our results. We had our agents go check out the estimated locations of competitors ATMs and report back to us. We made sure to check ATMs from every competitor bank. We also used the google map data to validate our model.',
					image: '/images/project3/reports.png',
					imageDescription:
						'Validation report after field-test and google map data cross-check',
					lastContent: '',
				},
				content2r: {
					title: '',
					description:
						'Out of the 30 ATMs checked, we found 2 instances where google map data did not match with our results, and after field investigation, we realized that the google map data was wrong/outdated!!',
					image: '/images/project3/pasargad.png',
					imageDescription:
						'The ATM/bank that was not on google map data, but was shown in our results',
					lastContent: '',
				},
				content3r: {
					title: '',
					description:
						'Also, there was an instance where google map showed a Iranzamin bank, which did not show up in our results. After some investigation we noticed that the google map data was indeed wrong and there were no banks nor ATMs from Iranzamin bank',
					image: '/images/project3/iranzamin.png',
					imageDescription:
						'Image of the location where google map showed a bank, but our data did not.',
					lastContent: '',
				},
				content4r: {
					title: '',
					description:
						'To further evaluate our accuracy, our client Mellat Bank gave us a list of 50 unknown ATM IDs that they already knew the location of. We managed to locate 48 of them correctly, achieving a 96% accuracy. The instances where we could not locate the ATMs were two newly placed ones that we did not have enough data on.\n\
						The final product was a dashboard on our app that provided population, wealth, safety, and transaction information for every area on map, along with the exact location of competitor ATMs and their imposed transactions:',
					image: '/images/project3/map.png',
					imageDescription: '',
					lastContent: '',
				},
				content5r: {
					title: '',
					description: '',
					image: '/images/project3/map1.png',
					imageDescription: '',
					lastContent: '',
				},
				content6r: {
					title: '',
					description: '',
					image: '/images/project3/map2.png',
					imageDescription:
						'A table in dashboard with all the mentioned features in every area/city',
					lastContent: '',
				},
			},
		},
	},

	{
		id: '4',
		image: '/images/AI.jpg',
		title: 'Design, Development, Deployment, and monitoring entire ML pipeline at RIGID ROBOTICS',
		about: 'Python Integration and Real-Time prediction of the developed AI models on Azure cloud services (Coming soon)',
		description: '(Coming soon)',
		tabs: {
			nonTechnicalSummery: {
				content1: {
					title: '(Coming soon)',
				},
			},
			technicalDive: '(Coming soon)',
			result: '(Coming soon)',
		},
	},
];
export default AllProjects;
