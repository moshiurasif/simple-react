import React, { useEffect, useState } from 'react';
import './Home.css'
import playerData from '../../data/data.json'
import Player from '../Player/Player';
import PlayerSelect from '../PlayerSelect/PlayerSelect';

const Home = () => {
    const [cart, setCart]=useState([])
    const handleAddClick = (props) => {
        const newCart = [...cart, props]
        setCart(newCart);
        
    }
    console.log(cart);
    //player is a list of array
    const [players, setPlayer] = useState([]);
    useEffect(() => {
        setPlayer(playerData);
    })
    // console.log(player);
    return (
        <div className="home">
            <div className="name-unit">
                <div>
                    {
                        players.map(player => <Player player={player} id={player.id} handleAddClick= {handleAddClick} ></Player>)
                    }
                </div>
            </div>
            <div className='cart-unit'>
                <PlayerSelect cart = {cart}></PlayerSelect>
            </div>
        </div>
    );
};

export default Home;