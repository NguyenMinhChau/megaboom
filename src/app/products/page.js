'use client';
import HeroGeneral from '@/components/HeroGeneral';
import BACKGROUND_HERO from '@/assets/images/home_page/HOMEPAGE_HERO.jpg';
import ImageMarketing from '@/assets/images/product/marketing.png';
import ImageEcosystem from '@/assets/images/product/ecosystem.png';
import ImageEBranding from '@/assets/images/product/branding.png';
import React from 'react';
import ContentImageLeft from '@/components/ContentImageLeft';
import ContentImageRight from '@/components/ContentImageRight';
import FooterProduct from '@/components/FooterProduct';
import { Paper } from '@mui/material';
import OurApproach from './OurApproach';
import KnowMore from './KnowMore';

export default function ProductUs() {
	return (
		<>
			<HeroGeneral
				title="Opening"
				desc={[,]}
				urlImage={BACKGROUND_HERO?.src}
			/>
			<div className="py-[50px] px-[4vw] lg:px-[13vw]">
				<div className={`flex flex-col gap-2`}>
					<div
						className={`lg:text-[100px] md:text-[80px] text-[60px] text-[#555555] font-normal`}
					>
						Products
					</div>
					<div
						className={`text-[21px] text-[#555555] font-extralight`}
					>
						With a modern and practical working style, we help
						businesses grow in following three primary areas Find
						out how our solutions work!
					</div>
				</div>
				<ContentImageLeft
					urlImage={ImageMarketing?.src}
					desc={[
						`<h1 style='font-size: 36px; color: #51d891; text-align: right'>Ecological System</h1>`,
						`<p style='color: #aeaeae; font-size: 18px; font-weight: 300; text-align: right;'>Design the own system of communication channels to Create qualified acquisition funnel</p>`,
						`<p style='color: #aeaeae; font-size: 18px; font-weight: 300; text-align: right;'>Strategy consulting • Growth planning • Technical development</p>`,
					]}
					descImage=""
				/>
				<Paper elevation={3} sx={{ p: 2, borderRadius: '30px' }}>
					<ContentImageRight
						urlImage={ImageEcosystem?.src}
						desc={[
							`<h1 style='font-size: 36px; color: #51d891; text-align: left'>Marketing Activities</h1>`,
							`<p style='color: #aeaeae; font-size: 18px; font-weight: 300; text-align: left;'>Develop automated support tools which help saving time transaction across platforms</p>`,
							`<p style='color: #aeaeae; font-size: 18px; font-weight: 300; text-align: left;'>Brand positioning • Graphic Aids • PR influencers</p>`,
						]}
						descImage=""
					/>
				</Paper>
				<ContentImageLeft
					urlImage={ImageEBranding?.src}
					desc={[
						`<h1 style='font-size: 36px; color: #51d891; text-align: right'>Branding Services</h1>`,
						`<p style='color: #aeaeae; font-size: 18px; font-weight: 300; text-align: right;'>Connect retable companies to customers and agency pertners through otffne/ online events</p>`,
						`<p style='color: #aeaeae; font-size: 18px; font-weight: 300; text-align: right;'>Intergrated marketing • SEO Lead generation • Campaign activation</p>`,
					]}
					descImage=""
				/>
				<OurApproach />
				<KnowMore />
			</div>
			<FooterProduct />
		</>
	);
}
