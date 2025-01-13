import React from 'react'
import "./online.css"


export default function Online({user}) {
     return (
        <div>
            <li className="rightbarFriend">
                <div className="rightbarProfilePic">
                    <img src={user.profilePicture} alt="" className="rightbarFriendImg" />
                    <span className="rightbarOnlineBadge"></span>
                </div>
                <span className="rightbarProfileText">{user.username}</span>
            </li>

        </div>
    )
}
