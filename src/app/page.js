'use client';
import Hero from '@/components/Hero';
import CoreValue from '@/components/CoreValue';
import BackgroundCTA from '@/assets/images/product_cta_outLibrary/BG_CTA.jpg';
import Product from '@/components/Products';
import CTA from '@/components/CTA';
import OurLibrary from '@/components/OurLibrary';
import OurClient from '@/components/OurClient';

export default function Home() {
	return (
		<>
			<div className={`w-full`}>
				<Hero />
				<CoreValue />
				<Product />
				<div
					className="w-full h-full flex justify-between items-center py-[70px]"
					style={{
						backgroundImage: `url(${BackgroundCTA?.src})`,
						backgroundSize: '100% 70%',
						backgroundRepeat: 'no-repeat',
						backgroundPosition: 'center',
					}}
				>
					<CTA />
				</div>
				<OurLibrary />
				<OurClient />
			</div>
		</>
	);
}
