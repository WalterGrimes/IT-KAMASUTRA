import React, { useEffect } from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { SetUserProfile } from './../../redux/profile-reducer';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProfileContainer = (props) => {
    const { userId } = useParams();

    useEffect(() => {
        let userID = userId || 2; 
        if (props.profile && props.profile.userId === userID) {
            return; 
        }
    
        const fetchProfile = async () => {
            try {
                console.log(`Fetching profile for user ID: ${userID}`); // Логируем userID
                const response = await axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userID}`);
                props.SetUserProfile(response.data);
            } catch (error) {
                console.error("Ошибка при получении данных профиля:", error);
                if (error.response) {
                    // Запрос был сделан и сервер ответил кодом, отличным от 2xx
                    console.error("Response data:", error.response.data);
                    console.error("Response status:", error.response.status);
                    console.error("Response headers:", error.response.headers);
                } else if (error.request) {
                    // Запрос был сделан, но ответа не получено
                    console.error("Request data:", error.request);
                } else {
                    // Произошла ошибка при настройке запроса
                    console.error("Error message:", error.message);
                }
            }
        };
    
        fetchProfile();
    }, [userId, props.profile]);

    return <Profile {...props} profile={props.profile} />;
};

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

export default connect(mapStateToProps, { SetUserProfile })(ProfileContainer);
