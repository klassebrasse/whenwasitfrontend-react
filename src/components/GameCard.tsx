import {IGame} from "../types/IGame";
import {Alert, Button, Card, CardActionArea, CardActions, CardHeader, Grid} from "@mui/material";
import styles from "../styles/Home.module.css";
import {useNavigate} from "react-router-dom";
function GameCard(game: IGame) {
    const navigate = useNavigate();

    return(
        <Grid item xs={6} sm={6} key={game.name} >
            <Card className={styles.card} onClick={() => navigate("/game/" + game.name.toLowerCase())}>
                    <CardHeader
                        title={game.name}
                        subheader={<p>{"Players: " + game.players}</p>}
                    />
            </Card>
        </Grid>
    )
}

export default GameCard;