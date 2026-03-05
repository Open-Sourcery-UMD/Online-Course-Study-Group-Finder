import React, { useState, useEffect } from 'react';
import './FindGroups.css';

const FindGroups = () => {
    const [posts, setPosts] = useState([]);
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [filters, setFilters] = useState({
        platform: '',
        timezone: '',
        week_range: 2
    });
    const [userWeek, setUserWeek] = useState('');

    useEffect(() => {
        // Load posts from localStorage
        const savedPosts = JSON.parse(localStorage.getItem('studyPosts') || '[]');
        setPosts(savedPosts);
    }, []);

    const handleMatch = () => {
        if (!userWeek) {
            alert('Please enter your current week');
            return;
        }

        let filtered = [...posts];

        // Filter by platform
        if (filters.platform) {
            filtered = filtered.filter(post => post.platform === filters.platform);
        }

        // Filter by timezone (simple match)
        if (filters.timezone) {
            filtered = filtered.filter(post => 
                post.timezone.toLowerCase().includes(filters.timezone.toLowerCase())
            );
        }

        // Filter by week range
        const userWeekNum = parseInt(userWeek);
        filtered = filtered.filter(post => {
            const postWeek = parseInt(post.current_week);
            return Math.abs(postWeek - userWeekNum) <= filters.week_range;
        });

        setFilteredPosts(filtered);
    };

    const platforms = ['All', 'Coursera', 'edX', 'Udemy', 'Other'];

    return (
        <div className='FindGroups'>
            <h2>Find Study Groups</h2>
            
            <div className='filter-section'>
                <div className='filter-group'>
                    <label>Your Current Week:</label>
                    <input
                        type='number'
                        value={userWeek}
                        onChange={(e) => setUserWeek(e.target.value)}
                        min='1'
                        placeholder='Enter your week'
                    />
                </div>

                <div className='filter-group'>
                    <label>Platform:</label>
                    <select
                        value={filters.platform}
                        onChange={(e) => setFilters({...filters, platform: e.target.value})}
                    >
                        {platforms.map(platform => (
                            <option key={platform} value={platform === 'All' ? '' : platform}>
                                {platform}
                            </option>
                        ))}
                    </select>
                </div>

                <div className='filter-group'>
                    <label>Your Timezone:</label>
                    <input
                        type='text'
                        value={filters.timezone}
                        onChange={(e) => setFilters({...filters, timezone: e.target.value})}
                        placeholder='e.g., EST'
                    />
                </div>

                <div className='filter-group'>
                    <label>Week Range:</label>
                    <select
                        value={filters.week_range}
                        onChange={(e) => setFilters({...filters, week_range: parseInt(e.target.value)})}
                    >
                        <option value={1}>1 week</option>
                        <option value={2}>2 weeks</option>
                        <option value={3}>3 weeks</option>
                        <option value={4}>4 weeks</option>
                    </select>
                </div>

                <button onClick={handleMatch} className='match-button'>
                    Find Matches
                </button>
            </div>

            <div className='results-section'>
                <h3>Matched Study Groups ({filteredPosts.length})</h3>
                <div className='matches-container'>
                    {filteredPosts.map(post => (
                        <div key={post.id} className='match-card'>
                            <h4>{post.course_name}</h4>
                            <p><strong>Platform:</strong> {post.platform}</p>
                            <p><strong>Time Zone:</strong> {post.timezone}</p>
                            <p><strong>Current Week:</strong> {post.current_week}</p>
                            <p><strong>Looking for:</strong> {post.group_size} people</p>
                            <p><strong>Contact:</strong> {post.contact_info}</p>
                        </div>
                    ))}
                    {filteredPosts.length === 0 && (
                        <p className='no-results'>No matches found. Try adjusting your filters!</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FindGroups;