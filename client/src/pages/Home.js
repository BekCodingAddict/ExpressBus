import React from 'react';
import { useSelector } from 'react-redux';

function Home(){
    const {user}=useSelector(state=>state.users)
    return (
        <div>
            {user && <h1>Welcome Back {user?.name} !</h1>}
            {user && <h3>Email:{user.email}</h3>}
        </div>
    )
}

export default Home;