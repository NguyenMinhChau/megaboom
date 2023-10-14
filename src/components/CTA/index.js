'use client';
import React from 'react';
import { styled } from '@mui/material';
import Link from 'next/link';
import routers from '@/routers/router';
import HandPointing from '@/assets/images/product_cta_outLibrary/hand_pointing_2.png';
import Image from 'next/image';
import { PRIMARY_COLOR } from '@/styles/color.global';

const StylesContainer = styled('div')(({ theme, cols, spacing }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	flexWrap: 'wrap',
	gap: '16px',
	width: '100%',
	height: '100%',
	[theme.breakpoints.up('xs')]: {
		justifyContent: 'center',
	},
	// Tablet
	[theme.breakpoints.between('sm', 'md')]: {
		justifyContent: 'center',
	},
	// PC
	[theme.breakpoints.up('lg')]: {
		justifyContent: 'center',
	},
	[theme.breakpoints.between('md', 'lg')]: {
		justifyContent: 'center',
	},
	'& .item': {
		// mobile
		[theme.breakpoints.up('xs')]: {},
		// Tablet
		[theme.breakpoints.between('sm', 'md')]: {},
		// PC
		[theme.breakpoints.up('lg')]: {},
		[theme.breakpoints.between('md', 'lg')]: {},
		flex: 1,
		display: 'flex',
		flexDirection: 'column',
		color: '#000',
		overflow: 'hidden',
	},
}));

export default function CTA() {
	return (
		<div className="w-full h-full px-[13vw]">
			<StylesContainer cols={2} spacing="8px">
				<div className="item flex-2 flex flex-col justify-center items-start">
					<div className="text-white text-[25px] sm:text-[35px] font-normal">
						Just One click
					</div>
					<div className="text-white text-[25px] sm:text-[35px] font-normal mb-3">
						All-in-one solutions
					</div>
					<div className="text-white text-[18px] font-thin">
						We personalize solutions to match your current status
						and threshold of expectation.
					</div>
					<Link
						href={routers.contact_us}
						className="font-[500] text-center rounded-[100px] w-full lg:w-[269px] text-[16px] mt-3 bg-[#3BA1F2] py-3  border-[2px] border-solid border-white"
						style={{
							color: "#fff",
						}}
					>
						Explore more
					</Link>
				</div>
				<div className="item flex items-center justify-center">
					<Image
						src={HandPointing}
						className={`w-[467px] h-[467px]`}
						objectFit="contain"
					/>
				</div>
			</StylesContainer>
		</div>
	);
}
