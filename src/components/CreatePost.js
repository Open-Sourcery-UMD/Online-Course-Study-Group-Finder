import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreatePost.css';

const CreatePost = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        course_name: '',
        platform: 'Coursera',
        timezone: '',
        current_week: '',
        group_size: '',
        contact_info: ''
    });

    const platforms = ['Coursera', 'edX', 'Udemy', 'Other'];

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Get existing posts from localStorage
        const existingPosts = JSON.parse(localStorage.getItem('studyPosts') || '[]');
        
        // Create new post with ID and timestamp
        const newPost = {
            ...formData,
            id: Date.now(), // Simple unique ID
            created_at: new Date().toISOString()
        };
        
        // Add to existing posts
        const updatedPosts = [newPost, ...existingPosts];
        
        // Save back to localStorage
        localStorage.setItem('studyPosts', JSON.stringify(updatedPosts));
        
        alert('Post created successfully!');
        navigate('/home');
    };

    return (
        <div className='CreatePost'>
            <h2>Create a Study Group Post</h2>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label>Course Name:</label>
                    <input
                        type='text'
                        name='course_name'
                        value={formData.course_name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className='form-group'>
                    <label>Platform:</label>
                    <select
                        name='platform'
                        value={formData.platform}
                        onChange={handleChange}
                    >
                        {platforms.map(platform => (
                            <option key={platform} value={platform}>
                                {platform}
                            </option>
                        ))}
                    </select>
                </div>

                <div className='form-group'>
                    <label>Your Time Zone:</label>
                    <input
                        type='text'
                        name='timezone'
                        value={formData.timezone}
                        onChange={handleChange}
                        placeholder='e.g., EST, PST, GMT+2'
                        required
                    />
                </div>

                <div className='form-group'>
                    <label>Current Week:</label>
                    <input
                        type='number'
                        name='current_week'
                        value={formData.current_week}
                        onChange={handleChange}
                        min='1'
                        required
                    />
                </div>

                <div className='form-group'>
                    <label>Group Size:</label>
                    <input
                        type='number'
                        name='group_size'
                        value={formData.group_size}
                        onChange={handleChange}
                        min='1'
                        max='10'
                        required
                    />
                </div>

                <div className='form-group'>
                    <label>Contact Info:</label>
                    <input
                        type='text'
                        name='contact_info'
                        value={formData.contact_info}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type='submit'>Create Post</button>
            </form>
        </div>
    );
};

export default CreatePost;