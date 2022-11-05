import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {SocketProvider} from "./contexts/socketContext";
import './styles/globals.css'
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import GamePage from "./pages/GamePage";
import LobbyPage from "./pages/LobbyPage";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <SocketProvider>
          <BrowserRouter>
              <Routes>
                  {/*Loader parameter in Route??? useful?*/}
                  <Route path="/" element={<App/>}/>
                  <Route path="/game/:lobbyIdParam" element={<GamePage/>}/>
                  <Route path="/lobby/:lobbyIdParam" element={<LobbyPage/>}/>

              </Routes>
          </BrowserRouter>
      </SocketProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
