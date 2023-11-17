import React from 'react'
import { useState } from 'react'
import './RightSide.css'
import Home from '../../img/home.png'
import Notification from '../../img/noti.png'
import Comment from '../../img/comment.png'
import {UilSetting} from '@iconscout/react-unicons'
import TrendCard from '../TrendCard/TrendCard'
import ShareModal from '../ShareModal/ShareModal'

const RightSide =()=>{
    const[modalOpened,setModalOpened]=useState(false);
    return(
        <div className="RightSide">
            <div className="navIcon">
                <img src={Home} alt="" />
                <UilSetting/>
                <img src={Notification} alt="" />
                <img src={Comment} alt="" />
            </div>

            <TrendCard/>

            {/* <button className='button r-button' onClick={()=>setModalOpened(true)}>
            Share   
            </button> */}
            <ShareModal modalOpened={modalOpened}
            setModalOpened={setModalOpened}/>
        </div>
    )
}

export default RightSide