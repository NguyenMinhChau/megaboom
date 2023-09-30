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
		justifyContent: 'space-between',
	},
	// PC
	[theme.breakpoints.up('lg')]: {
		justifyContent: 'space-between',
	},
	[theme.breakpoints.between('md', 'lg')]: {
		justifyContent: 'space-between',
	},
	'& .item': {
		// mobile
		[theme.breakpoints.up('xs')]: {},
		// Tablet
		[theme.breakpoints.between('sm', 'md')]: {},
		// PC
		[theme.breakpoints.up('lg')]: {},
		[theme.breakpoints.between('md', 'lg')]: {},
		borderRadius: '30px',
		backgroundColor: '#fff',
		color: '#000',
		overflow: 'hidden',
		width: '276px',
		height: '182px',
	},
}));

export default function OurLibrary() {
	return (
		<div className="w-full flex items-center justify-center flex-col my-[60px] px-[170px]">
			<h1
				className={`text-[40px] space-x-7`}
				style={{
					color: PRIMARY_COLOR,
				}}
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
