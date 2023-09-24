'use client';

import Hero from '@/components/Hero';

export default function Home() {
	return (
		<>
			<div className={`w-full`}>
				<Hero />
				<div className="w-full flex items-center justify-center flex-col">
					<h1 className="text-[40px] text-[#2766f1] space-x-7">
						Core Values
					</h1>
				</div>
				<div className="w-full flex items-center justify-center flex-col">
					<h1 className="text-[40px] text-[#2766f1] space-x-7">
						Products
					</h1>
					<p className="text-gray-400">
						Empower the opportunities and connections
					</p>
				</div>
			</div>
		</>
	);
}
