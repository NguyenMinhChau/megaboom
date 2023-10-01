import Image from 'next/image';
import React from 'react';
import LogoMegaBoom from '../../assets/images/logo/LOGO_MEGABOOM.png';
import LogoMegaBoomWhite from '../../assets/images/logo/LOGO_MEGABOOM_WHITE.png';
import Link from 'next/link';
import routers from '@/routers/router';

export default function Header() {
	const [sticky, setSticky] = React.useState(false);
	const handleStickyNavbar = () => {
		if (window.scrollY >= 80) {
			setSticky(true);
		} else {
			setSticky(false);
		}
	};
	React.useEffect(() => {
		window.addEventListener('scroll', handleStickyNavbar);
	});

	const LogoSticky = sticky ? LogoMegaBoomWhite : LogoMegaBoom;

	return (
		<>
			<div
				className={`w-full min-h-[78px] flex items-center justify-center px-[13vw] ${
					sticky
						? 'fixed top-0 left-0 z-50 duration-500 transition-all bg-[#2766f1]'
						: 'bg-white'
				}`}
			>
				<div
					className={`w-full h-full flex justify-between items-center`}
				>
					<Link href={routers.home}>
						<Image
							src={LogoSticky}
							className={`w-[127px] h-[30px]`}
						/>
					</Link>
					<div
						className={`flex-1 uppercase flex flex-row items-center justify-end gap-[60px]`}
					>
						<Link href={`${routers.home}`} legacyBehavior>
							<span
								className={`${
									sticky ? 'text-white' : 'text-black'
								} font-medium cursor-pointer ${
									sticky
										? 'hover:text-[#51d891]'
										: 'hover:text-[#2766f1]'
								}`}
							>
								Home
							</span>
						</Link>
						<Link href={`${routers.about_us}`} legacyBehavior>
							<span
								className={`${
									sticky ? 'text-white' : 'text-black'
								} font-medium cursor-pointer ${
									sticky
										? 'hover:text-[#51d891]'
										: 'hover:text-[#2766f1]'
								}`}
							>
								About Us
							</span>
						</Link>
						<Link href={`${routers.products}`} legacyBehavior>
							<span
								className={`${
									sticky ? 'text-white' : 'text-black'
								} font-medium cursor-pointer ${
									sticky
										? 'hover:text-[#51d891]'
										: 'hover:text-[#2766f1]'
								}`}
							>
								Products
							</span>
						</Link>
						<Link href={`${routers.contact_us}`} legacyBehavior>
							<span
								className={`${
									sticky ? 'text-white' : 'text-black'
								} font-medium cursor-pointer ${
									sticky
										? 'hover:text-[#51d891]'
										: 'hover:text-[#2766f1]'
								}`}
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
