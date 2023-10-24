'use client';
import React from 'react';

export default function OurLibraryItem({ urlBgc, title, description }) {
	return (
		<>
			<div
				className="item relative group"
				style={{
					background: `url(${urlBgc})`,
					backgroundSize: '100% 100%',
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'center',
				}}
			>
				<div
					style={{
						background:
							'linear-gradient(180deg,rgba(1,0,46,0) 9%,rgba(1,0,46,.580392))',
					}}
					className="text-center w-full p-3 flex items-end justify-center absolute h-[50%] bottom-0"
				>
					<p className="font-[500] group-hover:hidden text-white">
						{title}
					</p>
				</div>
				<div
					style={{
						backgroundColor:
							'#3664be',
					}}
					className="py-[36px] px-[20px] w-full flex p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 flex-col items-center justify-start absolute h-full"
				>
					<div className="font-[500] text-white text-[20px]">
						{title}
					</div>
					<p className="my-2 font-[300] text-white leading-6 text-center">
						{description}
					</p>
				</div>
			</div>
		</>
	);
}
