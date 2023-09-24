import Image from 'next/image';
import React from 'react';
import LogoMegaBoom from '../../assets/images/logo/LOGO_MEGABOOM.png';
import Link from 'next/link';
import routers from '@/routers/router';

export default function Header() {
	return (
		<>
			<div
				className={`w-full min-h-[78px] bg-white flex items-center justify-center px-[170px]`}
			>
				<div
					className={`w-full h-full flex justify-between items-center`}
				>
					<Link href={routers.home}>
						<Image
							src={LogoMegaBoom}
							className={`w-[127px] h-[30px]`}
						/>
					</Link>
					<div
						className={`flex-1 flex flex-row items-center justify-end gap-[60px]`}
					>
						<Link href={`${routers.home}`} legacyBehavior>
							<span
								className={`text-black font-medium cursor-pointer hover:text-[#2766f1]`}
							>
								Home
							</span>
						</Link>
						<Link href={`${routers.about_us}`} legacyBehavior>
							<span
								className={`text-black font-medium cursor-pointer hover:text-[#2766f1]`}
							>
								About Us
							</span>
						</Link>
						<Link href={`${routers.products}`} legacyBehavior>
							<span
								className={`text-black font-medium cursor-pointer hover:text-[#2766f1]`}
							>
								Products
							</span>
						</Link>
						<Link href={`${routers.contact_us}`} legacyBehavior>
							<span
								className={`text-black font-medium cursor-pointer hover:text-[#2766f1]`}
							>
								Contact Us
							</span>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}
