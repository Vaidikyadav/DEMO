import React from 'react'
import { BsCart3, BsFillGearFill, BsListCheck, BsMenuButtonFill } from 'react-icons/bs'
import './slidebar.css'

export const Slidebar = () => {
  return (
    <aside id='sidebar'>
        <div className="sidebar-title">
            <div className="sidebar-brand">
                <BsCart3 className='icon_header'/> SHOP
            </div>
        <span className='icon-close'>X</span>
        </div>

        <ul className='sidebar-list'> 
        <li className='sidebar-list-item'>
            < a href=''>
                <BsCart3 className='icon'/> Product
            </a>
            </li> 
            <li className='sidebar-list-item'>
            < a href=''>
                <BsCart3  className='icon'/> Categories
            </a>
            </li> 
            <li className='sidebar-list-item'>
            < a href=''>
                <BsCart3 className='icon'/> Dashboard
            </a>
            </li> 

            <li className='sidebar-list-item'>
            < a href=''>
                <BsListCheck className='icon'/> Inventory
            </a>
            </li> 
            <li className='sidebar-list-item'>
            < a href=''>
                < BsMenuButtonFill className='icon'/> Reports
            </a>
            </li> 
            <li className='sidebar-list-item'>
            < a href=''>
                <BsFillGearFill className='icon'/> Settings
            </a>
            </li> 
        </ul>

    </aside>
  )
}
