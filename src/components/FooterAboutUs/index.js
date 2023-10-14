import routers from '@/routers/router';
import React from 'react';
import Logo_White from '@/assets/images/logo/LOGO_MEGABOOM_WHITE.png';
import Link from 'next/link';
import Image from 'next/image';
import { SECONDARY_COLOR } from '@/styles/color.global';

export default function FooterAboutUs() {
	return (
		<>
			<div
				className="w-full py-[20px] lg:py-0 min-h-[300px] flex justify-between items-center"
				style={{
					backgroundColor: SECONDARY_COLOR,
				}}
			>
				<div className="p-2 w-full flex flex-col gap-3 lg:flex-row px-[4vw] lg:px-[13vw] md:flex-row justify-between lg:items-start items-center">
					<div className="flex flex-col gap-3 lg:items-start items-center justify-center flex-[3]">
						<Link href={routers.home} className="inline-block w-48">
							<Image
								src={Logo_White}
								alt="logo"
								className="block w-full"
							/>
						</Link>
						<div className="text-white text-[12px] text-center lg:text-left leading-5">
							Copyright © 2023 Megaboom. All Rights Reserved. All
							trademarks referenced herein are the properties of
							their respective owners.
						</div>
					</div>
					<div className="flex flex-[6] flex-col gap-1 items-center justify-center mt-auto">
						<p className="text-white font-bold text-[16px]">
							Megaboom Company Limited
						</p>
						<p className="text-white">
							Hotline:{' '}
							<a
								rel="nofollow noopener"
								className="text-primary font-bold"
								href="tel:1900001234"
							>
								1900 001234
							</a>
						</p>
						<p className="text-white">
							Email:{' '}
							<a
								rel="nofollow noopener"
								className="text-primary font-bold"
								href="mailto:info@megaboom.com.vn"
							>
								info@megaboom.com.vn
							</a>
						</p>
						<p className="text-white text-center">
							Office: May Plaza, 65D Vo Van Tan Str., D.3, HCMC
						</p>
					</div>
					<div className="flex flex-col gap-2 lg:items-end items-end justify-center flex-[1] md:flex-[2]">
						<div className="flex flex-col items-end gap-1">
							<p className="text-center text-base font-bold text-white ">
								Explore
							</p>
							<Link
								href={routers.home}
								className="inline-block text-[14px] text-white"
							>
								Home
							</Link>
							<Link
								href={routers.about_us}
								className="inline-block text-[14px] text-white"
							>
								About us
							</Link>
							<Link
								href={routers.products}
								className="inline-block text-[14px] text-white"
							>
								Products
							</Link>
							<Link
								href={routers.contact_us}
								className="inline-block text-[14px] text-white"
							>
								Contact us
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
