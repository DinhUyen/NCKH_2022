import { NavLink } from "react-router-dom"
import icon from '../assets/images/favicon.png'
import home from '../assets/images/house-512.png'
import login from '../assets/images/padlock-4-512.png'
export default function SideNav(){
    return(
    <nav className="sidebar w3-bar-block w3-small w3-hide-small w3-center ">
    <br/><br/>
    <img src={icon} style={{width:'90%'}}/>
      <i className="w3-bar-item w3-padding-large "><br/><br/><br/>Version <br/> 0.1.5</i>
    <a className="w3-bar-item w3-button w3-padding-large w3-hover-black">
    <img src={home} style={{width:'90%'}}/>
      <i className="fa fa-solid fa-home w3-xxlarge"></i>
      <p>HOME</p>
    </a>
  
    
  
    <a  className="w3-bar-item w3-button w3-padding-large w3-hover-black">
     
      <NavLink style={{textDecoration: 'none'}} className="redirect" to="/login">
        <img src={login} style={{width:'90%'}}/>
        <i className="fa fa-solid fa-lock-open w3-xxlarge"></i>
        <p>LOGIN</p>
      </NavLink>
    </a>

  </nav>
    )
}