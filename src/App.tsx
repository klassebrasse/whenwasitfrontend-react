import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import {Button, Container, Grid, Modal, Box} from "@mui/material";
import {BeatLoader} from "react-spinners";
import {useSocket} from "./contexts/socketContext";
import {useNavigate} from "react-router-dom";

function Home() {
  const socket = useSocket();
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  function createLobby() {
    setIsOpen(true);
    socket.emit('create lobby', socket.id)
  }

  useEffect(() => {
    socket.on('lobby created', (lobbyId: string) => {
      setIsOpen(true)
      navigate(`/lobby/${lobbyId}`);
    })
  }, [])


  return (
      <Container>
        <Container style={{width: "30vw"}}>
          <Button onClick={() => createLobby()}>
            <h1>Create Lobby</h1>
          </Button>
{/*          <Grid container rowSpacing={2} columnSpacing={5}>
            {gamesdata.map(game => (
                <GameCard name={game.name} players={game.players} key={game.name}/>
            ))}
          </Grid>*/}
        </Container>

        <Modal open={isOpen}>
          <Box sx={style}>
            <h1 style={{color: "#96B1AC"}}>
              Creating lobby
            </h1>
            <Box sx={{display: 'flex', justifyContent: 'center', mt: 2}}>
              <BeatLoader size={28} color="#2a9d8f"/>
            </Box>
          </Box>
        </Modal>

      </Container>
  )
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#264653',
  border: '2px solid #000',
  boxShadow: 24,
  p: 3,
  textAlign: 'center'
};

export default Home;
