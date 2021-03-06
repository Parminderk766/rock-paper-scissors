import React, {Component} from 'react';
import PlayerCard from "./PlayerCard";

class Game extends Component {
  constructor() {
    super();
    this.signs = ['rock', 'scissors', 'paper']
    this.state = {
      playerOne: "rock",
      playerTwo: "scissors",
    }
  }

  playGame = () => {
    this.setState({
      playerOne: this.signs[Math.floor(Math.random() * 3)],
      playerTwo: this.signs[Math.floor(Math.random() * 3)]
    })
  }

  decideWinner = () => {
    let {playerOne} = this.state;
    let {playerTwo} = this.state;
    if(playerOne === "rock" && playerTwo === "scissors"){
        return "Player 1 Wins";
    } else if(playerOne === "scissors" && playerTwo === "paper"){
        return "Player 1 Wins";
    } else if(playerOne === "paper" && playerTwo === "rock"){
        return "Player 1 Wins";
    } else if(playerOne === playerTwo){
        return "It's a Tie";
    } else {
      return "Player 2 Wins";
    }
  }

  render() {
    return (
      <div className="style">
        <div>
          <PlayerCard sign = {this.state.playerOne} />
          <PlayerCard sign = {this.state.playerTwo}/>
        </div>
      <div className = "winner">{this.decideWinner()}</div>
        <button type="button" onClick= {this.playGame}>Play the Game</button>
      </div>
    )
  }
}

export default Game;