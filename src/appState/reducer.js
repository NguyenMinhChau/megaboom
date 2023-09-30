import { getStore } from '../helpers/localStore/localStore';
import { SET_DATA, SET_TOGGLE } from './actions';

export const initialState = {
	set: {
		currentUser: getStore(),
		userById: null,
		username: '',
		email: '',
		password: '',
		phone: '',
		purpose: '',
		content: '',
		otpCode: '',
		oldPassword: '',
		confirmPassword: '',
		file: [],
	},
	toggle: {},
};

export const setData = (payload) => {
	return {
		type: SET_DATA,
		payload,
	};
};

export const setToggle = (payload) => {
	return {
		type: SET_TOGGLE,
		payload,
	};
};

export default function reducer(state = initialState, action) {
	switch (action?.type) {
		case SET_DATA:
			return {
				...state,
				set: {
					...state.set,
					...action.payload,
				},
			};
		case SET_TOGGLE:
			return {
				...state,
				toggle: {
					...state.toggle,
					...action.payload,
				},
			};
		default:
			return state;
	}
}
