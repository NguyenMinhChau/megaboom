'use client';
import { useReducer, useMemo } from 'react';
import Context from './context';
import reducer, { initialState } from './reducer';

function UseProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, initialState);
	const contextValue = useMemo(
		() => ({ state, dispatch }),
		[state, dispatch],
	);
	return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}

export default UseProvider;
