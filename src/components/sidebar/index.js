import React, { useEffect, useState } from 'react';
import './sidebar.css';
import SidebarButton from './sidebarButton';
import { MdSpaceDashboard } from "react-icons/md";
import { IoMdTrendingUp } from "react-icons/io";
import { FaPlay } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import { MdLibraryMusic } from "react-icons/md";
import { FaSignOutAlt } from "react-icons/fa";
import apiClient from '../../spotify';

export default function Sidebar() {
  const [image, setImage] = useState('/Spotify_Primary_Logo_RGB_Black.png')
  useEffect(() => {
    apiClient.get("me").then(response => {
      setImage(response.data.images[0].url);
    });
  }, [])
return (
    <div className='sidebar-container'>
       <img src={image} className='profile-img'  alt='pfp'/> 

        <div>
            <SidebarButton title="Feed" to="/feed" icon={<MdSpaceDashboard />}/>
            <SidebarButton title="Trending" to="/trending" icon={<IoMdTrendingUp />}/>
            <SidebarButton title="Player" to="/player" icon={<FaPlay />}/>
            <SidebarButton title="Favorite" to="/favorites" icon={<MdFavorite />}/>
            <SidebarButton title="Library" to="/library" icon={<MdLibraryMusic />}/>
        </div>
        <SidebarButton title="Sign out" to="" icon={<FaSignOutAlt />}/>
    </div>
    
  )
}
