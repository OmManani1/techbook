import React from 'react'
import './rightside.css'
import {Users} from "../../dummyData"
import Online from '../online/Online'


export default function Rightside() {
  return (
    <div className='rightside'>
      <div className="rightsideWrapper">
        <div className="birthdayContainer">
          <img src="/assets/gift.png" className='birthdayImg' alt="" />
          <span className="birthdayText">
            <b>Pola Fostar</b> and <b>3 other friends</b> have birthday today.
          </span>
        </div>
        <img src="/assets/ad.png" alt="" className="rightbarAd" />
        <h4 className="rightbarTital">Online Freinds</h4>
        <ul className="rightbarFriendList">
          {Users.map(u=>(
            <Online key={u.id} user={u}  />
          ))}
          </ul>
      </div>
    </div>
  )
}
