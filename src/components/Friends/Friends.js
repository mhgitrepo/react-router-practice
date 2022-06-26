import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';

const Friends = () => {
    const [friends, setFriends] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setFriends(data))
    }, [])
    return (
        <div>
            <h2>Hello Friend. How are you!</h2>
            <p>Please, if possible lend me some money!! : <span style={{fontWeight: 800}}>{friends.length}</span></p>
            {
               friends.map(friend => <Friend
                key = {friend.id}
                friend = {friend}
               ></Friend>) 
            }
        </div>
    );
};

export default Friends;