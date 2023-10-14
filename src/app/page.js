'use client';
import Hero from '@/components/Hero';
import CoreValue from '@/components/CoreValue';
import BackgroundCTA from '@/assets/images/product_cta_outLibrary/BG_CTA.jpg';
import Product from '@/components/Products';
import CTA from '@/components/CTA';
import OurLibrary from '@/components/OurLibrary';
import OurClient from '@/components/OurClient';
import Footer from '@/components/Footer';

export default function Home() {
	return (
		<>
			<div className={`w-full flex flex-col justify-between items-center`}>
				<Hero />
				<CoreValue />
				<div className="xl:hidden">
					<Product />
				</div>
				<div
					className="2xl:w-[1400px] w-full flex justify-between items-center h-[600px] lg:h-[1200px] relative"
					style={{
						backgroundImage: `url(${BackgroundCTA?.src})`,
						backgroundSize: '100% 70%',
						backgroundRepeat: 'no-repeat',
						backgroundPosition: 'center',
					}}
				>
					<div className="absolute hidden lg:block top-[-15%] left-0 right-0">
						<Product />
					</div>
					<CTA />
					<div className="absolute hidden lg:block bottom-[-15%] left-0 right-0">
						<OurLibrary />
					</div>
				</div>
				<div className="xl:hidden">
					<OurLibrary />
				</div>
				<OurClient />
			</div>
			<Footer />
		</>
	);
}
