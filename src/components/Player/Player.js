import React from 'react';
import './Player.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faPlus } from '@fortawesome/free-solid-svg-icons'
// import { Button } from 'react-bootstrap';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
const Player = (props) => {

    const { name, gender, currentClub, salary, img } = props.player;
    return (
        <div className="player">
        
            <div className="player-data">
                <img src={img} alt="" />
                <h3>Name:  {name}</h3>
                <h5>Club:  {currentClub}</h5>
                <p>Salary:  {salary}</p>
                <p><small>Gender:  {gender}</small></p>

                <button className="btn btn-primary" onClick={()=>{props.handleAddClick(props.player)}}> <FontAwesomeIcon icon={faPlus}/> {" "} ADD TO CLUB</button>
            </div>
        </div>
    );
};

export default Player;