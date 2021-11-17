import React, { useReducer } from 'react';

export const BoardClickCountContext = React.createContext();

function ClickCounterReducer(state, action) {
    if (action.type === "boardClick") {
        return state + 1;
    }
    return state;
}

export function BoardClickCountProvider(props) {
    const [state, dispatch] = useReducer(ClickCounterReducer, 10);

    return <BoardClickCountContext.Provider value={[state, dispatch]}>
        {props.children}
    </BoardClickCountContext.Provider>
} 