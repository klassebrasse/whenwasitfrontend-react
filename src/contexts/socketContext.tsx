import * as React from "react";
import {io} from "socket.io-client";
import {ISocket} from "../types/ISocket";
import {createContext, useContext, useEffect, useState} from "react";


const socket = io();
const SocketContext = createContext(socket);

export function useSocket() {
    return useContext(SocketContext);
}

export function SocketProvider({ children }: any) {
    //Add ISocket, store user data
    const [currentSocket, setCurrentSocket] = useState<ISocket>(null);
    useEffect(() => {


        return () => setCurrentSocket(null)
    }, [])

    return (
        <SocketContext.Provider value={currentSocket}>
            { currentSocket && children}
        </SocketContext.Provider>
    )
}
