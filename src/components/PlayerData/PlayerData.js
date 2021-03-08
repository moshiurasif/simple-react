import React from 'react';

const playerData = (props) => {
    // console.log('aaa', props.player);
    const {name, img, salary} = props.player;
    return (
        <div>
            <img src={img} alt=""/>
            <h3>{name}</h3>
            <h5>Salary: {salary}</h5>
        </div>
    );
};

export default playerData;