import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './HomePage.css';

const HomePage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // Load posts from localStorage
        const savedPosts = localStorage.getItem('studyPosts');
        if (savedPosts) {
            setPosts(JSON.parse(savedPosts));
        }
    }, []);

    return (
        <div className='HomePage'>
            <h1>MOOC Study Buddy Finder</h1>
            <div className='nav-buttons'>
                <Link to="/create-post">
                    <button>Create Study Post</button>
                </Link>
                <Link to="/find-groups">
                    <button>Find Study Groups</button>
                </Link>
            </div>
            
            <h2>Recent Study Posts</h2>
            <div className='posts-container'>
                {posts.length > 0 ? (
                    posts.map((post, index) => (
                        <div key={index} className='post-card'>
                            <h3>{post.course_name}</h3>
                            <p>Platform: {post.platform}</p>
                            <p>Time Zone: {post.timezone}</p>
                            <p>Current Week: {post.current_week}</p>
                            <p>Looking for: {post.group_size} people</p>
                            <p>Contact: {post.contact_info}</p>
                            <p className='post-date'>
                                Posted: {new Date(post.created_at).toLocaleDateString()}
                            </p>
                        </div>
                    ))
                ) : (
                    <p className='no-posts'>No study posts yet. Be the first to create one!</p>
                )}
            </div>
        </div>
    );
};

export default HomePage;