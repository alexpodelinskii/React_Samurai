import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import style from './Profile.module.css';
import ProfileInfo from './ProfileInfo';




const Profile = (props) => {
    return (
        <div className={style.Items}>
            <ProfileInfo />
            <MyPosts postsData={props.postsData} addPost={props.addPost} />

        </div>
    )
}

export default Profile;