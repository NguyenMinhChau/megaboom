import { PRIMARY_COLOR } from '@/styles/color.global';
import React from 'react';
import BACKGROUND_HERO from '@/assets/images/home_page/HOMEPAGE_HERO.jpg';

export default function Hero() {
	return (
		<>
			<div className={`w-full`}>
				<div
					className={`flex flex-col items-start justify-end w-full h-screen pb-[60px] px-[170px]`}
					style={{
						backgroundImage: `url(${BACKGROUND_HERO?.src})`,
						backgroundSize: '100% 100%',
						backgroundPosition: 'center',
						backgroundRepeat: 'no-repeat',
					}}
				>
					<div className="flex justify-start items-start flex-col">
						<h1
							className={`text-[50px] font-medium text-center text-white`}
						>
							Explore
						</h1>
						<h1
							className={`text-[50px] font-medium text-center text-white`}
						>
							The Endless Possibility
						</h1>
						<p className={`text-[25px] text-center text-white`}>
							The best place to buy your favorite boomboxes
						</p>
					</div>
				</div>
			</div>
		</>
	);
}
