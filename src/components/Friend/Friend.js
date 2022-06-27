import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Friend = (props) => {
    const {id, name, username, address} = props.friend;
    const onlyAddress = Object.values(address);
    const getAddress = Object.values(address.geo);

    const navigate = useNavigate();

    const showFriendDetail = () => {
        // navigate('/about/'+ id);
        navigate(`/friend/${id}`);
    }

    return (
        <div>
            <h2>Name: {name}</h2>
            <Link to={'/friend/' + id}>Show Detail</Link>
            <br/>
            <button onClick={showFriendDetail}>{username}: {id}</button>
            <p>{onlyAddress.slice(0, 4).join(', ')}, {getAddress.join(', ')}</p>
        </div>
    );
};

export default Friend;