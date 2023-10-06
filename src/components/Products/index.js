'use client';
import { styled } from '@mui/material';
import BgcImageProcessing from '@/assets/images/product_cta_outLibrary/image_processing.png';
import React from 'react';
import ProductItem from './ProductItem';
import { PRIMARY_COLOR } from '@/styles/color.global';

const StylesContainer = styled('div')(({ theme }) => ({
	display: 'flex',
	flexWrap: 'wrap',
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
	gap: '25px',
	width: '100%',
	height: '100%',
}));

export default function Product() {
	return (
		<>
			<div className="w-full flex items-center justify-center flex-col my-[10px] lg:my-[60px] px-[4vw] lg:px-[13vw]">
				<h1
					className="text-[40px] space-x-7"
					style={{
						color: PRIMARY_COLOR,
					}}
				>
					Products
				</h1>
				<p className="text-gray-400">
					Empower the opportunities and connections
				</p>
				<StylesContainer>
					<ProductItem
						title="Ecological system"
						description="Design the own system of communication channels to create qualified acquisition funnel"
						urlImage={BgcImageProcessing}
					/>
					<ProductItem
						title="Branding services"
						description="onnect reliable companies to customers and agency partners through offline/online events"
						urlImage={BgcImageProcessing}
					/>
					<ProductItem
						title="Automated tools"
						description="Develop automated support tools which help saving time transaction across platforms"
						urlImage={BgcImageProcessing}
					/>
				</StylesContainer>
			</div>
		</>
	);
}
