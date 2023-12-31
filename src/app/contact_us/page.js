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
import HeroGeneral from '../../components/HeroGeneral';
import IMAGE_HERO from '@/assets/images/contact_us/image_hero.png'
import HOME_HERO from '@/assets/images/contact_us/ContactUs.jpg'

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
				<HeroGeneral
					title="Contact us"
					desc={[
						`Every client's need is unique. We love to hearing from you. <br /> Please fill out form, and we will get in touch shortly.`,
					]}
					urlImage={HOME_HERO?.src}
					urlImageHero={IMAGE_HERO?.src}
				/>
				<div className="absolute top-[80%] right-0 left-0">
					<div className="py-[50px] px-[4vw] lg:px-[13vw]">
						<Paper
							className='!shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] p-4 lg:p-16'
							style={{ borderRadius: '30px' }}
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
										{ value: 1, label: 'Consultancy' },
										{ value: 2, label: 'Enquiry' },
										{ value: 3, label: 'Career' },
										{ value: 4, label: 'Network' },
										{ value: 5, label: 'Other' },
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
