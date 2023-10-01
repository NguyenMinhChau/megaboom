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
				<div
					className="w-full flex justify-between items-center h-[1200px] relative"
					style={{
						backgroundImage: `url(${BackgroundCTA?.src})`,
						backgroundSize: '100% 70%',
						backgroundRepeat: 'no-repeat',
						backgroundPosition: 'center',
					}}
				>
					<div className="absolute top-[-15%] left-0 right-0">
						<Product />
					</div>
					<CTA />
					<div className="absolute bottom-[-15%] left-0 right-0">
						<OurLibrary />
					</div>
				</div>
				<OurClient />
			</div>
		</>
	);
}
