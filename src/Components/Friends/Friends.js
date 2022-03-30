import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';

const Friends = () => {
    const [friends , setFriends] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data => setFriends(data))
    } , [])
    return (
        <div>
            <h1>Total Friends : {friends.length}</h1>
            {
                friends.map(friend => <Friend friend={friend} key={friend.id}></Friend>)
            }
        </div>
    );
};

export default Friends;