'use client';

import React from 'react';
import className from 'classnames/bind';
import { Paper, TextareaAutosize } from '@mui/material';
import styles from './styles.module.css';
import { useAppContext } from '@/helpers';
import FormInput from '@/components/FormInput';
import SelectValue from '@/components/SelectValue';
import Button from '@/components/Button';
import { setData } from '@/appState/reducer';
import FooterContactUs from '@/components/FooterContactus';
import HeroContactUs from '@/components/HeroContactUs';

const cx = className.bind(styles);

export default function ContactUs() {
	const { dispatch, state } = useAppContext();
	const { username, email, phone, purpose, content } = state.set;
	const [showSelect, setShowSelect] = React.useState(false);

	const handleChangeForm = (name, val) => {
		dispatch(
			setData({
				[name]: val,
			}),
		);
	};

	return (
		<>
			<div className="relative w-full h-full">
				<HeroContactUs />
				<div className="absolute top-[100%] right-0 left-0">
					<div className="py-[50px] px-[4vw] lg:px-[13vw]">
						<Paper
							className='shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-4 lg:p-16'
							elevation={3}
							sx={{ borderRadius: '30px' }}
						>
							<div className={`${cx('form_container')}`}>
								<FormInput
									placeholder="Your full name"
									name="username"
									value={username}
									classNameInput={`${cx('input_custom')}`}
									onChange={(e) =>
										handleChangeForm(
											'username',
											e.target.value,
										)
									}
								/>
								<FormInput
									placeholder="Email"
									name="email"
									value={email}
									classNameInput={`${cx('input_custom')}`}
									onChange={(e) =>
										handleChangeForm(
											'email',
											e.target.value,
										)
									}
								/>

								<FormInput
									placeholder="Phone"
									name="phone"
									value={phone}
									classNameInput={`${cx('input_custom')}`}
									onChange={(e) =>
										handleChangeForm(
											'phone',
											e.target.value,
										)
									}
								/>
								<SelectValue
									value={purpose}
									placeholder="Purpose: Please choose one of the following here..."
									data={[
										{ value: 1, label: 'Option 1' },
										{ value: 2, label: 'Option 2' },
										{ value: 3, label: 'Option 3' },
									]}
									nameSet="purpose"
									stateSelect={showSelect}
									setStateSelect={setShowSelect}
								/>
								<TextareaAutosize
									minRows={5}
									maxRows={8}
									placeholder="Type your message here..."
									value={content}
									onChange={(e) => {
										handleChangeForm(
											'content',
											e.target.value,
										);
									}}
									name="content"
									className={`${cx('textarea')}`}
								/>
								<div className="flex items-center justify-center">
									<Button className={`${cx('btn')}`}>
										Submit
									</Button>
								</div>
							</div>
						</Paper>
					</div>
					<FooterContactUs />
				</div>
			</div>
		</>
	);
}
