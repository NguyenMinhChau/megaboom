'use client';
import { styled } from '@mui/material';
import Branding from '@/assets/images/product_cta_outLibrary/branding.png';
import ECOSYSTEM from '@/assets/images/product_cta_outLibrary/ecocta.png';
import Marketing from '@/assets/images/product_cta_outLibrary/marketingcta.png';
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
			<div className="w-full flex items-center justify-center flex-col my-[10px] lg:my-[60px] px-[4vw] 2xl:px-[13vw]">
				<h1
					className="text-[40px] space-x-7"
					style={{
						color: PRIMARY_COLOR,
					}}
				>
					Products
				</h1>
				<p className="text-gray-400 text-center">
					Empower the opportunities and connections
				</p>
				<StylesContainer>
					<ProductItem
						title="Ecological system"
						description="An integrated portfolio of consulting, experience and expertise to design your own brand's ecological system"
						urlImage={ECOSYSTEM}
					/>
					<ProductItem
						title="Branding service"
						description="Spread out your brand image to customers and agency partners through offline/ online activities"
						urlImage={Branding}
					/>
					<ProductItem
						title="Marketing activities"
						description="Develop customized marketing strategies and relevant execution plan by our hands-on fintech insight"
						urlImage={Marketing}
					/>
				</StylesContainer>
			</div>
		</>
	);
}
