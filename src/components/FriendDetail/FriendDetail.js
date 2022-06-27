import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const {friendId} = useParams();
    const [friend, setFriend] = useState({});

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setFriend(data))
    }, [])

    return (
        <div style={{border: '2px solid salmon', borderRadius: '8px', margin: '2em 15em 2em 15em'}}>
            <h2 style={{border: '2px solid green', borderRadius: '8px', margin: '1em 1em 0em 1em'}}>This is Detail about a Friend: {friendId}</h2>
            <h3>Name: {friend.name}</h3>
            <h4>Email: {friend.email}</h4>
            <h5>Website: {friend.website}</h5>
            <p>City: {friend.address?.city}</p>
            <p>Lat: {friend.address?.geo?.lat}</p>
            <p>Lng: {friend.address?.geo?.lng}</p>
        </div>
    );
};

export default FriendDetail;