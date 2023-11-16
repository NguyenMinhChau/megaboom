'use client';
import React from 'react';
import className from 'classnames/bind';
import styles from './styles.module.css';

const cx = className.bind(styles);

export default function ContentImageLeft({
	titleHeader,
	title,
	desc = [],
	urlImage,
	children,
	descImage,
	fontSizeTitle,
	styleDescImage,
	styleContainer,
}) {
	return (
		<div
			className={`${cx(
				'content-container',
			)} lg:flex-row md:flex-row flex-col-reverse px-[40px] py-[30px] sm:py-[60px] ${styleContainer}`}
		>
			<div
				className={`${cx(
					'content-left',
				)} flex flex-col lg:items-start items-center ${urlImage ? 'justify-start' : 'justify-center'
					} min-w-[130px]`}
			>
				{urlImage && (
					<div
						className={`${cx('left_img')}`}
						style={{
							backgroundImage: `url('${urlImage}')`,
							width: descImage ? '150px' : '250px',
							minWidth: descImage ? '150px' : '200px',
							height: descImage ? '150px' : '250px',
							minHeight: descImage ? '150px' : '200px',
						}}
					></div>
				)}
				{descImage && (
					<div
						className={`font-extralight text-[36px] text-black ${styleDescImage}`}
					>
						{descImage}
					</div>
				)}
			</div>
			<div
				className={`${cx(
					'content-right-container',
				)} w-full flex flex-col justify-center items-start`}
			>
				{titleHeader && (
					<div className={`${cx('title-header')} mb12`}>
						{titleHeader}
					</div>
				)}
				<div className={`${cx('content-right')}`}>
					<div className={`${cx('middle')}`}>
						{title && (
							<div className={`${cx('middle_title')} mb12`}>
								<div
									style={{ fontSize: fontSizeTitle }}
									className={`${cx('title')}`}
									dangerouslySetInnerHTML={{ __html: title }}
								></div>
							</div>
						)}
						<div className={`${cx('middle_desc')}`}>
							{desc.map((item, index) => (
								<div
									className={`${cx(
										'middle_desc_text',
									)} text-[#000] text-[16px] ml-[100px] font-extralight`}
									key={index}
									dangerouslySetInnerHTML={{ __html: item }}
								></div>
							))}
							{children}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
