import React from 'react';
import { useNavigate } from 'react-router-dom';

const Friend = (props) => {
    const {id, name, username, address} = props.friend;
    const onlyAddress = Object.values(address);
    const getAddress = Object.values(address.geo);

    const navigate = useNavigate();
    const showFriendDetail = () => {
        const path = `/friend/${id}`;
        navigate(path);
    }

    return (
        <div>
            <h2>Name: {name}</h2>
            <button onClick={showFriendDetail}>{username}: {id}</button>
            <p>{onlyAddress.slice(0, 4).join(', ')}, {getAddress.join(', ')}</p>
        </div>
    );
};

export default Friend;