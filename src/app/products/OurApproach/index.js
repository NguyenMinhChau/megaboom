'use client';
import { Paper, styled } from '@mui/material';
import Analyzing_Icon from '@/assets/images/product/analyzing.png';
import Planning_Icon from '@/assets/images/product/planning.png';
import Launching_Icon from '@/assets/images/product/launching.png';
import Evaluating_Icon from '@/assets/images/product/evaluating.png';
import React from 'react';
import { GREEN_PRIMARY_COLOR } from '@/styles/color.global';
import OurApproachItem from './OurApproachItem';

const StylesContainer = styled('div')(({ theme }) => ({
	display: 'flex',
	flexWrap: 'wrap',
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
	width: '100%',
	height: '100%',
}));

export default function OurApproach() {
	return (
		<>
			<div className="w-full flex items-center justify-center flex-col my-[10px]">
				<h1
					className="text-[36px] space-x-7 font-extralight"
					style={{
						color: "#51d891",
					}}
				>
					Our Approach
				</h1>
				<p className="text-[#aeaeae] font-[300] text-[16px] text-center">
					We prioritize effectiveness. Each recommendation is made with the end goal
					{<br />} of assisting customers in achieving their specific objectives
				</p>
				<Paper
					className='shadow-[0_8px_30px_rgb(0,0,0,0.12)]'
					elevation={3}
					sx={{ py: 2, borderRadius: '30px', marginTop: '30px', paddingTop: '50px' }}
				>
					<StylesContainer>
						<OurApproachItem
							title="01. Analyzing"
							description="The foundation of each proposal is an understanding of the industry benchmark and the target user's behavior"
							urlImage={Analyzing_Icon}
						/>
						<OurApproachItem
							title="02. Planning"
							description="Based on analysis phase, we develop strategies and initiatives to help our clients reach their objectives with clear growth roadmap"
							urlImage={Planning_Icon}
						/>
						<OurApproachItem
							title="03. Launching"
							description="Yay, it's time to shine! We keep track the action plan aligned well with the process and project management method"
							urlImage={Launching_Icon}
						/>
						<OurApproachItem
							title="04. Optimizing"
							description="Come back where we start, the critical stage for amplification is the evaluation of OKRs and the timely adjustment to maximize impacts"
							urlImage={Evaluating_Icon}
						/>
					</StylesContainer>
				</Paper>
			</div>
		</>
	);
}
