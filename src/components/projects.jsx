import React, { useEffect } from 'react';
import EachProjectContainer from './each-project';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
SwiperCore.use([Autoplay]);
import 'swiper/css';
import AllProjects from '../components/data';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const ProjectSwiper = () => {
	const router = useRouter();

	return (
		<div
			id="projects"
			className="flex flex-col items-start justify-start mx-[106px] mt-[106px]"
		>
			<div className="flex flex-col md:h-[800px]  px-[10px]">
				<Swiper
					pagination={{
						type: 'progressbar',
					}}
					navigation={true}
					modules={[Pagination, Navigation]}
					className="flex flex-col flex-nowrap"
					slidesPerView={2}
					direction="vertical"
				>
					{AllProjects.map((eachProject, index) => (
						<>
							<SwiperSlide
								onClick={() =>
									router.push('/projects/' + eachProject.id)
								}
								className=""
							>
								<EachProjectContainer
									eachProject={eachProject}
									key={index}
								/>
							</SwiperSlide>
						</>
					))}
				</Swiper>
			</div>
			<Link
				href={'/'}
				className="text-[20px] text-[#FFFFFF] my-[40px] underline"
			>
				Wanna see my personal chat-bot?
			</Link>
		</div>
	);
};

export default ProjectSwiper;
