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
					<div className="flex flex-col gap-3 lg:items-start items-center justify-center flex-[6] mt-auto">
						<Link href={routers.home} className="inline-block w-48">
							<Image
								src={Logo_White}
								alt="logo"
								className="block w-full"
							/>
						</Link>
						<div className="text-white md:max-w-[260px] xl:max-w-[300px] font-[200] text-[13px] text-center md:text-left leading-5">
							Copyright © 2023 Megaboom. All Rights Reserved. All
							trademarks referenced herein are the properties of
							their respective owners.
						</div>
					</div>
					<div className="flex flex-[6] flex-col gap-1 items-center justify-center md:items-start mt-auto">
						<p className="text-white font-[400] text-[16px]">
							Megaboom Company Limited
						</p>
						<p className="text-white font-[200] text-[13px]">
							Hotline:{' '}
							<a
								rel="nofollow noopener"
								className="text-primary font-[200] text-[13px]"
								href="tel:1900001234"
							>
								+84 969 822018
							</a>
						</p>
						<p className="text-white font-[200] text-[13px]">
							Email:{' '}
							<a
								rel="nofollow noopener"
								className="text-primary font-[200] text-[13px]"
								href="mailto:info@megaboom.com.vn"
							>
								info@megaboom.com.vn
							</a>
						</p>
						<p className="text-white font-[200] text-[13px]">
							Office: May Plaza, 65D Vo Van Tan Str., D.3, HCMC
						</p>
					</div>
					<div className="flex flex-col gap-2 md:items-end items-center justify-center flex-[1] md:flex-[2]">
						<div className="flex flex-col items-center md:items-end gap-1">
							<p className="text-center text-base font-[400] text-white ">
								Explore
							</p>
							<Link
								href={routers.home}
								className="inline-block uppercase font-[200] text-[14px] text-white"
							>
								Home
							</Link>
							<Link
								href={routers.about_us}
								className="inline-block uppercase font-[200] text-[14px] text-white"
							>
								About us
							</Link>
							<Link
								href={routers.products}
								className="inline-block uppercase font-[200] text-[14px] text-white"
							>
								Products
							</Link>
							<Link
								href={routers.contact_us}
								className="inline-block uppercase font-[200] text-[14px] text-white"
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
