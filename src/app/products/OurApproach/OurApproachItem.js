'use client';
import Image from 'next/image';
import { styled } from '@mui/material';
import React from 'react';

const StylesItem = styled('div')(({ theme, cols, spacing, className }) => ({
	// mobile
	[theme.breakpoints.up('xs')]: {
		width: `calc((100% / 1) - (${spacing} * 2))`,
	},
	// Tablet
	[theme.breakpoints.between('sm', 'md')]: {
		width: `calc((100% / 2) - (${spacing} * 2))`,
	},
	// PC
	[theme.breakpoints.up('lg')]: {
		width: `calc((100% / ${cols}) - (${spacing} * 2))`,
	},

	[theme.breakpoints.between('md', 'lg')]: {
		width: '44vw',
	},
	color: '#000000',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'space-between',
	overflow: 'hidden',
	'&:hover': {
		transition: 'all 0.3s linear',
	},
	...className,
}));

export default function OurApproachItem({ urlImage, title, description }) {
	return (
		<>
			<StylesItem
				cols={4}
				spacing="8px"
				className={`overflow-hidden group duration-500 transition-all`}
			>
				<Image
					src={urlImage}
					className={`w-[80px] h-[80px]`}
					objectFit="contain"
					width={80}
					height={80}
					style={{
						aspectRatio: 1,
					}}
				/>
				<div className="p-3 flex flex-1 flex-col items-center font-extralight">
					<div className={`font-[500] text-[#666] text-[21px] my-4`}>{title}</div>
					<p
						className={`text-[#666] font-[300] text-[16px] text-center`}
					>
						{description}
					</p>
				</div>
			</StylesItem>
		</>
	);
}
