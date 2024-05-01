import React from 'react'
import{BsFillBellFill, BsFillEnvelopeFill, BsJustify, BsPersonCircle, BsSearch} from 'react-icons/bs'

const Header = () => {
  return (
    <div className='header' style={{gridArea:"header",
    height:"60px",display:"flex",alignItems:"center",justifyContent:"space-between",
    padding:"0 30px 0 30px", boxShadow:"0 6px 7px -3px rgba(0,0,0,0.35)"}}>
        <div className="menu-icon" style={{display:"none"}}>
            < BsJustify className="icons"/>
        </div>
        <div className="header-left">
            <BsSearch className='icons'/>
        </div>
        <div className="header-right">
            <BsFillBellFill  className='icons'/>
            <BsFillEnvelopeFill className='icons'/>
            <BsPersonCircle className='icons' />
        </div>
     </div>
  )
}

export default Header 