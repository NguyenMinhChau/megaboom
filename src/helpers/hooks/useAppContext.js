import { Context } from '@/appState';
import { useContext } from 'react';

export default function useAppContext() {
	const { state, dispatch } = useContext(Context);
	return { state, dispatch };
}
