'use client';
import Image from 'next/image';
import { styled } from '@mui/material';
import React from 'react';
import { PRIMARY_COLOR, SECONDARY_COLOR } from '@/styles/color.global';

const StylesItem = styled('div')(
	({ theme, cols, spacing, colorBgcHover, className }) => ({
		// mobile
		[theme.breakpoints.up('xs')]: {
			width: '100vw'
		},
		// Tablet
		[theme.breakpoints.between('sm', 'md')]: {
			width: '44vw'
		},
		// PC
		[theme.breakpoints.up('lg')]: {
			width: '200px',
		},
		[theme.breakpoints.between('md', 'lg')]: {
			width: '200px',
		},
		backgroundColor: '#ffffff',
		color: '#000000',
		borderRadius: '30px',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		overflow: 'hidden',
		padding: '12px',
		height: '200px',
		'&:hover': {
			transition: 'all 0.3s linear',
			backgroundColor: colorBgcHover,
			color: `${colorBgcHover === PRIMARY_COLOR || colorBgcHover === SECONDARY_COLOR ? "#fff" : "#333"}`
		},
		...className,
	}),
);

export default function CoreValueItem({
	urlImage,
	colorBgcHover,
	title,
	description,
}) {
	return (
		<>
			<StylesItem
				cols={4}
				spacing="8px"
				colorBgcHover={colorBgcHover}
				className={`shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] group duration-500 transition-all`}
			>
				<Image
					src={urlImage}
					className={`w-[80px] h-[80px] mb-5 group-hover:hidden`}
					objectFit="contain"
				/>
				<div className={`text-[21px]`}>{title}</div>
				<p
					className={`leading-5 text-center font-extralight text-[14px] hidden group-hover:block`}
				>
					{description}
				</p>
			</StylesItem>
		</>
	);
}
