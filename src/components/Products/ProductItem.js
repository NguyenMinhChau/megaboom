'use client';
import Image from 'next/image';
import { styled } from '@mui/material';
import React from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Link from 'next/link';
import routers from '@/routers/router';

const StylesItem = styled('div')(({ theme, cols, spacing, className }) => ({
	// mobile
	[theme.breakpoints.up('xs')]: {
		width: '90vw',
	},
	// Tablet
	[theme.breakpoints.between('sm', 'md')]: {
		width: '44vw',
	},
	// PC
	[theme.breakpoints.up('lg')]: {
		width: '269px',
	},

	[theme.breakpoints.between('md', 'lg')]: {
		width: '269px',
	},

	backgroundColor: '#ffffff',
	color: '#000000',
	borderRadius: '30px',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'space-between',
	overflow: 'hidden',
	height: '269px',
	position: 'relative',
	'&:hover': {
		transition: 'all 0.3s linear',
	},
	...className,
}));

export default function ProductItem({ urlImage, title, description }) {
	return (
		<>
			<StylesItem
				cols={3}
				spacing="8px"
				className={`shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] overflow-hidden group duration-500 transition-all`}
			>
				{/* <Image
					src={urlImage}
					className={`w-full h-[180px] group-hover:hidden rounded-[30px]`}
					objectFit="contain"
				/> */}
				<Image
					alt="image"
					src={urlImage}
					className={`w-full h-[180px] group-hover:hidden rounded-[30px] object-contain`}
				/>
				<div className="p-3 flex flex-col items-center justify-center font-extralight">
					<div className={`text-[#000] font-[500] text-[21px] my-5 `}>{title}</div>
					<p
						className={`text-[#666] font-[300] text-[16px] text-center hidden group-hover:block flex-1`}
					>
						{description}
					</p>
					<Link
						href={routers.products}
						className="text-[14px] text-[#666] font-[300] border border-solid border-[#555] rounded-[100px] px-[10px] cursor-pointer hidden group-hover:flex items-center justify-center gap-2 absolute bottom-[50px]"
					>
						<span className="min-w-[60px]">See more</span>
						<i class="fa-solid fa-chevron-right text-[12px]"></i>
						{/* <ArrowForwardIosIcon className="text-[#555] text-[12px]" /> */}
					</Link>
				</div>
			</StylesItem>
		</>
	);
}
