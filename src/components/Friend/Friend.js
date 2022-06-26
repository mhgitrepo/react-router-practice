import React from 'react';

const Friend = (props) => {
    const {name, username, address} = props.friend;
    const getAddress = Object.values(address);
    console.log(getAddress);
    return (
        <div>
            <h2>Name: {name}</h2>
            <button>{username}</button>
            <p>{getAddress}</p>
        </div>
    );
};

export default Friend;