import { PRIMARY_COLOR } from '@/styles/color.global';
import React from 'react';
import BACKGROUND_HERO from '@/assets/images/home_page/HOMEPAGE_HERO.jpg';

export default function Hero() {
	return (
		<>
			<div className={`w-full`}>
				<div
					className={`flex flex-col items-start justify-end w-full h-[70vh] lg:h-screen pb-[12vh] px-[13vw]`}
					style={{
						backgroundImage: `url(${BACKGROUND_HERO?.src})`,
						backgroundSize: '100% 100%',
						backgroundPosition: 'center',
						backgroundRepeat: 'no-repeat',
					}}
				>
					<div className="flex justify-start items-start flex-col">
						<h1
							className={`text-[30px] sm:text-[50px] font-medium text-left lg:text-justify sm:text-center text-white`}
						>
							Explore
						</h1>
						<h1
							className={`text-[30px] sm:text-[50px] font-medium text-left lg:text-justify sm:text-center text-white`}
						>
							The Endless Possibility
						</h1>
						<p className={`text-[21px] font-[200] text-justify sm:text-center text-white`}>
							At Megaboom, we provide the all-inclusive marketing services tailored to fintech area
						</p>
					</div>
				</div>
			</div>
		</>
	);
}
