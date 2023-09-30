'use client';
import React from 'react';
import className from 'classnames/bind';
import styles from './styles.module.css';
import Link from 'next/link';

const cx = className.bind(styles);

function Button({
	to,
	className,
	onClick,
	disabled,
	isProcess = false,
	children,
	passProps,
}) {
	let Cp = 'button';
	const classed = cx('button', { [className]: className, disabled });
	const props = {
		...passProps,
		onClick,
	};
	if (to) {
		props.to = to;
		Cp = Link;
	}
	if (disabled) {
		Object.keys(props).forEach((key) => {
			if (key.startsWith('on') && typeof props[key] !== 'function') {
				delete props[key];
			}
		});
	}
	return (
		<Cp className={classed} {...props}>
			{!isProcess ? (
				children
			) : (
				<i
					className="bx bx-loader bx-spin bx-rotate-90"
					style={{ color: '#000' }}
				></i>
			)}
		</Cp>
	);
}

export default Button;
