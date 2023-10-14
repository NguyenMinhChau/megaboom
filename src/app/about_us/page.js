'use client';
import React from 'react';
import Image_Team_Work from '@/assets/images/about_us/team_work.png';
import ContentImageLeft from '@/components/ContentImageLeft';
import HeroAboutUs from '@/components/HeroAboutUs';
import { Paper } from '@mui/material';
import ContentImageRight from '@/components/ContentImageRight';
import FooterAboutUs from '@/components/FooterAboutUs';

export default function AboutUs() {
	return (
		<>
			<HeroAboutUs />
			<div className="py-[50px] px-[4vw] lg:px-[13vw]">
				<Paper elevation={3} sx={{ p: 2, borderRadius: '30px' }}>
					<ContentImageLeft
						urlImage={''}
						desc={[
							`<p style='color: #aeaeae; font-size: 18px; font-weight: 300; text-align: left;'>Helping to open up a new perspective of financial market in Vietnam. Megaboom creates the real opportunity for trustworthy financial Institutes to Interact and promote their products and service to qualified leads through sustainable marketing activities</p>`,
						]}
						descImage="Mission"
						styleContainer={`py-[0px!important]`}
						styleDescImage={`text-[#4ca9f3!important] font-normal`}
					/>
				</Paper>
				<Paper
					elevation={3}
					sx={{ p: 2, borderRadius: '30px', margin: '50px 0' }}
				>
					<ContentImageLeft
						urlImage={''}
						desc={[
							`<p style='color: #aeaeae; font-size: 18px; font-weight: 300; text-align: left;'>To create the deepest connection in our ecosystem and the widest spread of interaction with end-users</p>`,
						]}
						descImage="Vision"
						styleContainer={`py-[0px!important]`}
						styleDescImage={`text-[#4ca9f3!important] font-normal`}
					/>
				</Paper>
				<Paper elevation={3} sx={{ p: 2, borderRadius: '30px' }}>
					<ContentImageRight
						urlImage={Image_Team_Work?.src}
						desc={[
							`<h1 style='font-size: 30px; color: #4ca9f3; text-align: left'>Our team</h1>`,
							`<p style='color: #aeaeae; font-size: 18px; font-weight: 300; text-align: left;'>People and Product are at the core of Megaboom's identity We have established a dynamic environment in which all members can unlock their full potential. With the motto "striving for excellence", we believe that each member of the team has their own color and contribution to form a unique Megaboom through five key characteristics Sincere, Collaborative, Talented, Respect. Joyful This is also a prereq-unsite for our team to grow together, thereby solidifying our position as one of the leading media units In financial sector</p>`,
						]}
						descImage=""
						styleContainer={`py-[0px!important]`}
						styleDescImage={`text-[#4ca9f3!important]`}
					/>
				</Paper>
			</div>
			<FooterAboutUs />
		</>
	);
}
