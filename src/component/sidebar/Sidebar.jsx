import React from 'react'
import './sidebar.css'
import { RssFeed, Chat, PlayCircle, Groups, Bookmark, Event, WorkOutline, School, Help } from "@mui/icons-material";
import { Users } from "../../dummyData"
import Closefriend from '../closefriend/Closefriend';


export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeed />
                        <span className="sidebarListItemText">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                        <Chat />
                        <span className="sidebarListItemText">Chat</span>
                    </li>
                    <li className="sidebarListItem">
                        <PlayCircle />
                        <span className="sidebarListItemText">Videos</span>
                    </li>
                    <li className="sidebarListItem">
                        <Groups />
                        <span className="sidebarListItemText">Groups</span>
                    </li>
                    <li className="sidebarListItem">
                        <Bookmark />
                        <span className="sidebarListItemText">Bookmarks</span>
                    </li>
                    <li className="sidebarListItem">
                        <Help />
                        <span className="sidebarListItemText">Questions</span>
                    </li>
                    <li className="sidebarListItem">
                        <WorkOutline />
                        <span className="sidebarListItemText">Jobs</span>
                    </li>
                    <li className="sidebarListItem">
                        <Event />
                        <span className="sidebarListItemText">Events</span>
                    </li>
                    <li className="sidebarListItem">
                        <School />
                        <span className="sidebarListItemText">Courses</span>
                    </li>
                </ul>
                <div className="sidebarButton">
                    <button className="sidebarBtn">
                        Show More
                    </button>
                </div>
                <hr className='sidebarHr' />
                <ul className="sidebarFriendList">
                    {Users.map(u => (
                        <Closefriend key={u.id} user={u} />
                    ))}
                </ul>
            </div>
        </div >
    )
}
