'use client';
import Link from 'next/link';
import Image from 'next/image';

const HeroGeneral = ({ title, desc, urlImage }) => {
	return (
		<>
			<div className={`w-full`}>
				<div
					className={`flex flex-col items-center justify-center w-full h-screen px-[4vw] sm:px-[170px]`}
					style={{
						backgroundImage: `url(${urlImage})`,
						backgroundSize: '100% 100%',
						backgroundPosition: 'center',
						backgroundRepeat: 'no-repeat',
					}}
				>
					<div className="flex justify-center items-center flex-col">
						<h1
							className={`text-[30px] sm:text-[50px] font-medium text-center text-white`}
						>
							{title}
						</h1>
						{desc && (
							<div
								className={`text-white text-[18px] text-center leading-6`}
								dangerouslySetInnerHTML={{ __html: desc }}
							></div>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default HeroGeneral;
