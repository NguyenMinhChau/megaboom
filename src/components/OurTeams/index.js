'use client';
import React from 'react';
import { PRIMARY_COLOR } from '@/styles/color.global';

export default function OurTeams({ desc, urlImage }) {
	return (
		<div className="w-full h-full flex justify-center items-center py-[70px]">
			<div className="">
				<div
					className="font-bold text-[40px] mb-7 text-center"
					style={{
						color: PRIMARY_COLOR,
					}}
				>
					Our Teams
				</div>
				<div
					className="w-full h-[200px] mb-[30px]"
					style={{
						background: `url(${urlImage})`,
						backgroundSize: 'contain',
						backgroundRepeat: 'no-repeat',
						backgroundPosition: 'center',
					}}
				></div>
				{desc && (
					<div
						className={`text-black text-[18px] sm:text-[20px] w-full text-justify leading-8`}
						dangerouslySetInnerHTML={{ __html: desc }}
					></div>
				)}
			</div>
		</div>
	);
}
