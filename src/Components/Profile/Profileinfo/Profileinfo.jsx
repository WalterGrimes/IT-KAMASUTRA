import React from 'react';
import s from './Profileinfo.module.css';
import Preloader from './../../common/Preloader/Preloader';

const Profileinfo = (props) => {
    if (!props.profile) {
        return <Preloader />;
    }

    return (
        <div>
            <div>
                <img 
                  src="https://w0.peakpx.com/wallpaper/15/456/HD-wallpaper-swiss-mountains-valley-nature-landscape-u-16-9-widescreen-background-1096.jpg" 
                  alt="Nature" 
                  className={s.profileImage} 
                />
            </div>
            <div className={s.descriptionBlock}>
                {/* Аватар пользователя */}
                <img 
                  src={props.profile.photos?.large || "https://via.placeholder.com/150"} 
                  alt="User Avatar" 
                  className={s.avatar}
                />
                {/* Описание пользователя */}
                <div>
                    <p>Имя: {props.profile.fullName || "Имя не указано"}</p>
                    <p>Обо мне: {props.profile.aboutMe || "Нет описания"}</p>
                    <p>Работа: {props.profile.lookingForAJob ? 'Ищу работу' : 'Не ищу работу'}</p>
                    <p>Навыки: {props.profile.lookingForAJobDescription || "Нет навыков"}</p>
                </div>
            </div>
        </div>
    );
};

export default Profileinfo;
