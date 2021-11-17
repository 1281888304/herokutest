import React, { useContext, useEffect, useState } from 'react';
import { Square } from "./Square"
import './Board.css'
import { useSelector } from 'react-redux';
import ResetButton from './ResetButton';
import ResetGameBoardOnly from './ResetGameBoardOnlyFunction'
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { BoardClickCountContext } from './BoardClickCountProvider';

export default function Board() {

    const [clickCountGlobalState, countDispatch] = useContext(BoardClickCountContext);
    const dispatch = useDispatch()
    const gameType = useParams().gameType;
    const clickCount = useSelector((state) => state.clickCount)
    const boardState = useSelector((state) => state.game)

    // useEffect(() => dispatch({type: "CREATE_GAME_BOARD", gameType}), [])

    const boardComponent = [];

    for (let i = 0; i < boardState.length; i++) {
        let row = boardState[i];
        for (let j = 0; j < row.length; j++) {
            boardComponent.push((<Square symbol={boardState[i][j]} x={i} y={j} />))
        }
    }

    return (
        <div>
            <h3>{"This is an " + gameType + " game"}</h3>
            <h1>{clickCount}</h1>
            <h1>{"Global State Counter: " + clickCountGlobalState}</h1>
                <div id="board">
            {boardComponent}
            </div>
            <ResetButton text="Reset, pls"/>
            <ResetGameBoardOnly text="Game board only, pls" />
        </div>
    )
}