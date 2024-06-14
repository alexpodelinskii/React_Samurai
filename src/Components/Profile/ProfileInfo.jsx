import React from 'react';
import style from './Profile.module.css';

const ProfileInfo = () => {
    return (
        <div className={style.Content}>
            <div>
                <img src='https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg' alt=''></img>
            </div>
            <div>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOd256TcC6vcaQ99TYzoP0pBbch9_Q-bbrmw&usqp=CAU' alt=''></img> + discription
            </div>


        </div>
    )
}

export default ProfileInfo;