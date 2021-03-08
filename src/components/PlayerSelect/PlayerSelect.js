import React from 'react';
import PlayerData from '../PlayerData/PlayerData';

const PlayerSelect = (props) => {
    const cart = props.cart
    let newSalary = 0;
    for (let i = 0; i < cart.length; i++) {
        const element = cart[i].salary;
        newSalary = element + newSalary;
    }
    return (
        <div >
            <div className='player-select'>
                <h1>Total Players: {cart.length}</h1>
                <h5>Total Budget: {newSalary}</h5>

            </div>
            <div>
                {
                    cart.map(player => <PlayerData player={player}></PlayerData>)   
                }
            </div>
        </div>
    );
};

export default PlayerSelect;