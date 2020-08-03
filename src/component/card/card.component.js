import React from "react";
import "./card.styles.css";
import MonsterService from "../../service/MonsterService";

function Card(props) {
    const {monster} = props;
    return (
        <div className='card-container'>
            <img alt="monster" src={MonsterService.getMonsterImageUrl(monster.id)}/>
            <h2>{monster.name}</h2>
            <p>{monster.email}</p>
        </div>
    )
}

export default Card;