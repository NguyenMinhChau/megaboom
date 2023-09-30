'use client';
import Image from 'next/image';
import { styled } from '@mui/material';
import React from 'react';

const StylesItem = styled('div')(
	({ theme, cols, spacing, colorBgcHover, className }) => ({
		// mobile
		[theme.breakpoints.up('xs')]: {},
		// Tablet
		[theme.breakpoints.between('sm', 'md')]: {},
		// PC
		[theme.breakpoints.up('lg')]: {},
		[theme.breakpoints.between('md', 'lg')]: {},
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
		width: '200px',
		'&:hover': {
			transition: 'all 0.3s linear',
			color: '#ffffff',
			backgroundColor: colorBgcHover,
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
				className={`shadow-lg group duration-500 transition-all`}
			>
				<Image
					src={urlImage}
					className={`w-[80px] h-[80px] mb-5 group-hover:hidden`}
					objectFit="contain"
				/>
				<div className={`text-[21px] my-4`}>{title}</div>
				<p
					className={`leading-5 text-center font-extralight text-[14px] hidden group-hover:block`}
				>
					{description}
				</p>
			</StylesItem>
		</>
	);
}
