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
			)} py-[30px] px-[40px] lg:min-h-[220px] items-center sm:py-[60px] lg:flex-row flex-col-reverse ${styleContainer}`}
		>
			<div
				className={`${cx(
					'content-left',
				)} w-full lg:w-[62%] flex flex-col justify-start items-start`}
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
								)} text-black font-extralight`}
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
				)} flex md:relative lg:absolute flex-col lg:items-end items-center ${urlImage ? 'justify-start' : 'justify-center'
					} flex-1`}
			>
				{urlImage && (
					<div
						className={`${cx('right_img')}`}
						style={{
							backgroundImage: `url('${urlImage}')`,
							width: descImage ? '150px' : '362px',
							minWidth: descImage ? '150px' : '200px',
							height: descImage ? '150px' : '362px',
							minHeight: descImage ? '150px' : '200px',
							objectFit: 'cover'
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
		</div>
	);
}
