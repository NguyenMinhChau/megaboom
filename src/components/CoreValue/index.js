'use client';
import { styled } from '@mui/material';
import Maximization from '@/assets/images/core_value/icon-05.png';
import Ecosystem from '@/assets/images/core_value/icon-06.png';
import Growth from '@/assets/images/core_value/icon-07.png';
import Accessibility from '@/assets/images/core_value/icon-08.png';
import React from 'react';
import CoreValueItem from './CoreValueItem';
import {
	GREEN_PRIMARY_COLOR,
	PRIMARY_COLOR,
	SECONDARY_COLOR,
	YELLOW_PRIMARY_COLOR,
} from '@/styles/color.global';

const StylesContainer = styled('div')(({ theme }) => ({
	display: 'flex',
	flexWrap: 'wrap',
	padding: '0 170px',
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
	gap: '25px',
	width: '100%',
	height: '100%',
}));

export default function CoreValue() {
	return (
		<>
			<div className="w-full flex items-center justify-center flex-col mt-[60px] mb-[180px]">
				<h1
					className={`text-[40px] space-x-7`}
					style={{
						color: PRIMARY_COLOR,
					}}
				>
					Core Values
				</h1>
				<StylesContainer>
					<CoreValueItem
						title="Maximization"
						description="Optimize the process and available resources with best practice"
						urlImage={Maximization}
						colorBgcHover={PRIMARY_COLOR}
					/>
					<CoreValueItem
						title="Ecosystem"
						description="Bring on the comprehensive ecosystem through bespoke solutions"
						urlImage={Ecosystem}
						colorBgcHover={SECONDARY_COLOR}
					/>
					<CoreValueItem
						title="Growth"
						description="Obtain the sustainability and clear roadmap of growth"
						urlImage={Growth}
						colorBgcHover={GREEN_PRIMARY_COLOR}
					/>
					<CoreValueItem
						title="Accessibility"
						description="Reach out connections in the community and diverse platforms"
						urlImage={Accessibility}
						colorBgcHover={YELLOW_PRIMARY_COLOR}
					/>
				</StylesContainer>
			</div>
		</>
	);
}
