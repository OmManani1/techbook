import { Search, Person, Chat, Notifications } from "@mui/icons-material"
import "./navigation.css"


export default function Navigation() {
    return (
        <>
            <div className="navbarContainer">
                <div className="navLeft">
                    <div className="logo">
                        <span className="logoItem">TechBook</span>
                    </div>
                </div>
                <div className="navCenter">
                    <div className="searchBar">
                        <span className="searchLogo">
                            <Search />
                        </span>
                        <input type="search" name="" placeholder="Search a People and post" id="" className="searchInput" />
                    </div>
                </div>
                <div className="navRight">
                    <div className="navbarLinks">
                        <div className="navLinkItem">
                            HomePages
                        </div>
                        <div className="navLinkItem">
                            TimeLine
                        </div>
                    </div>
                    <div className="navIcon">
                        <div className="navIconItem">
                            <Person  />
                            <span className="navIconBadge">1</span>
                        </div>
                        <div className="navIconItem">
                            <Chat />
                            <span className="navIconBadge">5</span>
                        </div>
                        <div className="navIconItem">
                            <Notifications />
                            <span className="navIconBadge">1</span>
                        </div>
                    </div>
                   
                        <img src="/assets/person/3.jpeg" className="profileLogo" alt="" srcset="" />
                 


                </div>

            </div>
        </>
    )
}