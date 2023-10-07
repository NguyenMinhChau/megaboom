'use client';
import React from 'react';
import { styled } from '@mui/material';
import BgcImageProcessing from '@/assets/images/product_cta_outLibrary/image_processing.png';
import Link from 'next/link';
import { PRIMARY_COLOR } from '@/styles/color.global';
import OurLibraryItem from './OurLibraryItem';

const StylesContainer = styled('div')(({ theme, cols, spacing }) => ({
	display: 'flex',
	flexWrap: 'wrap',
	alignItems: 'center',
	gap: '16px',
	width: '100%',
	height: '100%',
	marginTop: '30px',
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
		[theme.breakpoints.up('xs')]: {
			width: '92vw',
		},
		// Tablet
		[theme.breakpoints.between('sm', 'md')]: {
			width: '44vw',
		},
		// PC
		[theme.breakpoints.up('lg')]: {
			width: '276px',
		},
		[theme.breakpoints.between('md', 'lg')]: {
			width: '44vw',
		},
		borderRadius: '30px',
		backgroundColor: '#fff',
		color: '#000',
		overflow: 'hidden',
		height: '182px',
	},
}));

export default function OurLibrary() {
	return (
		<div className="w-full flex items-center justify-center flex-col my-[10px] xl:my-[60px] px[4vw] xl:px-[13vw]">
			<h1
				className={`text-[40px] space-x-7 text-[#2766f1] xl:text-[#fff]`}
			>
				Our Library
			</h1>
			<StylesContainer cols={3} spacing="8px">
				<OurLibraryItem
					urlBgc={BgcImageProcessing?.src}
					title="Image Classification"
					description="Interpret and categorize different objects in images
							or videos"
				/>
				<OurLibraryItem
					urlBgc={BgcImageProcessing?.src}
					title="Image Classification"
					description="Interpret and categorize different objects in images
							or videos"
				/>
				<OurLibraryItem
					urlBgc={BgcImageProcessing?.src}
					title="Image Classification"
					description="Interpret and categorize different objects in images
							or videos"
				/>
				<OurLibraryItem
					urlBgc={BgcImageProcessing?.src}
					title="Image Classification"
					description="Interpret and categorize different objects in images
							or videos"
				/>
				<OurLibraryItem
					urlBgc={BgcImageProcessing?.src}
					title="Image Classification"
					description="Interpret and categorize different objects in images
							or videos"
				/>
				<OurLibraryItem
					urlBgc={BgcImageProcessing?.src}
					title="Image Classification"
					description="Interpret and categorize different objects in images
							or videos"
				/>
			</StylesContainer>
		</div>
	);
}
