import React from 'react';
import { Link } from 'react-router-dom';



const Friend = ({friend}) => {
    const { id , name } = friend;
    // const navigate = useNavigate();

    // const showDetails = () =>{
    //     const path = `/friends/${id}`
    //     navigate(path)
    // }
    return (
        <div style={{background:'gray' , margin:'10px'}}>
            <h1>{name}</h1>
            <Link to={`/friend/${id}`}>Show More</Link>

            {/* <button onClick={showDetails}>More Details</button> */}

        </div>
    );
};

export default Friend;