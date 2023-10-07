import Image from 'next/image';
import React from 'react';
import LogoMegaBoom from '../../assets/images/logo/LOGO_MEGABOOM.png';
import LogoMegaBoomWhite from '../../assets/images/logo/LOGO_MEGABOOM_WHITE.png';
import Link from 'next/link';
import routers from '@/routers/router';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function Header() {
	const router = useRouter()
	const [sticky, setSticky] = React.useState(false);
	const [isOpen, setIsOpen] = React.useState(false);
	const handleStickyNavbar = () => {
		if (window.scrollY > 0) {
			setSticky(true);
		} else {
			setSticky(false);
		}
	};
	React.useEffect(() => {
		window.addEventListener('scroll', handleStickyNavbar);
	});

	const openMenuTablet = {
		open: { transform: 'translateX(0px)', transition: 2 },
		closed: { transform: 'translateX(-1025px)', transition: 2 },
	};

	const LogoSticky = sticky ? LogoMegaBoomWhite : LogoMegaBoom;
	const genericHamburgerLine = `h-1 w-full my-1 rounded-full bg-black transition ease transform duration-300`;

	return (
		<>
			<div
				className={`w-full min-h-[78px] flex items-center justify-center px-[4vw] lg:px-[13vw] ${sticky
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
						className={`hidden flex-1 uppercase lg:flex flex-row items-center justify-end gap-[60px]`}
					>
						<Link href={`${routers.home}`} className='block'>
							<span
								className={`${sticky ? 'text-white' : 'text-black'
									} font-medium cursor-pointer ${sticky
										? 'hover:text-[#51d891]'
										: 'hover:text-[#2766f1]'
									}`}
							>
								Home
							</span>
						</Link>
						<Link href={`${routers.about_us}`} className='block'>
							<span
								className={`${sticky ? 'text-white' : 'text-black'
									} font-medium cursor-pointer ${sticky
										? 'hover:text-[#51d891]'
										: 'hover:text-[#2766f1]'
									}`}
							>
								About Us
							</span>
						</Link>
						<Link href={`${routers.products}`} className='block'>
							<span
								className={`${sticky ? 'text-white' : 'text-black'
									} font-medium cursor-pointer ${sticky
										? 'hover:text-[#51d891]'
										: 'hover:text-[#2766f1]'
									}`}
							>
								Products
							</span>
						</Link>
						<Link href={`${routers.contact_us}`} className='block'>
							<span
								className={`${sticky ? 'text-white' : 'text-black'
									} font-medium cursor-pointer ${sticky
										? 'hover:text-[#51d891]'
										: 'hover:text-[#2766f1]'
									}`}
							>
								Contact Us
							</span>
						</Link>
					</div>
					<button
						className="flex lg:hidden flex-col h-12 w-[50px] justify-center items-center group"
						onClick={() => setIsOpen(!isOpen)}
					>
						<div
							className={`${genericHamburgerLine} ${sticky && "bg-[#fff]"} ${isOpen
								? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
								: "opacity-50 group-hover:opacity-100"
								}`}
						/>
						<div className={`${genericHamburgerLine} ${sticky && "bg-[#fff]"} ${isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"}`} />
						<div
							className={`${genericHamburgerLine} ${sticky && "bg-[#fff]"} ${isOpen
								? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
								: "opacity-50 group-hover:opacity-100"
								}`}
						/>
					</button>
				</div>
			</div>
			<motion.div
				className="w-screen h-screen bg-white z-50 fixed left-0 top-[78px] lg:hidden"
				initial="closed"
				animate={isOpen ? 'open' : 'closed'}
				variants={openMenuTablet}
			>
				<ul className='list-none py-[20px] px-[4vw]'>
					<li onClick={() => setIsOpen(false)} className='cursor-pointer uppercase text-black hover:text-[#2766f1]  py-[15px] border-b-[1px] border-solid border-[#dcdce9]'>
						<Link href={`${routers.home}`} className='block'>
							Home
						</Link>
					</li>
					<li onClick={() => setIsOpen(false)} className='cursor-pointer uppercase text-black hover:text-[#2766f1]  py-[15px] border-b-[1px] border-solid border-[#dcdce9]'>
						<Link href={`${routers.about_us}`} className='block'>
							About Us
						</Link>
					</li>
					<li onClick={() => setIsOpen(false)} className='cursor-pointer uppercase text-black hover:text-[#2766f1]  py-[15px] border-b-[1px] border-solid border-[#dcdce9]'>
						<Link href={`${routers.products}`} className='block'>
							Products
						</Link>
					</li>
					<li onClick={() => setIsOpen(false)} className='cursor-pointer uppercase text-black hover:text-[#2766f1]  py-[15px] border-b-[1px] border-solid border-[#dcdce9]'>
						<Link href={`${routers.contact_us}`} className='block'>
							Contact Us
						</Link>
					</li>
				</ul>
			</motion.div>
		</>
	);
}
