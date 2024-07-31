import React, { useState, useEffect } from 'react';
import api from '../utils/api';
import AIRecommendations from './AIRecommendations';

const ScheduleForm = () => {
    const [content, setContent] = useState('');
    const [mediaUrl, setMediaUrl] = useState('');
    const [scheduleTime, setScheduleTime] = useState('');
    const [platform, setPlatform] = useState('');
    const [recommendation, setRecommendation] = useState(null);

    useEffect(() => {
        const fetchRecommendation = async () => {
            try {
                const res = await api.get('/ai/recommendations');
                setRecommendation(res.data);
            } catch (err) {
                console.error(err);
            }
        };

        fetchRecommendation();
    }, []);

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
        <div>
            <AIRecommendations />
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
        </div>
    );
};

export default ScheduleForm;
