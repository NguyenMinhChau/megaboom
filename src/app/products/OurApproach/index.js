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
					className="text-[40px] space-x-7"
					style={{
						color: GREEN_PRIMARY_COLOR,
					}}
				>
					Our Approach
				</h1>
				<p className="text-gray-400 text-center">
					We prioritize effectiveness Each recommendation is made with
					the end goal of assisting customers tn achieving their
					specific objectives
				</p>
				<Paper
					elevation={3}
					sx={{ py: 2, borderRadius: '30px', marginTop: '30px' }}
				>
					<StylesContainer>
						<OurApproachItem
							title="01. Analyzing"
							description="The foundation of each proposal an understanding of the Industry benchmark and the target user's behavior"
							urlImage={Analyzing_Icon}
						/>
						<OurApproachItem
							title="02. Planning"
							description="Based on analysis phase. we develop strategies and Inltlatlves to help our clients reach they objectives With clear growth roadmap"
							urlImage={Planning_Icon}
						/>
						<OurApproachItem
							title="03. Launching"
							description="Yay. It's tme to shlnel We keep track the action plan aligned well With the process and project management method"
							urlImage={Launching_Icon}
						/>
						<OurApproachItem
							title="04. Optimizing"
							description="The cntlcal stage for amplification the evaluation of OKRs and the timely adjustment to manmze Impacts"
							urlImage={Evaluating_Icon}
						/>
					</StylesContainer>
				</Paper>
			</div>
		</>
	);
}
