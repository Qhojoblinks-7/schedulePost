import React from 'react';
import { Link } from 'react-router-dom';

const HomeScreen = () => {
    return (
        <div>
            <h1>Welcome to Media Blog Scheduler</h1>
            <Link to="/schedule">Schedule a Post</Link>
        </div>
    );
};

export default HomeScreen;
