import React from "react"; //optional
import Player from "./Player";
import { preparePlayerData, addWinsToPlayers } from "../helpers/playerHelpers";

function PlayerList(props) {

  const players = props.playerData.map((player) => {
    return(
      <Player
        key={player.gamerTag}
        gamerTag={player.gamerTag}
        firstName={player.firstName}
        lastName={player.lastName}
        wins={player.wins}
      />
    )
  });

  return (
    <section className="PlayerList">
      <h1>Current participating players</h1>
      {players}
    </section>
  );
}

export default PlayerList;
