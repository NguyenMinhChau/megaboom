import React from 'react';
import BACKGROUND_HERO from '@/assets/images/about_us/bgc_hero_2.jpg';

export default function HeroAboutUs({ }) {
	return (
		<>
			<div className={`w-full`}>
				<div
					className={`flex flex-col items-start justify-end w-full h-[70vh] lg:h-screen`}
					style={{
						backgroundImage: `url(${BACKGROUND_HERO?.src})`,
						backgroundSize: '100% 100%',
						backgroundPosition: 'center',
						backgroundRepeat: 'no-repeat',
					}}
				>
					<div
						className="flex justify-start w-full items-start flex-col lg:pb-[12vh] md:pb-[8vh] pb-[6vh] px-[13vw]"
						style={{
							background:
								'linear-gradient(180deg,rgba(1,0,46,0) 9%,rgba(1,0,46,.680392))',
						}}
					>
						<h1
							className={`md:text-[50px] lg:text-[100px] text-[50px] font-medium text-left lg:text-justify sm:text-center text-white`}
						>
							About us
						</h1>
						<p
							className={`text-[21px] font-[200] text-left text-white`}
						>
							Established in 2022, Megaboom Co , Ltd. is a media,
							advertising, event organization <br></br> and technology
							development service company in the financial sector
						</p>
					</div>
				</div>
			</div>
		</>
	);
}
