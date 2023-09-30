'use client';
import HeroGeneral from '@/components/HeroGeneral';
import BACKGROUND_HERO from '@/assets/images/home_page/HOMEPAGE_HERO.jpg';
import ImageMax from '@/assets/images/core_value/icon-05.png';
import React from 'react';
import ContentImageLeft from '@/components/ContentImageLeft';
import ContentImageRight from '@/components/ContentImageRight';

export default function ProductUs() {
	return (
		<>
			<HeroGeneral
				title="Opening"
				desc={[,]}
				urlImage={BACKGROUND_HERO?.src}
			/>
			<div className="py-[50px] px-[170px]">
				<ContentImageLeft
					urlImage={ImageMax?.src}
					desc={[`Branding service`]}
					descImage="Mission"
				/>
				<ContentImageRight
					urlImage={ImageMax?.src}
					desc={[`Ecological systems`]}
					descImage="Vision"
				/>
				<ContentImageLeft
					urlImage={ImageMax?.src}
					desc={[`Automated tools`]}
					descImage="Mission"
				/>
			</div>
		</>
	);
}
