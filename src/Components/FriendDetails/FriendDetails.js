import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetails = () => {
    const {id} = useParams()
    const [friend , setFriend] = useState({})
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/users/${id}`;
        fetch(url)
        .then(res =>res.json())
        .then(data=>setFriend(data))
    },[])

    return (
        <div>
            <h1>{friend.name}</h1>
            <h2>{friend.email}</h2>
            <p>City :  {friend?.address?.city}</p>
            {/* <p>City :  {friend.address.zipcode}</p> */}

        </div>
    );
};

export default FriendDetails;