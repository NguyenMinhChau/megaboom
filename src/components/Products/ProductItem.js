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
				<Image
					src={urlImage}
					className={`w-full h-[180px] group-hover:hidden rounded-[30px]`}
					objectFit="contain"
				/>
				<div className="p-3 flex flex-col items-center justify-center">
					<div className={`text-[21px] my-5`}>{title}</div>
					<p
						className={`leading-5 text-center font-extralight text-[16px] hidden group-hover:block`}
					>
						{description}
					</p>
					<Link href={routers.products} className='absolute text-[14px] left-[86px] right-[86px] bottom-[50px] justify-center items-center font-extralight border border-solid border-[#555] rounded-[100px] px-[10px] cursor-pointer hidden group-hover:flex'>
						<span>See more</span>
						<ArrowForwardIosIcon className='text-[#555] text-[14px]' />
					</Link>
				</div>
			</StylesItem>
		</>
	);
}
