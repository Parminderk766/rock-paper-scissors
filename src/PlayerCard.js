import React from 'react';

const scissors = "https://i.imgur.com/pgjyhIZ.png";
const rock = "https://i.imgur.com/LghSkIw.png";
const paper = "https://i.imgur.com/2gsdqvR.png";
const PlayerCard = (props) => {
    let img;
    if(props.sign === 'rock'){
        img = rock;
    } else if(props.sign === 'scissors'){
        img = scissors;
    } else {
        img = paper;
    }
    return (
      <div className="playerCard"><img src = {img}/></div>
    )
}

export default PlayerCard;