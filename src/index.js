import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Board from './Board'
import { createStore} from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers/reducers';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import WelcomePage from './WelcomePage';
import { BoardClickCountProvider } from './BoardClickCountProvider';


const store = createStore(reducers);

ReactDOM.render(
  <BoardClickCountProvider>
  <Provider store={store} >
    <h2>Hunter's Tic Tac Toe</h2>
 
    <Router>
    <Link to={"/"}>Home</Link>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/gameBoard/:gameType" element={<Board />} />
      </Routes>
    </Router>
  </Provider>
  </BoardClickCountProvider>,
  document.getElementById('root')
);
