'use client';
import React from 'react';
import { GREEN_PRIMARY_COLOR } from '@/styles/color.global';
import Button from '@/components/Button';
import routers from '@/routers/router';

export default function KnowMore() {
	return (
		<>
			<div className="w-full flex items-center justify-center flex-col my-[100px] font-extralight">
				<h1
					className="text-[40px] space-x-7 text-center font-[400]"
					style={{
						color: GREEN_PRIMARY_COLOR,
					}}
				>
					Want to know more?
				</h1>
				<p className="text-[#666] font-[300] text-center">
					We are here to make you satisfied
				</p>
				<div className="flex items-center justify-center">
					<Button
						classNameTailwind={`min-w-[300px] text-center text-[21px] py-2 mt-2 rounded-[30px] border-[2px] border-transparent bg-[#51d891] hover:text-[#51d891] hover:bg-white hover:border-[#51d891] transition-all duration-500 text-white`}
						href={routers.contact_us}
					>
						Contact us
					</Button>
				</div>
			</div>
		</>
	);
}
