import { PRIMARY_COLOR } from '@/styles/color.global';
import React from 'react';

export default function OurClient() {
	return (
		<>
			<div className="w-full flex items-center justify-center flex-col mb-[60px] mt-[60px] lg:mt-[180px] px-[4vw] lg:px-[13vw]">
				<h1
					className="text-[40px] space-x-7"
					style={{
						color: PRIMARY_COLOR,
					}}
				>
					Our Clients
				</h1>
				<p className="text-gray-400 text-center lg:text-start">
					We personalize solutions to match
				</p>
				<p className="text-gray-400 text-center lg:text-start">
					your current status and threshold of expectation
				</p>
				<div className="w-full h-[350px] mt-[30px] rounded-[30px] border border-blue-600"></div>
			</div>
		</>
	);
}
