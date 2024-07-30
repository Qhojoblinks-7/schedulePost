import React, { useState } from 'react';
import api from '../utils/api';

const ScheduleForm = () => {
    const [content, setContent] = useState('');
    const [mediaUrl, setMediaUrl] = useState('');
    const [scheduleTime, setScheduleTime] = useState('');
    const [platform, setPlatform] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const post = {
            content,
            mediaUrl,
            scheduleTime,
            platform
        };

        try {
            await api.post('/posts/schedule', post);
            alert('Post scheduled successfully');
        } catch (err) {
            alert('Error scheduling post');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Post content"
                required
            />
            <input
                type="text"
                value={mediaUrl}
                onChange={(e) => setMediaUrl(e.target.value)}
                placeholder="Media URL"
            />
            <input
                type="datetime-local"
                value={scheduleTime}
                onChange={(e) => setScheduleTime(e.target.value)}
                required
            />
            <select
                value={platform}
                onChange={(e) => setPlatform(e.target.value)}
                required
            >
                <option value="">Select platform</option>
                <option value="twitter">Twitter</option>
                <option value="facebook">Facebook</option>
                <option value="instagram">Instagram</option>
                <option value="whatsapp">WhatsApp</option>
            </select>
            <button type="submit">Schedule Post</button>
        </form>
    );
};

export default ScheduleForm;
