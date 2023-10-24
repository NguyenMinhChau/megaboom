'use client';

const HeroGeneral = ({ title, desc, urlImage, urlImageHero }) => {
	return (
		<>
			<div className={`w-full`}>
				<div
					className={`flex gap-2 flex-row items-center justify-center w-full h-screen px-[4vw] lg:px-[13vw]`}
					style={{
						backgroundImage: `url(${urlImage})`,
						backgroundSize: '100% 100%',
						backgroundPosition: 'center',
						backgroundRepeat: 'no-repeat',
					}}
				>
					<div className="flex flex-2 justify-start items-start flex-col">
						<div
							className={`md:text-[50px] lg:text-[100px] text-[50px] font-medium text-white`}
						>
							{title}
						</div>
						{desc && (
							<div
								className={`text-[21px] font-[200] text-left text-white`}
								dangerouslySetInnerHTML={{ __html: desc }}
							></div>
						)}
					</div>
					{urlImageHero && (
						<div
							className={`flex items-end justify-end flex-1 h-[50%]`}
						>
							<img
								src={urlImageHero}
								alt="hero"
								className={`h-full w-[70%] object-contain`}
							/>
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default HeroGeneral;
