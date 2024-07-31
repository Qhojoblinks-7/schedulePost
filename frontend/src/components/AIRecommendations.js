import React, { useState, useEffect } from 'react';
import api from '../utils/api';

const AIRecommendations = () => {
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

    return (
        <div>
            {recommendation ? (
                <div>
                    <p>{recommendation.message}</p>
                    <p>Recommended Time: {new Date(recommendation.recommendedTime).toLocaleString()}</p>
                </div>
            ) : (
                <p>Loading AI recommendations...</p>
            )}
        </div>
    );
};

export default AIRecommendations;
