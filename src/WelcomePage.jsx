import React from 'react';
import { Link } from 'react-router-dom';

export default function WelcomePage() {

    return (<div class="WelcomePage">
        <h1>
        Welcome to Tic-Tac-Toe!
        </h1>
        <Link to={"/gameBoard"}>Play Game</Link>
    </div>)

}