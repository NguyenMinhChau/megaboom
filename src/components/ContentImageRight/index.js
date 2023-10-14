'use client';
import React from 'react';
import className from 'classnames/bind';
import styles from './styles.module.css';

const cx = className.bind(styles);

export default function ContentImageRight({
	title,
	desc = [],
	urlImage,
	children,
	descImage,
	styleDescImage,
	styleContainer,
}) {
	return (
		<div
			className={`${cx(
				'content-container',
			)} py-[20px] sm:py-[60px] lg:flex-row md:flex-row flex-col-reverse ${styleContainer}`}
		>
			<div
				className={`${cx(
					'content-left',
				)} w-full flex flex-col justify-start items-start`}
			>
				<div className={`${cx('middle')}`}>
					{title && (
						<div className={`${cx('middle_title')} mb12`}>
							<div
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
								)} text-black`}
								key={index}
								dangerouslySetInnerHTML={{ __html: item }}
							></div>
						))}
						{children}
					</div>
				</div>
			</div>
			<div
				className={`${cx(
					'content-right',
				)} flex flex-col lg:items-end items-center ${
					urlImage ? 'justify-start' : 'justify-center'
				} flex-1`}
			>
				{urlImage && (
					<div
						className={`${cx('right_img')}`}
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
						className={`font-bold text-[30px] text-black ${styleDescImage}`}
					>
						{descImage}
					</div>
				)}
			</div>
		</div>
	);
}
