'use client';
import React from 'react';
import BACKGROUND_HERO from '@/assets/images/home_page/HOMEPAGE_HERO.jpg';
import ImageMax from '@/assets/images/core_value/icon-05.png';
import ImageEco from '@/assets/images/core_value/icon-06.png';
import HeroGeneral from '@/components/HeroGeneral';
import ContentImageLeft from '@/components/ContentImageLeft';
import OurTeams from '@/components/OurTeams';

export default function AboutUs() {
	return (
		<>
			<HeroGeneral
				title="Profile Company"
				desc={[
					`Established in 2022, Megaboom Co., Ltd. is a media, advertising, event organization and technology development service company in the financial sector.`,
				]}
				urlImage={BACKGROUND_HERO?.src}
			/>
			<div className="py-[50px] px-[13vw]">
				<ContentImageLeft
					urlImage={ImageMax?.src}
					desc={[
						`Helping to open up a new perspective of the financial market in Vietnam, Megaboom creates the real opportunity for trustworthy financial institutes to interact and promote their products and service to qualified leads through sustainable marketing activities.`,
					]}
					descImage="Mission"
				/>
				<ContentImageLeft
					urlImage={ImageEco?.src}
					desc={[
						`To create the deepest connection in our ecosystem and the widest spread of interaction with end-users.`,
					]}
					descImage="Vision"
				/>
				<OurTeams
					desc={[
						`People and Product are at the core of Megaboom's identity. We have established a dynamic environment in which all members can unlock their full potential. With the motto "striving for excellence", we believe that each member of the team has their own color and contribution to from a unique Megaboom through five key characteristics: Sicere, Collaborative, Talented, Respect, Joyful. This is also a prerequisite for our team to grow together, there by solidifying our position as one of the leading media units in financial sector.`,
					]}
					urlImage={ImageMax?.src}
				/>
			</div>
		</>
	);
}
