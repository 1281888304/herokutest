// import SmallerSquare from "./SmallerSquare";
import React, { useContext, useReducer } from 'react';
import { useDispatch } from 'react-redux';
import { BoardClickCountContext } from './BoardClickCountProvider';
import './Square.css';


function exclamationReducer(state, action) {


    if (action.type === "CLICK") {
        if (action.symbol === 'X') {
            return '!'
        } else {
            return '?'
        }
    }
    return state;
}

export function Square(props) {
    const [globalCountState, globalCountDispatch] = useContext(BoardClickCountContext);

    const symbol = props.symbol;
    // useEffect(() => alert(symbol + " just played"), [symbol]);
    
    // const [state, setState] = useState(props.symbol);
    let borderColor = 'purpleBorder';
    if (symbol === '0') {
        borderColor = 'blueBorder';
    } else if (symbol === '') {
        borderColor = 'blackBorder';
    }

    const dispatch = useDispatch();

    return (<div onClick={() => {
        dispatch({
            type: 'boardClick',
            x: props.x,
            y: props.y,
        })
        globalCountDispatch({
            type: "boardClick",
            symbol,
        })
    }
    } id="square" class={borderColor}>
        {symbol}
    </div>);
}

   // if (state === 'X') {
    //     setState('0');
    // } else if (state === '0') {
    //     setState('');
    // } else {
    //     setState('X')
    // }

// export function SmallerSquare(props) {
//     const [countState, setCountState] = useState(0)
//     return (<div onClick={() => setCountState(100 + countState)}>
//         Click Count: {countState}
//         </div>)
// }