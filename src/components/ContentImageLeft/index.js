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
	styleImage,
}) {
	return (
		<div
			className={`${cx(
				'content-container',
			)} lg:flex-row md:flex-row flex-col-reverse py-[20px] sm:py-[60px]`}
		>
			<div
				className={`${cx(
					'content-left',
				)} flex flex-col lg:items-start items-center justify-start lg:w-[20%] md:w-[20%] w-[100%]`}
			>
				<div
					className={`${cx('left_img')}`}
					style={{
						backgroundImage: `url('${urlImage}')`,
					}}
				></div>
				{descImage && (
					<div className="font-bold text-[30px] text-black">
						{descImage}
					</div>
				)}
			</div>
			<div
				className={`${cx(
					'content-right-container',
				)} lg:w-[80%] md:w-[80%] w-[100%]`}
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
									)} text-[#000] text-[16px] sm:text-[18px]`}
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
