import "./closefriend.css"

export default function Closefriend({user}) {
    return (
        <div>
            <li className="sidebarFriendListItem">
                <img src={user.profilePicture} className='friendImg' alt="" />
                <span className="sidebarFriendListItemText">{user.username}</span>
                
            </li>
        </div>
    )
}
