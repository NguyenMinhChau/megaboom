'use client';
import HeroGeneral from '@/components/HeroGeneral';
import BACKGROUND_HERO from '@/assets/images/home_page/HOMEPAGE_HERO.jpg';
import ImageMarketing from '@/assets/images/product/marketing.png';
import ImageEcosystem from '@/assets/images/product/ecosystem.png';
import ImageEBranding from '@/assets/images/product/ecosystem01.png';
import React from 'react';
import ContentImageLeft from '@/components/ContentImageLeft';
import ContentImageRight from '@/components/ContentImageRight';
import FooterProduct from '@/components/FooterProduct';
import { Paper } from '@mui/material';
import OurApproach from './OurApproach';
import KnowMore from './KnowMore';
import HeroProduct from '@/components/HeroProduct';

export default function ProductUs() {
	return (
		<>
			<HeroProduct />
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
						businesses grow in following {<br />} three primary
						areas. Find out how our solutions work!
					</div>
				</div>
				<ContentImageLeft
					urlImage={ImageEcosystem?.src}
					desc={[
						`<h1 style='font-size: 36px; color: #51d891; text-align: right'>Ecological System</h1>`,
						`<p style='color: #aeaeae; font-size: 16px; font-weight: 300; text-align: right;'>Megaboom brings an integrated portfolio of consulting, experience, and expertise to design your own brand's ecological system for generating successful customer acquisition funnel and network expansion</p>`,
						`<p style='color: #000; font-size: 16px; font-weight: 300; text-align: right;'>Strategy consulting • Growth planning • Technical development</p>`,
					]}
					descImage=""
				/>
				<div className="mt-[40px]">
					<ContentImageRight
						urlImage={ImageMarketing?.src}
						desc={[
							`<h1 style='font-size: 36px; color: #51d891; text-align: left'>Marketing Activities</h1>`,
							`<p style='color: #aeaeae; font-size: 16px; font-weight: 300; text-align: left;'>Applying various digital platforms, we develop customized marketing strategies with relevant execution plan that optimize available resources. All initiatives become lively through our hands-on fintech insight</p>`,
							`<p style='color: #000; font-size: 16px; font-weight: 300; text-align: left;'>Intergrated marketing • SEO • Lead generation • Campaign activation</p>`,
						]}
						descImage=""
					/>
				</div>
				<ContentImageLeft
					urlImage={ImageEBranding?.src}
					desc={[
						`<h1 style='font-size: 36px; color: #51d891; text-align: right'>Branding Services</h1>`,
						`<p style='color: #aeaeae; font-size: 16px; font-weight: 300; text-align: right;'>We help clients drive purposeful, sustainable and impactful brand positioning in modern landscape. Spread out your brand image to target customers and agency partners through both offline and online activities</p>`,
						`<p style='color: #000; font-size: 16px; font-weight: 300; text-align: right;'>Brand positioning • Graphic Aids • PR & influencers</p>`,
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
